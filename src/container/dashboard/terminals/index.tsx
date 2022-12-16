import React, { useState } from 'react'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
  TabsPage,
} from '../../../components'
import { Container } from '../../../components/layout'
import { getTerminalsRequestsData } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useQuery } from 'react-query'
import { filterValue } from '../../../data/filter-data'
import { TerminalSelects } from './config'
import { useLocation } from 'react-router-dom'
import {
  terminalHeader,
  terminalRequestHeader,
} from '../../../data/table-headers'
import { Color } from '../../../assets/theme'
import {
  requestTerminalIcons,
  terminalIcons,
  terminalLabels,
  terminalRequestsStats,
  terminalsRequestsLabels,
  terminalStats,
  TERMINALTABS,
} from '../../../data/terminal-data'
import { getTerminalsHandler, getTerminalStats } from './utils'
import AddMethodModal from './modals/add-method'
import AddTerminalModal from './modals/add-terminal-form'
import { errorMessage } from '../../../utils/message'
import BulkTerminalModal from './modals/bulk-terminal-upload'

const TransactionContainer = () => {
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')

  const found = TERMINALTABS.find((element) => element.value === queryParam)
  const [values, setValues] = useState(filterValue)
  const [isShown, setIsShown] = useState(false)
  const [addMethod, setAddMethod] = useState<'manual' | 'excel' | ''>('')

  const { isLoading: loading, data: Stats } = useQuery(
    'terminal-stats',
    getTerminalStats
  )
  const Statistics = Stats?.data

  const getTerminalsRequestsHandler = (count: number) => {
    return getTerminalsRequestsData(`terminals/requests`, filterValue.count)
  }
  const {
    isLoading: isLoadingExistingTerrminals,
    data: existingTerrminalsData,
    isError: isErrorExistingTerrminals,
    isFetching: isFetchingExistingTerrminals,
    refetch,
    error: existingRequestsError,
  } = useQuery(['terminals', values], () => getTerminalsHandler(values), {
    keepPreviousData: true,
  })

  const {
    isLoading: isLoadingTerrminalsRequests,
    data: terrminalsRequestsData,
    isError: isErrorTerrminalsRequests,
    isFetching: isFetchingTerrminalsRequests,
    error: terminsalsRequestsError,
  } = useQuery(
    ['requestsTerminals', values.count],
    () => getTerminalsRequestsHandler(values.count),
    { keepPreviousData: true }
  )

  let existingTerrminals
  if (isLoadingExistingTerrminals) {
    existingTerrminals = <Loader />
  } else if (isErrorExistingTerrminals) {
    existingTerrminals = (
      <FallBack
        error
        refetch={refetch}
        title={`${errorMessage(existingRequestsError)}`}
      />
    )
  } else if (existingTerrminalsData?.data?.length < 1) {
    existingTerrminals = (
      <FallBack title="You have no terminals yet." refetch={refetch} />
    )
  } else {
    existingTerrminals = (
      <Table
        tableName="existTerminal"
        tableData={existingTerrminalsData?.data}
        tableHeaders={terminalHeader}
        dateFormat="YYYY-MM-DD HH:mm:ss"
      />
    )
  }
  let requestsTerrminals
  if (isLoadingTerrminalsRequests) {
    requestsTerrminals = <Loader />
  } else if (isErrorTerrminalsRequests) {
    existingTerrminals = (
      <FallBack
        error
        refetch={refetch}
        title={`${errorMessage(terminsalsRequestsError)}`}
      />
    )
  } else if (terrminalsRequestsData?.data?.length < 1) {
    requestsTerrminals = (
      <FallBack title="You have no requested terminals yet. " />
    )
  } else {
    requestsTerrminals = (
      <Table
        tableName="requestsTerrminals"
        tableData={terrminalsRequestsData?.data}
        tableHeaders={terminalRequestHeader}
        routePath="dashboard/terminals/requests"
      />
    )
  }

  const toggle = () => {
    setIsShown(!isShown)
  }

  const handleAddMethod = (method: 'manual' | 'excel' | '') => {
    setIsShown(false)
    setAddMethod(method)
  }

  return (
    <>
      <AddMethodModal
        isShown={isShown}
        toggle={toggle}
        handleAddMethod={handleAddMethod}
        setIsShown={setIsShown}
      />
      <AddTerminalModal
        addMethod={addMethod}
        handleAddMethod={handleAddMethod}
      />
      <BulkTerminalModal
        addMethod={addMethod}
        handleAddMethod={handleAddMethod}
      />
      <Container
        showFilters={{
          search: {
            placeholder: 'Search',
          },
          selects: TerminalSelects,
          buttons: [
            {
              label: 'Register New Terminal',
              onClick: () => toggle(),
              buttonClass: 'add-button',
            },
          ],
        }}
        title="Terminals"
        setFilterValues={setValues}
        isFetching={
          isFetchingExistingTerrminals || isFetchingTerrminalsRequests
        }
      >
        <TabsPage.Tabs
          hideStatus
          color={Color.alerzoBlack}
          tabs={TERMINALTABS}
          currentValue={found?.value || 'existing'}
        />
        {queryParam === 'requests' ? (
          <>
            <CardWidget
              statistics={terminalRequestsStats()}
              loading={loading}
              labels={terminalsRequestsLabels}
              icons={requestTerminalIcons}
            />
            <Jumbotron padding="0">{requestsTerrminals}</Jumbotron>
            <Pagination
              data={terrminalsRequestsData}
              setPageNumber={setValues}
            />
          </>
        ) : (
          <>
            <CardWidget
              statistics={terminalStats(Statistics)}
              loading={loading}
              labels={terminalLabels}
              icons={terminalIcons}
            />
            <Jumbotron padding="0">{existingTerrminals}</Jumbotron>
            <Pagination
              data={existingTerrminalsData}
              setPageNumber={setValues}
            />
          </>
        )}
      </Container>
    </>
  )
}

export default TransactionContainer
