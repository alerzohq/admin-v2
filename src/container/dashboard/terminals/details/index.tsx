import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getResource } from '../../../../utils/apiRequest'
import TabsContentWidget from '../../widget/tabs/tab-content'
import { TABS, data, merchantHelper } from '../../../../data/terminal-data'
import DetailsContentWidget from '../../widget/tabs/tab-content-details'
import TerminalDetails from './tab-content/terminal-details'

const Details = () => {
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
        return (
          <DetailsContentWidget
            resolvedData={merchantHelper(data?.data?.[0])!}
          />
        )
      default:
        return <TerminalDetails data={data?.data} />
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
