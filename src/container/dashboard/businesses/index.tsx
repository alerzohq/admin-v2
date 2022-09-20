import { useState } from 'react'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'
import { getFilterResource } from '../../../utils/apiRequest'
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
      />
    )
  }

  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search by reference no..',
        },
        date: true,
        selects: [
          { placeholder: 'Status', values: [], value: '' },
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
      <CardWidget />
      <Jumbotron padding={'0'}>{component}</Jumbotron>
      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default BusinessContainer
