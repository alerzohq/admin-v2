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

const TransactionHistory = ({ walletId }: { walletId: string }) => {
  const getTransactionsHistory = () => {
    return getResource(`transactions?walletId=${walletId}`)
  }

  const [, setValues] = useState(filterValue)
  const { isLoading, isError, data, refetch } = useQuery(
    'transaction-history',
    getTransactionsHistory
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack
        error
        refetch={refetch}
        title={'Failed to load businesses history. '}
      />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack
        title={'You have no business history yet. '}
        refetch={refetch}
      />
    )
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
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
              },
              {
                placeholder: 'Status',
                values: [],
                value: '',
                onChange: () => {},
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
