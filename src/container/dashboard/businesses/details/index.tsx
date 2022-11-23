import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { businessDetailsHelper, TABS } from '../../../../data/business-data'
import DetailsContent from '../../widget/tabs/tab-content-details'
import TabsContentWidget from '../../widget/tabs/tab-content'
import { getResource } from '../../../../utils/apiRequest'
import TransactionHistory from './transaction-history'
import Members from './members'
import BusinessTerminalContainer from './terminals'

const BusinessDetailContainer = () => {
  const location = useLocation()
  const search = location.search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]
  const getBusinessDetails = () => {
    return getResource(`businesses?id=${id}`)
  }

  const { isLoading, isError, data, isFetching } = useQuery(
    'businesses',
    getBusinessDetails
  )

  let walletId = data?.data?.[0]?.wallet_id
  let userId = data?.data?.[0]?.business_owner?.id

  const renderSwitch = () => {
    switch (queryParam) {
      case 'transaction':
        return <TransactionHistory walletId={walletId} />
      case 'products':
        return <div>Products</div>
      case 'kyc':
        return <div>KYC</div>
      case 'terminals':
        return <BusinessTerminalContainer businessId={id} />
      case 'members':
        return <Members businessId={id} />
      case 'api-keys':
        return <div>Api Keys</div>
      default:
        return (
          <DetailsContent
            resolvedData={businessDetailsHelper(data?.data?.[0])!}
          />
        )
    }
  }

  return (
    <TabsContentWidget
      isFetching={isFetching}
      isLoading={isLoading}
      containerTitle="Business Information"
      type="Transaction!"
      isError={isError}
      title={title}
      errorMessage="Failed to load business."
      currentValue={found?.value || 'details'}
      renderSwitch={renderSwitch}
      tabs={TABS}
      routePath={'/dashboard/businesses'}
      hideStatus
    />
  )
}

export default BusinessDetailContainer
