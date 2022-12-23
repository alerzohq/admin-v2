import React, { useState } from 'react'
import { useQuery } from 'react-query'
import {
  FallBack,
  Filter,
  Jumbotron,
  Loader,
  Pagination,
  Table,
} from '../../../components'
import { Container } from '../../../components/layout'
import { filterValue } from '../../../data/filter-data'
import { options, optionsAllPlatform } from '../../../data/select-data'
import { KYCHeaderList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'
import { errorMessage } from '../../../utils/message'

type Props = {}

const KYC = (props: Props) => {
  const [values, setValues] = useState(filterValue)

  const getKYCVerifications = () => {
    return getResource('kyc/verifications')
  }

  const { isLoading, isError, data, refetch, error } = useQuery(
    ['KYC', values],
    getKYCVerifications
  )

  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'You have no KYC yet.'} refetch={refetch} />
  } else {
    component = (
      <>
        <Jumbotron padding={'0'}>
          <Table
            headerbgColor={'transparent'}
            tableName="KYC"
            tableData={data.data}
            tableHeaders={KYCHeaderList}
            routePath={'dashboard/kyc'}
          />
        </Jumbotron>
        <Pagination data={data} setPageNumber={setValues} />
      </>
    )
  }
  return (
    <Container isFetching={false} title={'KYC Verification'}>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
        <Filter
          setFilterValues={setValues}
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: true,
            selects: [
              {
                query: 'allPlatform',
                placeholder: 'All Platform',
                values: optionsAllPlatform,
                value: '',
              },
              {
                query: 'status',
                placeholder: 'Status',
                values: options,
                value: '',
              },
            ],
          }}
        />
        {component}
      </Jumbotron>
    </Container>
  )
}
export default KYC
