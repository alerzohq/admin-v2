import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getResource } from '../../../../utils/apiRequest'
import DetailsContent from '../../widget/tabs/tab-content-details'
import { TABS } from '../../../../data/tab-data'
import { detailsHelper, otherHelper } from '../../../../data/tab-data-helper'
import NotesContent from './tab-content/notes'
import Receipt from './tab-content/receipt'
import TabsContentWidget from '../../widget/tabs/tab-content'

const TabsContainer = () => {
  const location = useLocation()
  const thePath = location.pathname
  var result = thePath.split('/')
  const slug = result[4]
  const id = result[3]
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const getTransactions = () => {
    return getResource(`transactions?query=${id}`)
  }

  const { isLoading, data, isError, isFetching } = useQuery(
    'transactions',
    getTransactions
  )

  const renderSwitch = () => {
    switch (queryParam) {
      case 'other':
        return <DetailsContent resolvedData={otherHelper(data?.data?.[0])!} />
      case 'receipt':
        return <Receipt />
      case 'notes':
        return <NotesContent />
      default:
        return (
          <DetailsContent
            resolvedData={detailsHelper(slug, data?.data?.[0])!}
          />
        )
    }
  }

  const status: string = data?.data[0]?.status

  return (
    <TabsContentWidget
      isFetching={isFetching}
      isLoading={isLoading}
      status={status}
      title={found ? found?.title : TABS[0]?.title}
      type="Transaction!"
      isError={isError}
      errorMessage="Failed to load transaction."
      currentValue={found?.value || 'details'}
      renderSwitch={renderSwitch}
      tabs={TABS}
      routePath={'/dashboard/transactions'}
    />
  )
}

export default TabsContainer
