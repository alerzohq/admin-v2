import { useLocation } from 'react-router-dom'
import { RolePermissionDetailsContainer } from '..'
import { Color } from '../../../assets/theme'
import { TabsPage } from '../../../components'
import { Container } from '../../../components/layout'
import { TABS } from '../../../data/user-data'
import Employees from './employees'
import RolesPermissions from './roles-permissions'

const UsersContainer = () => {
  const location = useLocation()
  const search = location.search
  const queryParam = new URLSearchParams(search).get('status')
  const data:any = location.state;
  const found = TABS.find((element) => element.value === queryParam)
  const renderSwitch = () => {
    switch (queryParam) {
      case 'roles-permissions':
        return data ? <RolePermissionDetailsContainer data={data?.detail}/> : <RolesPermissions />
      default:
        return <Employees />
    }
  }
  return (
    <Container
      showFilters={false}
      isFetching={false}
      title={data ? data?.detail?.name : "Employee Roles & Permission"}
      withParams={data !== null}
      routePath={data &&`/dashboard/users?status=${queryParam}`}
    >
      <TabsPage.Tabs
        hideStatus={true}
        color={Color.alerzoBlack}
        tabs={TABS}
        currentValue={found?.value || 'employees'}
      />
      {renderSwitch()}
    </Container>
  )
}

export default UsersContainer
