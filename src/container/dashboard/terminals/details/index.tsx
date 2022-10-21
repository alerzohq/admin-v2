import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getResource } from '../../../../utils/apiRequest'
import TabsContentWidget from '../../widget/tabs/tab-content'
import { TABS, merchantHelper } from '../../../../data/terminal-data'
import DetailsContentWidget from '../../widget/tabs/tab-content-details'
import TerminalDetails from './tab-content/terminal-details'
import MerchantDetails from './tab-content/merchant-details'

const Details = () => {
  const location = useLocation()
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]

  const getTerminalDetails = () => {
    return getResource(`terminals?id=${id}`)
  }

  const { isLoading, isError, data, isFetching } = useQuery(
    'terminal',
    getTerminalDetails
  )

  const renderSwitch = () => {
    switch (queryParam) {
      case 'stats-history':
        return <div>Terminal Status History</div>
      case 'trans-history':
        return <div>Treminal Transaction History</div>
      case 'merchant':
        return <MerchantDetails resolvedData={data?.data?.[0]!} />
      default:
        return <TerminalDetails data={data?.data[0]} />
    }
  }

  return (
    <TabsContentWidget
      isFetching={isFetching}
      isLoading={isLoading}
      containerTitle="Terminal Details"
      title={title}
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
