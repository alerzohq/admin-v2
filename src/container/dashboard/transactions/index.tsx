import { useEffect, useState } from 'react'
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
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { useAppContext } from '../../../context'
import {
  billerFilterOptions,
  platformFiltersOptions,
  productFilterOptions,
  statusFilterOptions,
} from '../../../helper/filter-helper'
import { errorMessage } from '../../../utils/message'
import useDownloadCSV from '../../../hooks/useDownloadCSV'
import SingleReversalModal from './modal/single-reversal-modal'
import { selectStyles } from '../../../components/select-input/styles/select-input.styes'

const TransactionContainer = () => {
  const {
    state: { appFilters },
  } = useAppContext()
  let platformOptions = platformFiltersOptions(appFilters?.['transactions'])
  let statusOptions = statusFilterOptions(appFilters?.['transactions'])
  let billerOptions = billerFilterOptions(appFilters?.['transactions'])
  let productOptions = productFilterOptions(appFilters?.['transactions'])
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState('')
  const [values, setValues] = useState(filterValue)

  useEffect(() => {
    console.log(value)
    if (value) {
      setShowModal(true)
    }
  }, [value])
  const { downloadBulkCSV, isDownloading } = useDownloadCSV(
    'transactions?',
    values,
    'history'
  )

  const getTransactions = (filterValue: filterProps) => {
    return getNewFilterResource(`transactions`, filterValue)
  }

  const getTranStats = () => {
    return getResource(`transactions/statistics`)
  }

  const { isLoading: loading, data: Stats } = useQuery(
    'trans-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  const { isLoading, data, isError, isFetching, refetch, error } = useQuery(
    ['transactions', values],
    () => getTransactions(values),
    { keepPreviousData: true }
  )

  let component: React.ReactNode

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
    <Container
      showFilters={{
        search: {
          placeholder: 'Search...',
        },
        date: true,
        selects: [
          {
            searchQuery: 'userType',
            placeholder: 'All Platform',
            values: platformOptions,
            value: '',
          },
          {
            searchQuery: 'billerSlug',
            placeholder: 'Billers',
            values: billerOptions,
            value: '',
          },
          {
            searchQuery: 'productSlug',
            placeholder: 'Products',
            values: productOptions,
            value: '',
          },
          {
            placeholder: 'Status',
            values: statusOptions,
            value: '',
          },
          {
            placeholder: 'Actions',
            hideValue: true,
            isClearable: false,
            styles: selectStyles(false, false, "150px", true),
            values: [
              {
                label: 'Perform Single Reversals',
                value: 'Perform Single Reversals',
              },
              // {
              //   label: 'Perform Bulk Reversals',
              //   value: 'Perform Bulk Reversals',
              // },
            ],
            action: true,
            value: '',
            onChange: (e: any) => setValue(e?.value),
          },
        ],
      }}
      title="History"
      setFilterValues={setValues}
      shouldSetQuery
      isFetching={isFetching}
    >
      <CardWidget stats={Statistics} loading={loading} />
      <Jumbotron padding={'0'}>{component}</Jumbotron>

      <Pagination data={data} setPageNumber={setValues} />
      <SingleReversalModal value={value} setValue={setValue} setShowModal={setShowModal} showModal={showModal} />
    </Container>
  )
}

export default TransactionContainer
