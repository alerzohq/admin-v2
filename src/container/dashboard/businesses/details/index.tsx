import { useLocation } from 'react-router-dom'
import { businessDetailsHelper, TABS } from '../../../../data/business-data'
import DetailsContent from '../../widget/tabs/tab-content-details'
import TabsContentWidget from '../../widget/tabs/tab-content'
import TransactionHistory from './transaction-history'
import Members from './members'
import BusinessTerminalContainer from './terminals'
import Products from './products'
import BusinessAccounts from './user-accounts/index'
import { Color } from '../../../../assets/theme'
import Modal from '../../../../components/modal'
import DangerWarning from '../../../../assets/icons/danger-warning'
import { useState } from 'react'
import useActivateBusiness from '../hooks/useActivateBusiness'
import useDeactivateBusiness from '../hooks/useDeactivateBusiness'
import useGetBusinessDetails from '../hooks/useGetBusinessDetails'

const BusinessDetailContainer = () => {
  const location = useLocation()
  const search = location.search
  const [show, setShow] = useState(false)

  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]

  const { mutate: activate, isLoading: isActivating } =
    useActivateBusiness(setShow)
  const { mutate: deactivate, isLoading: isDeactivating } =
    useDeactivateBusiness(setShow)

  const { isLoading, isError, data, isFetching } = useGetBusinessDetails(id)
  let wallet = data?.data?.[0]?.wallet_details?.find(
    (wallet: { [key: string]: any }) => wallet?.wallet_type === 'main'
  )

  const walletId = wallet?.wallet_id
  const isCustomerActive = data?.data?.[0]
  const handleBusinessConfirmation = () => {
    setShow(!show)
  }
  const handleSubmit = () => {
    if (isCustomerActive?.is_live) {
      deactivate(id)
    } else {
      activate(id)
    }
  }

  const renderSwitch = () => {
    switch (queryParam) {
      case 'transaction':
        return <TransactionHistory walletId={walletId} />
      case 'products':
        return <Products />
      case 'kyc':
        return <div>KYC</div>
      case 'terminals':
        return <BusinessTerminalContainer businessId={id} />
      case 'members':
        return <Members businessId={id} />
      case 'api-keys':
        return <div>Api Keys</div>
      case 'accounts':
        return <BusinessAccounts />
      default:
        return (
          <DetailsContent
            resolvedData={businessDetailsHelper(data?.data?.[0])!}
          />
        )
    }
  }

  return (
    <>
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
        btnHandler={handleBusinessConfirmation}
        btnLabel={isCustomerActive?.is_live ? 'Deactivate' : 'Activate'}
        btnVariant={
          isCustomerActive?.is_live ? Color.alerzoDanger : Color.alerzoBlue
        }
      />
      <Modal
        showModal={show}
        icon={<DangerWarning />}
        title={
          isCustomerActive?.is_live
            ? 'Deactivate Business'
            : 'Activate Business'
        }
        subTitle={
          <>
            Are you sure, you want to{' '}
            {isCustomerActive?.is_live ? 'deactivate' : 'activate'}{' '}
            <b> {data?.data?.[0]?.name}?</b>
          </>
        }
        setShowModal={() => setShow(!show)}
        cancelBtnText="Cancal"
        buttonText={isCustomerActive?.is_live ? 'Deactivate' : 'Activate'}
        hideContent={true}
        loading={isActivating || isDeactivating}
        handleSubmit={handleSubmit}
      ></Modal>
    </>
  )
}

export default BusinessDetailContainer
