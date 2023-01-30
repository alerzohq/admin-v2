import { useState } from 'react'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useQuery } from 'react-query'
import { busHeaderList } from '../../../data/table-headers'
import { filterProps } from '../../../@types'
import { filterValue } from '../../../data/filter-data'
import { errorMessage } from '../../../utils/message'

const BusinessContainer = () => {
  const [values, setValues] = useState(filterValue)

  const getBusinesses = (filterValue: filterProps) => {
    return getNewFilterResource(`businesses`, filterValue)
  }

  const getTranStats = () => {
    return getResource(`businesses/statistics`)
  }
  const { isLoading: loading, data: Stats } = useQuery(
    'business-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  const { isLoading, data, isError, isFetching, refetch, error } = useQuery(
    ['businesses', values],
    () => getBusinesses(values),
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
      <FallBack title={'No Transaction Found.'} refetch={refetch} />
    )
  } else {
    component = (
      <Table
        tableName="business"
        tableData={data?.data}
        tableHeaders={busHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
      />
    )
  }
  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search...',
        },
        date: true,
        selects: [
          {
            searchQuery: 'isLive',
            placeholder: 'Status',
            values: [
              { label: 'Active', value: true },
              { label: 'Inactive', value: false },
            ],
            value: '',
          },
        ],
      }}
      title="Businesses"
      setFilterValues={setValues}
      isFetching={isFetching}
    >
      <CardWidget stats={Statistics} loading={loading} />
      <Jumbotron padding={'0'}>{component}</Jumbotron>

      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default BusinessContainer
