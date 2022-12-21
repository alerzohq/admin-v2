import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { filterProps } from '../../../../../@types'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../../../components'
import { filterValue } from '../../../../../data/filter-data'
import { transHeaderList } from '../../../../../data/table-headers'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'

const TerminalTransactions = ({ terminalId }: { terminalId: string }) => {
  const [values, setValues] = useState(filterValue)

  const getTransactions = (filterValue: filterProps) => {
    return getNewFilterResource(
      `terminals/${terminalId}/transactions`,
      filterValue
    )
  }

  const { isLoading, data, isError, refetch, error } = useQuery(
    ['terminal-transactions', values],
    () => getTransactions(values),
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
      <FallBack title={'You have no transaction yet.'} refetch={refetch} />
    )
  } else {
    component = (
      <Table
        tableName="transaction"
        tableData={data?.data}
        tableHeaders={transHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        amountIndex={3}
        withSlug
      />
    )
  }

  return (
    <>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
        <Filter
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: true,
            selects: [
              {
                placeholder: 'All Platform',
                values: [],
                value: '',
                onChange: () => {},
                query: 'allPlatform',
              },
              {
                placeholder: 'Status',
                values: [],
                value: '',
                onChange: () => {},
                query: 'status',
              },
            ],
          }}
        />

        {component}
      </Jumbotron>
      <Pagination data={data} setPageNumber={setValues} />
    </>
  )
}

export default TerminalTransactions
