import React, { useEffect, useState } from 'react'
// import ReactPaginate from 'react-paginate'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { FilterValueProps } from '../../../@types/global'
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
import { filterAudit, filterValue } from '../../../data/filter-data'
import { auditHeaderList } from '../../../data/table-headers'
import { getNewFilterResource } from '../../../utils/apiRequest'
// import { formatDate } from '../../../utils/formatValue'
import { errorMessage } from '../../../utils/message'
import { rowData, rowheaders } from './audit-config'

interface SessionDetails {
  detail: any
}

const Audit = () => {
  const location = useLocation()
  const state = location.state as SessionDetails

  const [componentToRender, setComponentToRender] = useState('auditUsers')
  const [values, setValues] = useState(filterAudit)
  const [actionsValues, setActionValues] = useState(filterValue)

  //Make login a custom hook return componentToRender
  useEffect(() => {
    if (state?.detail.id) {
      setComponentToRender('logs')
    }
    return () => {
      setComponentToRender('auditUsers')
    }
  }, [state?.detail.id])

  const getSessions = (filterAudit: FilterValueProps) => {
    return getNewFilterResource(`sessions`, filterAudit)
  }
  const { isLoading, isError, data, refetch, error, isFetching } = useQuery(
    ['audit', values],
    () => getSessions(values),
    { keepPreviousData: true }
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
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
          <Pagination
            data={data}
            setPageNumber={setValues}
            initialPageCount={1}
          />
        </>
      ) : (
        <>
          <FlexTableWrapper.Row
            data={rowData(state)}
            header={rowheaders()}
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
            <Pagination
              data={{ data: state?.detail?.actions }}
              setPageNumber={setActionValues}
            />
          </Jumbotron>
        </>
      )
  }
  return (
    <Container
      showFilters={false}
      isFetching={isFetching}
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
