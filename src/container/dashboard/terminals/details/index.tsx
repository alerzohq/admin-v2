import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getResource } from '../../../../utils/apiRequest'
import TabsContentWidget from '../../widget/tabs/tab-content'
import { TABS, terminalHelper, data } from '../../../../data/terminal-data'
import DetailsContentWidget from '../../widget/tabs/tab-content-details'

const Details = () => {
  const location = useLocation()
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const getTerminals = () => {
    return getResource(`terminals?count=10&cursor`)
  }

  const { isLoading, isError, isFetching } = useQuery('terminals', getTerminals)

  const renderSwitch = () => {
    switch (queryParam) {
      case 'stats-history':
        return <div>Terminal Status History</div>
      case 'trans-history':
        return <div>Treminal Transaction History</div>
      case 'merchant':
        return <div>Merchant</div>
      default:
        return (
          <DetailsContentWidget
            resolvedData={terminalHelper(data?.data?.[0])!}
          />
        )
    }
  }

  return (
    <TabsContentWidget
      isFetching={isFetching}
      isLoading={isLoading}
      title="Terminal Details"
      type="Transaction!"
      isError={isError}
      errorMessage="Failed to load terminal."
      currentValue={found?.value || 'details'}
      renderSwitch={renderSwitch}
      tabs={TABS}
      hideStatus
      routePath={'/dashboard/terminals'}
    />
  )
}

export default Details
