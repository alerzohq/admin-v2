import { useState } from 'react'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'
import { getFilterResource, getResource } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useQuery } from 'react-query'
import { busHeaderList } from '../../../data/table-headers'
import { filterProps } from '../../../@types'
import { filterValue } from '../../../data/filter-data'

const BusinessContainer = () => {
  const [values, setValues] = useState(filterValue)

  const getBusinesses = (filterValue: filterProps) => {
    return getFilterResource(`businesses`, filterValue)
  }

  const getTranStats = () => {
    return getResource(`transactions/statistics`)
  }
  const { isLoading: loading, data: Stats } = useQuery(
    'trans-stats',
    getTranStats
  )
  const Statistics = Stats?.data?.[0]

  const { isLoading, data, isError, isFetching } = useQuery(
    ['businesses', values],
    () => getBusinesses(values),
    { keepPreviousData: true }
  )



  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = <FallBack error title={'Failed to load businesses. '} />
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no business yet. '} />
  } else {
    component = (
      <Table
        tableName="business"
        tableData={data?.data}
        tableHeaders={busHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        hideActive
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
            placeholder: 'Status',
            values: [
              { label: 'Active', value: true },
              { label: 'Inactive', value: false },
            ],
            value: '',
          },
          { placeholder: 'KYC Level', values: [], value: '' },
        ],
        buttons: [
          {
            label: 'Download CSV',
            onClick: () => console.log('first'),
          },
        ],
      }}
      title="Businesses"
      setFilterValues={setValues}
      isFetching={isFetching}
    >
      <CardWidget stats={Statistics} loading={loading}/>
      <Jumbotron padding={'0'}>{component}</Jumbotron>
      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default BusinessContainer
