import { useState } from 'react'
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
import { busUserList } from '../../../../../data/table-headers'
import { getNewFilterResource } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'
import { statusFilterOptions } from '../../../../../helper/filter-helper'
import { useAppContext } from '../../../../../context'
import { filterProps } from '../../../../../@types'

const Members = ({ businessId }: { businessId: string }) => {
  const [values, setValues] = useState({ ...filterValue })
  const {
    state: { appFilters },
  } = useAppContext()

  let statusOptions = statusFilterOptions(appFilters?.['businessMembers'])
  console.log(statusOptions)
  const getMembers = (filterValue: filterProps) => {
    return getNewFilterResource(`business-users`, {
      ...filterValue,
      query: businessId,
    })
  }

  const { isLoading, isError, data, refetch, error } = useQuery(
    ['members', values],
    () => getMembers(values)
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
        tableName="business-members"
        tableData={data?.data}
        tableHeaders={busUserList}
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
                placeholder: 'Status',
                value: '',
                values: statusOptions,
                query: 'active',
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

export default Members
