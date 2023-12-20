import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { FilterValueProps } from '../../../../../@types/global'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../../../components'
import { useAppContext } from '../../../../../context'
import { Action } from '../../../../../context/actions'
import { filterValue } from '../../../../../data/filter-data'
import { DBtransHeaderList } from '../../../../../data/table-headers'
import useDownloadCSV from '../../../../../hooks/useDownloadCSV'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'

const TransactionHistory = ({ userId }: { userId: string }) => {
  const [values, setValues] = useState(filterValue)
  const { dispatch } = useAppContext()

  const { downloadBulkCSV, isDownloading } = useDownloadCSV(
    `transactions?userId=${userId}&`,
    values,
    'history'
  )
  const getTransactionsHistory = (filterValue: FilterValueProps) => {
    return getNewFilterResource(
      `transactions?userId=${userId}&`,
      filterValue,
      true
    )
  }

  const { isLoading, isError, data, isFetching, error, refetch } = useQuery(
    ['user-transaction-history', values],
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
    component = <FallBack title={'No transaction Found. '} />
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="transaction-history"
        tableData={data?.data}
        tableHeaders={DBtransHeaderList}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        withSlug
        routePath="dashboard/transactions"
      />
    )
  }
  useEffect(() => {
    if (isFetching) {
      window.scrollTo(0, 0)
    }
  }, [isFetching])
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
                placeholder: 'Status',
                values: [
                  { label: 'Successful', value: 'successful' },
                  { label: 'Failed', value: 'failed' },
                  { label: 'Pending', value: 'pending' },
                ],
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
