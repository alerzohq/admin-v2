import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { FallBack, Filter, Jumbotron, Loader, Table } from '../../../components'
import { rolesPermList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'
import { errorMessage } from '../../../utils/message'

const RolesPermissions = ({
  handleRoleEdit,
  handleRoleCreation,
}: {
  handleRoleEdit: (x: boolean) => void
  handleRoleCreation: (x: boolean) => void
}) => {
  useEffect(() => {
    handleRoleCreation(false)
    handleRoleEdit(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getRoles = () => {
    return getResource('roles')
  }

  const { isLoading, isError, data, refetch, error } = useQuery(
    'roles-permissions',
    getRoles
  )
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
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
        setParams
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
            date: false,
            buttons: [
              {
                label: 'Add New Role',
                onClick: () => handleRoleCreation(true),
                buttonClass: 'add-button',
              },
            ],
          }}
        />
        {component}
      </Jumbotron>
    </>
  )
}

export default RolesPermissions
