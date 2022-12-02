import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { FallBack, Filter, Jumbotron, Loader, Table } from '../../../components'
import { invitesHeaderList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'
import { errorMessage } from '../../../utils/message'

const PendingInvites = () => {
  const [values, setValues] = useState({
    query: '',
  })
  const getInvites = () => {
    return getResource('members/invites')
  }

  const { isLoading, isError, data, refetch, error } = useQuery(
    ['employees', values],
    getInvites
  )
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'No Employees list available yet.'} />
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="invites"
        tableData={data?.data}
        tableHeaders={invitesHeaderList}
        hideDate
        setParams
      />
    )
  }
  return (
    <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
      <Filter
        setFilterValues={setValues}
        showFilters={{
          search: {
            placeholder: 'Search',
            type: 'text',
          },
        }}
      />
      {component}
    </Jumbotron>
  )
}

export default PendingInvites
