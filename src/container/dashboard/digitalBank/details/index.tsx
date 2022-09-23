import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { TABS, customerHelper } from '../../../../data/digital-bank-data'
import { getResource } from '../../../../utils/apiRequest'
import DetailsContent from '../../widget/tabs/tab-content-details'
import TabsContentWidget from '../../widget/tabs/tab-content'

const DigitalBankDetailContainer = () => {
  const location = useLocation()
  const search = location.search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]
  const getBusinessDetails = () => {
    return getResource(`customers?id=${id}`)
  }

  const { isLoading, isError, data, isFetching } = useQuery(
    'customer',
    getBusinessDetails
  )
  const renderSwitch = () => {
    switch (queryParam) {
      case 'transHistory':
        return <div>History</div>
      case 'cards':
        return <div>Cards</div>
      case 'expensesLens':
        return <div>Expense Lens</div>
      case 'smartSpend':
        return <div>Smart Spend</div>
      default:
        return (
          <DetailsContent resolvedData={customerHelper(data?.data?.[0])!} />
        )
    }
  }
  return (
    <TabsContentWidget
      isFetching={isFetching}
      isLoading={isLoading}
      containerTitle="Customer Information"
      isError={isError}
      title={title}
      errorMessage="Failed to load customer details."
      currentValue={found?.value || 'details'}
      renderSwitch={renderSwitch}
      tabs={TABS}
      routePath={'/dashboard/digital-bank'}
      hideStatus
    />
  )
}

export default DigitalBankDetailContainer
