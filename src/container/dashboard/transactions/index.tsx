import React, { useState } from 'react'
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
import { transHeaderList } from '../../../data/table-headers'
import { filterProps } from '../../../@types'
import { filterValue } from '../../../data/filter-data'

const TransactionContainer = () => {
  const [values, setValues] = useState(filterValue)

  const getTransactions = (filterValue: filterProps) => {
    return getFilterResource(`transactions`, filterValue)
  }

  const { isLoading, data, isError, isFetching } = useQuery(
    ['transactions', values],
    () => getTransactions(values),
    { keepPreviousData: true }
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error title={'Failed to load transaction history. '} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no transaction yet. '} />
  } else {
    component = (
      <Table
        tableName="transaction"
        tableData={data?.data}
        tableHeaders={transHeaderList}
        amountIndex={1}
      />
    )
  }

  return (
    <Container
      showFilters
      title="History"
      setFilterValues={setValues}
      isFetching={isFetching}
    >
      <CardWidget />
      <Jumbotron padding={'0'}>{component}</Jumbotron>
      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default TransactionContainer
