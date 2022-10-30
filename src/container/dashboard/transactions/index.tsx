import { useState } from 'react'
import {
  FallBack,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'

import { useQuery } from 'react-query'
import { transHeaderList } from '../../../data/table-headers'
import { filterProps } from '../../../@types'
import { filterValue } from '../../../data/filter-data'
import { optionsAllPlatform } from '../../../data/select-data'
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'

const TransactionContainer = () => {
  const [values, setValues] = useState(filterValue)
  const getTransactions = (filterValue: filterProps) => {
    return getNewFilterResource(`transactions`, filterValue)
  }

  const getTranStats = () => {
    return getResource(`transactions/statistics`)
  }

  // const getFilter=()=> {
  //   return getResource(`filters`)
  // }
  // const {  data: filters } = useQuery(
  //   'filter',
  //   getFilter
  // )
  // console.log({filters})

  const { isLoading: loading, data: Stats } = useQuery(
    'trans-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  const { isLoading, data, isError, isFetching, refetch } = useQuery(
    ['transactions', values],
    () => getTransactions(values),
    { keepPreviousData: true }
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack
        error
        title={'Failed to load transaction history.'}
        refetch={refetch}
      />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'You have no transaction yet.'} refetch={refetch} />
    )
  } else {
    component = (
      <Table
        tableName="transaction"
        tableData={data?.data}
        tableHeaders={transHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        amountIndex={1}
        withSlug
      />
    )
  }

  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search by reference number..',
        },
        date: true,
        selects: [
          {
            searchQuery: 'userType',
            placeholder: 'All Platform',
            values: optionsAllPlatform,
            value: '',
          },
          {
            placeholder: 'Status',
            values: [
              { label: 'Successful', value: 'successful' },
              { label: 'Pending', value: 'pending' },
              { label: 'Failed', value: 'failed' },
            ],
            value: '',
          },
        ],
        // buttons: [
        //   {
        //     label: 'Download CSV',
        //     onClick: () => console.log('first'),
        //   },
        // ],
      }}
      title="History"
      setFilterValues={setValues}
      shouldSetQuery
      isFetching={isFetching}
    >
      <CardWidget stats={Statistics} loading={loading} />
      <Jumbotron padding={'0'}>{component}</Jumbotron>
      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default TransactionContainer
