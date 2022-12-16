/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getResource } from '../../../../utils/apiRequest'
import DetailsContent from '../../widget/tabs/tab-content-details'
import { TABS } from '../../../../data/tab-data'
import { detailsHelper, otherHelper } from '../../../../data/tab-data-helper'
import NotesContent from './tab-content/notes'
import Receipt from './tab-content/receipt'
import TabsContentWidget from '../../widget/tabs/tab-content'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const TabsContainer = () => {
  const navigate = useNavigate()
  const [fetchUser, setFetchUser] = useState(false)
  const location = useLocation()
  const thePath = location.pathname
  var result = thePath.split('/')
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
  const getBusinessUser = () => {
    return getResource(`business-users?id=${data?.data[0]?.user_id}`)
  }

  const { isRefetching: fetchinguser } = useQuery(
    `queryKey${data?.data[0]?.user_id}${data}`,
    getBusinessUser,
    {
      enabled: fetchUser,
      onSuccess: (data) => {
        setFetchUser(false)
        if (data?.data?.length === 0) {
          toast.error(`${'business details does not exist for this user'}`)
        } else {
          navigate(`/dashboard/businesses/${data?.data?.[0]?.business_id}`)
        }
      },
    }
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
            resolvedData={detailsHelper(data?.data?.[0], setFetchUser)!}
          />
        )
    }
  }

  const status: string = data?.data[0]?.status

  return (
    <TabsContentWidget
      isFetching={isFetching || fetchinguser}
      isLoading={isLoading}
      status={status}
      containerTitle="Transaction Details"
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
