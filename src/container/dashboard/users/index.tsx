import { useLocation } from 'react-router-dom'
import { RolePermissionDetailsContainer } from '..'
import { Color } from '../../../assets/theme'
import { TabsPage } from '../../../components'
import { Container } from '../../../components/layout'
import { TABS } from '../../../data/user-data'
import Employees from './employees'
import RolesPermissions from './roles-permissions'
import EditEmployee from './details/edit-employee'
import { useEffect, useState } from 'react'
import PendingInvites from './pending-invites'

const UsersContainer = () => {
  const [edit, setEdit] = useState(false)
  const [create, setCreate] = useState(false)
  const location = useLocation()
  const search = location.search
  let queryParam = new URLSearchParams(search).get('status')
  const data: any = location.state
  const found = TABS.find((element) => element.value === queryParam)

  if (!queryParam) queryParam = 'employees'

  const handleRoleEdit = (value: boolean) => {
    setEdit(value)
  }
  const handleRoleCreation = (value: boolean) => {
    setCreate(value)
  }

  const renderSwitch = () => {
    switch (queryParam) {
      case 'roles-permissions':
        return data ? (
          <RolePermissionDetailsContainer
            handleRoleEdit={handleRoleEdit}
            data={data?.detail}
            edit={edit}
            handleRoleCreation={handleRoleCreation}
          />
        ) : create ? (
          <RolePermissionDetailsContainer
            handleRoleEdit={handleRoleEdit}
            data={data?.detail}
            handleRoleCreation={handleRoleCreation}
            create={create}
          />
        ) : (
          <RolesPermissions
            handleRoleEdit={handleRoleEdit}
            handleRoleCreation={handleRoleCreation}
          />
        )
      case 'employees':
        return data ? <EditEmployee data={data?.detail} /> : <Employees />
      case 'pending-invites':
        return <PendingInvites />
    }
  }
  const handleNavigation = () => {
    if (create) {
      handleRoleCreation(false)
      return `/dashboard/users?status=${queryParam}`
    } else if (data) {
      return `/dashboard/users?status=${queryParam}`
    }
  }
  useEffect(() => {
    console.log(data, queryParam)
  })

  return (
    <Container
      showFilters={false}
      isFetching={false}
      title={
        data && queryParam !== 'pending-invites'
          ? data?.detail?.name ??
            `${data.detail?.firstName} ${data.detail?.lastName}`
          : create
          ? 'Create New Role'
          : 'Employee Roles & Permission'
      }
      withParams={(data !== null || create) && queryParam !== 'pending-invites'}
      routePath={handleNavigation}
    >
      {queryParam === 'employees' && data ? null : (
        <TabsPage.Tabs
          hideStatus={true}
          color={Color.alerzoBlack}
          tabs={TABS}
          currentValue={found?.value || 'employees'}
        />
      )}
      {renderSwitch()}
    </Container>
  )
}

export default UsersContainer
