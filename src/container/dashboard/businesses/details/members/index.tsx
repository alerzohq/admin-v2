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
import { busUserList } from '../../../../../data/table-headers'
import { getResource } from '../../../../../utils/apiRequest'

const Members = ({ businessId }: { businessId: string }) => {
  const getMembers = () => {
    return getResource(`business-users?query=${businessId}`)
  }

  const [, setValues] = useState(filterValue)
  const { isLoading, isError, data } = useQuery('members', getMembers)
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = <FallBack error title={'Failed to load businesses history. '} />
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
                placeholder: 'All Platform',
                values: [],
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
            ],
          }}
        />
        {component}
      </Jumbotron>
      {data?.data && <Pagination data={data} setPageNumber={setValues} />}
    </>
  )
}

export default Members
