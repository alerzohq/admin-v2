import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { filterProps } from '../../../@types'
import { FallBack, Jumbotron, Loader, Pagination } from '../../../components'
import { Container } from '../../../components/layout'
import DynamicTable from '../../../components/react-table'
import { TableWrapper } from '../../../components/table/styles/table.styles'
import { filterValue } from '../../../data/filter-data'
import { optionsAllPlatform } from '../../../data/select-data'
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import CardWidget from '../widget/card'
import { digitalBankTableMapper } from './tableConfig'

const DigitalBankContainer = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState(filterValue)

  const getDigitalBanksHandler = (filterValue: filterProps) => {
    return getNewFilterResource(`customers`, filterValue)
  }

  const getTranStats = () => {
    return getResource(`customers/statistics`)
  }

  const { isLoading: loading, data: Stats } = useQuery(
    'trans-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  const { isLoading, data, isError, isFetching } = useQuery(
    ['digital-bank', values],
    () => getDigitalBanksHandler(values),
    { keepPreviousData: true }
  )

  let digitalBankComponent

  if (isLoading) {
    digitalBankComponent = <Loader />
  } else if (isError) {
    digitalBankComponent = (
      <FallBack error title={'Failed to load transactions. '} />
    )
  } else if (data?.data?.length < 1) {
    digitalBankComponent = <FallBack title={'You have no transactions yet. '} />
  } else {
    console.log(data?.data, "newtesttt")
    digitalBankComponent = (
      <TableWrapper>
        <DynamicTable
          data={data?.data}
          mappers={digitalBankTableMapper}
          handleClick={(item) => {
            navigate(item?.id)
          }}
        />
      </TableWrapper>
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
            searchQuery: 'channel',
            placeholder: 'All Platforms',
            values: optionsAllPlatform,
            value: '',
          },
          {
            searchQuery: 'disabled',
            placeholder: 'Status',
            values: [
              { label: 'Active', value: false },
              { label: 'Inactive', value: true },
            ],
            value: '',
          },
        ],
        buttons: [
          { label: 'Download CSV', onClick: () => console.log('first') },
        ],
      }}
      title="Digital Bank"
      setFilterValues={setValues}
      isFetching={isFetching}
      whiteSpace={'nowrap'}
    >
      <CardWidget stats={Statistics} loading={loading} />
      <Jumbotron padding={'0'}>{digitalBankComponent}</Jumbotron>
      <Pagination data={data} setPageNumber={setValues} />
    </Container>
  )
}

export default DigitalBankContainer
