import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { businessDetailsHelper, TABS } from '../../../../data/business-data'
import DetailsContent from '../../widget/tabs/tab-content-details'
import TabsContentWidget from '../../widget/tabs/tab-content'
import {} from '../../../../data/terminal-data'
import { getResource } from '../../../../utils/apiRequest'

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

  const renderSwitch = () => {
    switch (queryParam) {
      case 'transaction':
        return <div>Transaction</div>
      case 'products':
        return <div>Products</div>
      case 'kyc':
        return <div>KYC</div>
      case 'terminals':
        return <div>Terminals</div>
      case 'members':
        return <div>Members</div>
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
