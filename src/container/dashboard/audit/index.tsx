import React, { useEffect, useState } from 'react'
// import ReactPaginate from 'react-paginate'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
// import { TimelineIcon } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import {
  FallBack,
  FlexTableWrapper,
  Jumbotron,
  Loader,
  Pagination,
  Table,
  Text,
} from '../../../components'
import { Container } from '../../../components/layout'
import { TimelineElement } from '../../../components/timeline'
import { filterValue } from '../../../data/filter-data'
import { auditHeaderList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'
import { formatDate } from '../../../utils/formatValue'

interface SessionDetails {
  detail: any
}

const Audit = () => {
  const location = useLocation()
  const state = location.state as SessionDetails

  const [componentToRender, setComponentToRender] = useState('auditUsers')
  const [values, setValues] = useState(filterValue)
  const [actionsValues, setActionValues] = useState(filterValue)

  useEffect(() => {
    if (state?.detail.id) {
      setComponentToRender('logs')
    }
    return () => {
      setComponentToRender('auditUsers')
    }
  }, [state?.detail.id])

  const getSessionsDetails = () => {
    return getResource('sessions')
  }

  const { isLoading, isError, data, refetch } = useQuery(
    ['audit', values],
    getSessionsDetails
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error title={'Failed to load sessions. '} refetch={refetch} />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'You have no sessions yet.'} refetch={refetch} />
    )
  } else {
    component =
      componentToRender === 'auditUsers' ? (
        <>
          <Jumbotron padding={'0'}>
            <Table
              headerbgColor={'transparent'}
              tableName="audit"
              tableData={data.data}
              tableHeaders={auditHeaderList}
              setParams
              hideDate
            />
          </Jumbotron>
          <Pagination data={data} setPageNumber={setValues} />
        </>
      ) : (
        <>
          <FlexTableWrapper.Row
            data={{
              User: `${state?.detail.admin.firstName} ${state?.detail.admin.lastName}`,
              Role: `${state?.detail.admin.roleName}`,
              SessionStartedAt: `${formatDate(
                state?.detail.loginDate,
                'YYYY-MM-DD HH:mm:ss'
              )}`,
              SessionEndedAt: isNaN(state?.detail.logoutDate)
                ? formatDate(state?.detail.logoutDate, 'YYYY-MM-DD HH:mm:ss')
                : 'Session ongoing',
            }}
            header={[...auditHeaderList, '', ''].map((header, i) => ({
              label:
                header === 'Session Started At'
                  ? 'Login Time'
                  : header === 'Session Ended At'
                  ? 'Logout Time'
                  : header === ''
                  ? 'noVisibility'
                  : header,
              value:
                header === 'Session Started At'
                  ? 'SessionStartedAt'
                  : header === 'Session Ended At'
                  ? 'SessionEndedAt'
                  : header === ''
                  ? 'empty'
                  : header,
              columnWidth:
                i === 5 ||
                header === 'Session Started At' ||
                header === 'Session Ended At'
                  ? 'medium'
                  : 'small',
            }))}
            bgBottomColor={Color.alerzoWhite}
            classes={{
              SessionStartedAt: { class: 'successText' },
              SessionEndedAt: { class: 'dangerText' },
            }}
          />
          <Text padding={'1rem 0'} whiteSpace={'nowrap'} as={'h4'}>
            Actions Performed
          </Text>
          <Jumbotron padding={'1rem 0'} mt={'0.5rem'} direction="column">
            <TimelineElement
              actions={state?.detail?.actions.slice(
                actionsValues.pageNumber * actionsValues.count,
                actionsValues.pageNumber + 1 * actionsValues.count
              )}
            />
          </Jumbotron>
          <Pagination
            data={{ data: state?.detail?.actions }}
            setPageNumber={setActionValues}
          />
        </>
      )
  }
  return (
    <Container
      showFilters={false}
      isFetching={false}
      title={state?.detail.id ? 'Logs' : 'Audit Trail'}
      withParams={state?.detail.id}
      routePath={() => {
        location.state = {}
        setComponentToRender('auditUsers')
        return '/dashboard/audit'
      }}
    >
      {component}
    </Container>
  )
}

export default Audit
