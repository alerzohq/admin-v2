import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { filterProps } from '../../../@types'
import { FallBack, Jumbotron, Loader } from '../../../components'
import { Container } from '../../../components/layout'
import DynamicTable from '../../../components/react-table'
import { filterValue } from '../../../data/filter-data'
import { getFilterResource } from '../../../utils/apiRequest'
import { digitalBankTableMapper } from './tableConfig'

const DigitalBankContainer = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(filterValue)
  const getDigitalBanksHandler = (filterValue: filterProps) => {
    return getFilterResource(`customers`, filterValue)
  }
  const { isLoading, data, isError, isFetching } = useQuery(
    ['terminals', values.count],
    () => getDigitalBanksHandler(values),
    { keepPreviousData: true }
  )
  let digitalBankComponent
  if (isLoading) {
    digitalBankComponent = <Loader />
  } else if (isError) {
    digitalBankComponent = (
      <FallBack error title={'Failed to load terminals. '} />
    )
  } else if (data?.data?.length < 1) {
    digitalBankComponent = <FallBack title={'You have no terminals yet. '} />
  } else {
    digitalBankComponent = (
      <DynamicTable
        data={data?.data}
        mappers={digitalBankTableMapper}
        handleClick={(item) => {
          navigate(item?.id)
        }}
      />
    )
  }
  return (
    <Container
      showFilters={{
        search: {
          placeholder: 'Search',
        },
        selects: [
          { placeholder: 'All Platofrms', values: [], value: '' },
          { placeholder: 'status', values: [], value: '' },
        ],
        buttons: [
          { label: 'Download CSV', onClick: () => console.log('first') },
        ],
      }}
      title="Digital Bank"
      setFilterValues={setValues}
      isFetching={isFetching}
    >
      <Jumbotron padding={'0'}>{digitalBankComponent}</Jumbotron>
    </Container>
  )
}

export default DigitalBankContainer
