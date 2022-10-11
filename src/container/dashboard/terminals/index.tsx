import React, { useEffect, useState } from 'react'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'
import {
  getTerminalsData,
  getTerminalsRequestsData,
} from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useQuery } from 'react-query'
import { filterValue } from '../../../data/filter-data'
import { Tabs, TabsContext } from '../../../components/tabs-new/Tabs'
import DynamicTable from '../../../components/react-table'
import { terminalsTableMapper } from './tableConfig'
import { useNavigate } from 'react-router-dom'
import { terminalsHeaderList } from '../../../data/table-headers'

const TransactionContainer = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState(filterValue)
  const { setActiveTab } = React.useContext(TabsContext)

  useEffect(() => {
    setActiveTab && setActiveTab('Existing Terminals')
  }, [])

  const getTerminalsHandler = (count: number) => {
    return getTerminalsData(`terminals`, filterValue.count)
  }
  const getTerminalsRequestsHandler = (count: number) => {
    return getTerminalsRequestsData(`terminals/requests`, filterValue.count)
  }

  const {
    isLoading: isLoadingExistingTerrminals,
    data: existingTerrminalsData,
    isError: isErrorExistingTerrminals,
    isFetching: isFetchingExistingTerrminals,
  } = useQuery(
    ['terminals', values.count],
    () => getTerminalsHandler(values.count),
    { keepPreviousData: true }
  )
  const {
    isLoading: isLoadingTerrminalsRequests,
    data: terrminalsRequestsData,
    isError: isErrorTerrminalsRequests,
    isFetching: isFetchingTerrminalsRequests,
  } = useQuery(
    ['requestsTerminals', values.count],
    () => getTerminalsRequestsHandler(values.count),
    { keepPreviousData: true }
  )
  //   <DynamicTable
  //   data={existingTerrminalsData?.data}
  //   mappers={terminalsTableMapper}
  //   handleClick={(item) => {
  //     navigate(item?.id)
  //   }}
  // />
  let existingTerrminals
  if (isLoadingExistingTerrminals) {
    existingTerrminals = <Loader />
  } else if (isErrorExistingTerrminals) {
    existingTerrminals = <FallBack error title={'Failed to load terminals. '} />
  } else if (existingTerrminalsData?.data?.length < 1) {
    existingTerrminals = <FallBack title={'You have no terminals yet. '} />
  } else {
    existingTerrminals = (
      <Table
        tableName="existTerminal"
        tableData={existingTerrminalsData?.data}
        tableHeaders={terminalsHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
      />
    )
  }
  let requestsTerrminals
  if (isLoadingTerrminalsRequests) {
    requestsTerrminals = <Loader />
  } else if (isErrorTerrminalsRequests) {
    existingTerrminals = <FallBack error title={'Failed to load terminals. '} />
  } else if (terrminalsRequestsData?.data?.length < 1) {
    requestsTerrminals = (
      <FallBack title={'You have no requested terminals yet. '} />
    )
  } else {
    requestsTerrminals = (
      <DynamicTable
        data={terrminalsRequestsData?.data}
        mappers={terminalsTableMapper}
      />
    )
  }

  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search',
        },
        selects: [
          { placeholder: 'models', values: [], value: '' },
          { placeholder: 'status', values: [], value: '' },
        ],
        buttons: [
          { label: 'Add new terminal', onClick: () => console.log('first') },
        ],
      }}
      title="Terminals"
      setFilterValues={setValues}
      isFetching={isFetchingExistingTerrminals || isFetchingTerrminalsRequests}
    >
      <Tabs activeTab={'Existing Terminals'}>
        <Tabs.TabLinks>
          <Tabs.Tab label="Existing Terminals">Existing Terminals</Tabs.Tab>
          <Tabs.Tab label="Terminal Requests">Terminal Requests</Tabs.Tab>
        </Tabs.TabLinks>
        <div>
          <Tabs.Panel label="Existing Terminals">
            <CardWidget />
            <Jumbotron padding={'0'}>{existingTerrminals}</Jumbotron>
            <Pagination
              data={existingTerrminalsData}
              setPageNumber={setValues}
            />
          </Tabs.Panel>
          <Tabs.Panel label="Terminal Requests">
            <CardWidget />
            <Jumbotron padding={'0'}>{requestsTerrminals}</Jumbotron>
            <Pagination
              data={terrminalsRequestsData}
              setPageNumber={setValues}
            />
          </Tabs.Panel>
        </div>
      </Tabs>
    </Container>
  )
}

export default TransactionContainer
