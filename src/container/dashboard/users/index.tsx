import { useLocation } from 'react-router-dom'
import { Color } from '../../../assets/theme'
import { TabsPage } from '../../../components'
import { Container } from '../../../components/layout'
import { TABS } from '../../../data/user-data'
import Employees from './employees'
import Roles from './roles-permissions'

const UsersContainer = () => {
  const location = useLocation()
  const search = location.search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const thePath = location.pathname

  const renderSwitch = () => {
    switch (queryParam) {
      case 'roles-permissions':
        return <Roles />
      default:
        return <Employees />
    }
  }

  return (
    <Container
      showFilters={false}
      isFetching={false}
      title="Employee Roles & Permission"
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
