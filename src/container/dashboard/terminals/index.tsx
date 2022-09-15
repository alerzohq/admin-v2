import React, { useEffect, useState } from "react";
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from "../../../components";
import { Container } from "../../../components/layout";
import {
  getTerminalsData,
  getTerminalsRequestsData,
} from "../../../utils/apiRequest";
import CardWidget from "../widget/card";
import { useQuery } from "react-query";
import {
  requestsTerminalsHeaderList,
  terminalsHeaderList,
} from "../../../data/table-headers";
import { filterValue } from "../../../data/filter-data";
import { Tabs, TabsContext } from "../../../components/tabs-new/Tabs";

const TransactionContainer = () => {
  const [values, setValues] = useState(filterValue);
  const { setActiveTab } = React.useContext(TabsContext);

  useEffect(() => {
    setActiveTab && setActiveTab("Existing Terminals")
  }, []);

  const getTerminalsHandler = (count: number) => {
    return getTerminalsData(`terminals`, filterValue.count);
  };
  const getTerminalsRequestsHandler = (count: number) => {
    return getTerminalsRequestsData(`terminals/requests`, filterValue.count);
  };

  const {
    isLoading: isLoadingExistingTerrminals,
    data: existingTerrminalsData,
    isError: isErrorExistingTerrminals,
    isFetching: isFetchingExistingTerrminals,
  } = useQuery(
    ["terminals", values.count],
    () => getTerminalsHandler(values.count),
    { keepPreviousData: true }
  );
  const {
    isLoading: isLoadingTerrminalsRequests,
    data: terrminalsRequestsData,
    isError: isErrorTerrminalsRequests,
    isFetching: isFetchingTerrminalsRequests,
  } = useQuery(
    ["requestsTerminals", values.count],
    () => getTerminalsRequestsHandler(values.count),
    { keepPreviousData: true }
  );

  let existingTerrminals;
  if (isLoadingExistingTerrminals) {
    existingTerrminals = <Loader />;
  } else if (isErrorExistingTerrminals) {
    existingTerrminals = (
      <FallBack error title={"Failed to load terminals. "} />
    );
  } else if (existingTerrminalsData?.data?.length < 1) {
    existingTerrminals = <FallBack title={"You have no terminals yet. "} />;
  } else {
    existingTerrminals = (
      <Table
        tableName="terminals"
        tableData={existingTerrminalsData?.data}
        tableHeaders={terminalsHeaderList}
        amountIndex={1}
      />
    );
  }
  let requestsTerrminals;
  if (isLoadingTerrminalsRequests) {
    requestsTerrminals = <Loader />;
  } else if (isErrorTerrminalsRequests) {
    existingTerrminals = (
      <FallBack error title={"Failed to load terminals. "} />
    );
  } else if (terrminalsRequestsData?.data?.length < 1) {
    requestsTerrminals = (
      <FallBack title={"You have no requested terminals yet. "} />
    );
  } else {
    requestsTerrminals = (
      <Table
        tableName="Requests Terrminals"
        tableData={terrminalsRequestsData?.data}
        tableHeaders={requestsTerminalsHeaderList}
        amountIndex={1}
      />
    );
  }

  return (
    <Container
      showFilters={{
        search: {
          placeholder: "Search",
        },
        selects: [
          { placeholder: "models", values: [], value: "" },
          { placeholder: "status", values: [], value: "" },
        ],
        buttons: [
          { label: "Add new terminal", onClick: () => console.log("first") },
        ],
      }}
      title="Terminals"
      setFilterValues={setValues}
      isFetching={isFetchingExistingTerrminals || isFetchingTerrminalsRequests}
    >
      <Tabs activeTab={"Existing Terminals"}>
        <Tabs.TabLinks>
          <Tabs.Tab label="Existing Terminals">Existing Terminals</Tabs.Tab>
          <Tabs.Tab label="Terminal Requests">Terminal Requests</Tabs.Tab>
        </Tabs.TabLinks>
        <div>
          <Tabs.Panel label="Existing Terminals">
            <CardWidget />
            <Jumbotron padding={"0"}>{existingTerrminals}</Jumbotron>
            <Pagination
              data={existingTerrminalsData}
              setPageNumber={setValues}
            />
          </Tabs.Panel>
          <Tabs.Panel label="Terminal Requests">
            <CardWidget />
            <Jumbotron padding={"0"}>{requestsTerrminals}</Jumbotron>
            <Pagination
              data={terrminalsRequestsData}
              setPageNumber={setValues}
            />
          </Tabs.Panel>
        </div>
      </Tabs>
    </Container>
  );
};

export default TransactionContainer;
