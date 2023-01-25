import React, { useEffect, useState } from 'react'
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
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'
import { filterProps } from '../../../../../@types'
import { useAppContext } from '../../../../../context'
import { Action } from '../../../../../context/actions'
import useDownloadCSV from '../../../../../hooks/useDownloadCSV'
import { statusFilterOptions } from '../../../../../helper/filter-helper'

const TransactionHistory = ({ walletId }: { walletId: string }) => {
  const [values, setValues] = useState(filterValue)

  const { downloadBulkCSV, isDownloading } = useDownloadCSV(
    `transactions?walletId=${walletId}&`,
    values,
    'history'
  )

  const {
    state: { appFilters },
    dispatch,
  } = useAppContext()

  let statusOptions = statusFilterOptions(appFilters?.['transactions'])

  const getTransactionsHistory = (filterValue: filterProps) => {
    return getNewFilterResource(
      `transactions?walletId=${walletId}&`,
      filterValue,
      true
    )
  }

  const { isLoading, isFetching, data, isError, refetch, error } = useQuery(
    [`transaction-history`, values],
    () => getTransactionsHistory(values),
    { keepPreviousData: true }
  )

  useEffect(() => {
    dispatch({
      type: Action.IS_FETCHING,
      payload: isFetching,
    })
  }, [isFetching, dispatch])

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
        amountIndex={3}
        routePath="dashboard/transactions"
        withSlug
      />
    )
  }

  return (
    <>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="auto">
        <Filter
          isFetching={isFetching}
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: true,
            // selects: [
            //   {
            //     placeholder: 'All Platform',
            //     values: optionsAllPlatform,
            //     value: '',
            //     onChange: () => {},
            //     query: 'allPlatform',
            //   },
            //   {
            //     placeholder: 'Status',
            //     values: [],
            //     value: '',
            //     onChange: () => {},
            //     query: 'status',
            //   },
            // ], selects: [
            selects: [
              {
                placeholder: 'All Platform',
                values: optionsAllPlatform,
                value: '',
                query: 'allPlatform',
              },
              {
                placeholder: 'Status',
                values: statusOptions,
                value: '',
                query: 'status',
              },
            ],
            buttons: [
              {
                label: isDownloading ? 'Download...' : 'Download CSV',
                onClick: () => downloadBulkCSV(),
              },
            ],
          }}
          setFilterValues={setValues}
        />

        {component}
      </Jumbotron>

      {data?.data && <Pagination data={data} setPageNumber={setValues} />}
    </>
  )
}

export default TransactionHistory
