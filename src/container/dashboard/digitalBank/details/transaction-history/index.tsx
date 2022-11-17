import { useEffect, useState } from 'react'
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
import { useAppContext } from '../../../../../context'
import { Action } from '../../../../../context/actions'
import { filterValue } from '../../../../../data/filter-data'
import { DBtransHeaderList } from '../../../../../data/table-headers'
import { getNewFilterResource } from '../../../../../utils/apiRequest'

const TransactionHistory = ({ userId }: { userId: string }) => {
  const [values, setValues] = useState(filterValue)
  const { dispatch } = useAppContext()

  const getTransactionsHistory = (filterValue: filterProps) => {
    return getNewFilterResource(
      `transactions?userId=${userId}&`,
      filterValue,
      true
    )
  }

  const { isLoading, isError, data, isFetching } = useQuery(
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
    component = <FallBack error title={'Failed to load businesses history. '} />
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
        notClickable
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
