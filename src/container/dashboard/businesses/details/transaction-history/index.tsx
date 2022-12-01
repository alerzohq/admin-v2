import React, { useState } from 'react'
import { useQuery } from 'react-query'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../../../components'
import { filterValue } from '../../../../../data/filter-data'
import { optionsAllPlatform } from '../../../../../data/select-data'
import { transHeaderList } from '../../../../../data/table-headers'
import { getResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'

const TransactionHistory = ({ walletId }: { walletId: string }) => {
  const getTransactionsHistory = () => {
    return getResource(`transactions?walletId=${walletId}`)
  }

  const [, setValues] = useState(filterValue)
  const { isLoading, isError, data, refetch, error } = useQuery(
    'transaction-history',
    getTransactionsHistory
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no business history yet. '} />
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="transaction"
        tableData={data?.data}
        tableHeaders={transHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        amountIndex={2}
        withSlug
      />
    )
  }

  return (
    <>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="auto">
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
                values: optionsAllPlatform,
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
              // {
              //   placeholder: 'Download CSV',
              //   values: [],
              //   value: '',
              //   onChange: () => {},
              // },
            ],
          }}
        />

        {component}
      </Jumbotron>

      {data?.data && <Pagination data={data} setPageNumber={setValues} />}
    </>
  )
}

export default TransactionHistory
