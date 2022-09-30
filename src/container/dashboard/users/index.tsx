import { useLocation } from 'react-router-dom'
import { RolePermissionDetailsContainer } from '..'
import { Color } from '../../../assets/theme'
import { TabsPage } from '../../../components'
import { Container } from '../../../components/layout'
import { TABS } from '../../../data/user-data'
import Employees from './employees'
import RolesPermissions from './roles-permissions'
import EditEmployee from './details/edit-employee'

const UsersContainer = () => {
  const location = useLocation()
  const search = location.search
  let queryParam = new URLSearchParams(search).get('status')
  const data: any = location.state
  const found = TABS.find((element) => element.value === queryParam)
  console.log(search, queryParam, data)

  if (!queryParam) queryParam = 'employees'

  const renderSwitch = () => {
    switch (queryParam) {
      case 'roles-permissions':
        return data ? (
          <RolePermissionDetailsContainer data={data?.detail} />
        ) : (
          <RolesPermissions />
        )
      case 'employees':
        return data ? <EditEmployee data={data?.detail} /> : <Employees />
    }
  }
  return (
    <Container
      showFilters={false}
      isFetching={false}
      title={
        data
          ? data?.detail?.name ??
            `${data.detail?.firstName} ${data.detail?.lastName}`
          : 'Employee Roles & Permission'
      }
      withParams={data !== null}
      routePath={data && `/dashboard/users?status=${queryParam}`}
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
