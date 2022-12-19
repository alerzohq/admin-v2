import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { TABS, customerHelper } from '../../../../data/digital-bank-data'
import { getResource } from '../../../../utils/apiRequest'
import DetailsContent from '../../widget/tabs/tab-content-details'
import TabsContentWidget from '../../widget/tabs/tab-content'
import TransactionHistory from './transaction-history'
import CardsContainer from './user-accounts'
import { errorMessage } from '../../../../utils/message'

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

  const { isLoading, isError, data, isFetching, error } = useQuery(
    'customer',
    getBusinessDetails
  )
  const renderSwitch = () => {
    switch (queryParam) {
      case 'transHistory':
        return <TransactionHistory userId={id} />
      case 'cards':
        return <div>cards</div>
      case 'bankAccounts':
        return <CardsContainer />
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
      errorMessage={error && errorMessage(error)}
      currentValue={found?.value || 'details'}
      renderSwitch={renderSwitch}
      tabs={TABS}
      routePath={'/dashboard/digital-bank'}
      hideStatus
    />
  )
}

export default DigitalBankDetailContainer
