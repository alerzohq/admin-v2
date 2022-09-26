import { useState } from 'react'
import { useQuery } from 'react-query'
import { FallBack, Filter, Jumbotron, Loader, Table } from '../../../components'
import { filterValue } from '../../../data/filter-data'
import { rolesPermList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'

const RolesPermissions = () => {
  const getRoles = () => {
    return getResource('roles')
  }
  
  const { isLoading, isError, data } = useQuery('roles-permissions', getRoles)
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error title={'Failed to load roles and permission . '} />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'No roles and permissions list available yet. '} />
    )
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="user-roles-permission"
        tableData={data?.data}
        tableHeaders={rolesPermList}
        hideDate
      />
    )
  }
  return (
    <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
      <Filter
        showFilters={{
          search: {
            placeholder: 'Search',
            type: 'text',
          },
          date: false,
          selects: [
            {
              placeholder: 'Status',
              values: [],
              value: '',
              onChange: () => {},
            },
          ],
          buttons: [
            { label: 'Add New Role', onClick: () => console.log('first'), buttonClass:'add-button' },
          ],
        }}
      />
      {component}
    </Jumbotron>
  )
}

export default RolesPermissions
