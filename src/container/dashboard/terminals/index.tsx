import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

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
import { filterValue } from '../../../data/filter-data'
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
import {
  getRequestTerminalStats,
  getTerminalsHandler,
  getTerminalStats,
} from './utils'
import AddMethodModal from './modals/add-method'
import AddTerminalModal from './modals/add-terminal-form'
import { errorMessage } from '../../../utils/message'
import BulkTerminalModal from './modals/bulk-terminal-upload'
import AllPermissions from '../../../configs/access-control'
import { terminalReqFilterOptions } from '../../../helper/filter-helper'
import { useAppContext } from '../../../context'
import { TerminalSelects } from '../../../data/select-data'

const TransactionContainer = () => {
  /** TODO:
   * REFACTOR COMPONENT
   * CLEAN UP AND MAKE IT READABLE
   * TERMINALREQUEST AND  EXISTING SHOULD BE MOVE TO DIFFERENT FOLDER
   * */
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const {
    state: { appFilters },
  } = useAppContext()
  const found = TERMINALTABS.find((element) => element.value === queryParam)
  const { createTerminalAccess } = AllPermissions()
  const [values, setValues] = useState(filterValue)
  const [requestValues, setRequestValues] = useState(filterValue)
  const [isShown, setIsShown] = useState(false)
  const [addMethod, setAddMethod] = useState<'manual' | 'excel' | ''>('')

  /* Get terminalRequest filter options from appFilter state */
  let terminalReqOptions = terminalReqFilterOptions(
    appFilters?.['terminalRequest']
  )

  const { isLoading: loading, data: stats } = useQuery(
    'terminal-stats',
    getTerminalStats
  )

  const { isLoading: requestLoading, data: requestStats } = useQuery(
    'terminal-request',
    getRequestTerminalStats
  )
  const Statistics = stats?.data
  const requestStatistics = requestStats?.data

  const getTerminalsRequestsHandler = (requestValues: any) => {
    return getTerminalsRequestsData(`terminals/requests`, requestValues)
  }
  const {
    isLoading: isLoadingExistingTerminals,
    data: existingTerminalsData,
    isError: isErrorExistingTerminals,
    isFetching: isFetchingExistingTerminals,
    refetch,
    error: existingRequestsError,
  } = useQuery(['terminals', values], () => getTerminalsHandler(values), {
    keepPreviousData: true,
  })

  const {
    isLoading: isLoadingTerrminalsRequests,
    data: terrminalsRequestsData,
    isError: isErrorTerrminalsRequests,
    isFetching: isFetchingTerminalRequests,
    refetch: refetchTerminalRequests,
    error: terminsalsRequestsError,
  } = useQuery(
    ['requestsTerminals', requestValues],
    () => getTerminalsRequestsHandler(requestValues),
    { keepPreviousData: true }
  )

  /* Check if activetab is existingTerminal*/
  let isExisting = queryParam !== 'requests'
  /* Check if activetab is requestTerminal*/
  let isRequest = queryParam === 'requests'

  let existingTerminals
  if (isLoadingExistingTerminals) {
    existingTerminals = <Loader />
  } else if (isErrorExistingTerminals) {
    existingTerminals = (
      <FallBack
        error
        refetch={refetch}
        title={`${errorMessage(existingRequestsError)}`}
      />
    )
  } else if (existingTerminalsData?.data?.length < 1) {
    existingTerminals = (
      <FallBack title="You have no terminals yet." refetch={refetch} />
    )
  } else {
    existingTerminals = (
      <Table
        tableName="existTerminal"
        tableData={existingTerminalsData?.data}
        tableHeaders={terminalHeader}
        dateFormat="YYYY-MM-DD HH:mm:ss"
      />
    )
  }

  let requestsTerrminals
  if (isLoadingTerrminalsRequests) {
    requestsTerrminals = <Loader />
  } else if (isErrorTerrminalsRequests) {
    existingTerminals = (
      <FallBack
        error
        refetch={refetchTerminalRequests}
        title={`${errorMessage(terminsalsRequestsError)}`}
      />
    )
  } else if (terrminalsRequestsData?.data?.length < 1) {
    requestsTerrminals = (
      <FallBack
        title="You have no requested terminals yet. "
        refetch={refetchTerminalRequests}
      />
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

  /*TODO: REFACTOR Filters*/
  const showFilters = {
    ...(isExisting && {
      search: {
        placeholder: 'Search',
      },
    }),
    ...(isRequest && {
      search: {
        placeholder: 'Search',
      },
    }),
    ...(isRequest && {
      date: true,
    }),
    ...(isExisting && {
      selects: TerminalSelects,
    }),
    ...(isRequest && {
      selects: [
        {
          searchQuery: 'status',
          placeholder: 'Status',
          values: terminalReqOptions,
          value: '',
        },
      ],
    }),
    buttons: [
      createTerminalAccess && {
        label: 'Register New Terminal',
        onClick: () => toggle(),
        buttonClass: 'add-button',
      },
    ].filter(Boolean),
  }

  return (
    <>
      <Container
        showFilters={showFilters}
        title="Terminals"
        setFilterValues={setValues}
        isFetching={isFetchingExistingTerminals || isFetchingTerminalRequests}
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
              statistics={terminalRequestsStats(requestStatistics)}
              loading={requestLoading}
              labels={terminalsRequestsLabels}
              icons={requestTerminalIcons}
            />
            <Jumbotron padding="0">{requestsTerrminals}</Jumbotron>
            <Pagination
              data={terrminalsRequestsData}
              setPageNumber={setRequestValues}
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
            <Jumbotron padding="0">{existingTerminals}</Jumbotron>
            <Pagination
              data={existingTerminalsData}
              setPageNumber={setValues}
            />
          </>
        )}
      </Container>
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
    </>
  )
}

export default TransactionContainer
