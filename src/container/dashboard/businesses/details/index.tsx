import { useLocation } from 'react-router-dom'
import {
  actionOptions,
  businessDetailsHelper,
  TABS,
} from '../../../../data/business-data'
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
import { useEffect, useState } from 'react'
import useActivateBusiness from '../hooks/useActivateBusiness'
import useDeactivateBusiness from '../hooks/useDeactivateBusiness'
import useGetBusinessDetails from '../hooks/useGetBusinessDetails'
import { selectStyles } from '../../../../components/select-input/styles/select-input.styes'
import useResetSecurityQst from '../hooks/useResetSecurityQst'
import { SucccessAlert } from '../../../../components'

const BusinessDetailContainer = () => {
  const location = useLocation()
  const search = location.search
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showResetQst, setShowResetQst] = useState(false)
  const [reset, setReset] = useState('')
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
  const { mutate: resetQst, isLoading: resetting } =
    useResetSecurityQst(setSuccess)

  const { isLoading, isError, data, isFetching } = useGetBusinessDetails(id)
  let wallet = data?.data?.[0]?.wallet_details?.find(
    (wallet: { [key: string]: any }) => wallet?.wallet_type === 'main'
  )

  const walletId = wallet?.wallet_id
  const isCustomerActive = data?.data?.[0]
  const handleBusinessConfirmation = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (reset) {
      setShowResetQst(true)
      setReset('')
    }
  }, [reset])

  const handleSubmit = () => {
    if (isCustomerActive?.is_live) {
      deactivate(id)
    } else {
      activate(id)
    }
  }

  const handleResetQst = () => {
    resetQst(id)
  }

  const showfilters = {
    selects: [
      {
        placeholder: 'Actions',
        hideValue: true,
        isClearable: false,
        isSearchable: false,
        styles: selectStyles(false, false, '150px', true),
        values: actionOptions,
        action: true,
        value: '',
        onChange: (e: any) => setReset(e?.value),
      },
    ],
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
        showfilters={showfilters}
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
        cancelBtnText="Cancel"
        buttonText={isCustomerActive?.is_live ? 'Deactivate' : 'Activate'}
        hideContent={true}
        loading={isActivating || isDeactivating}
        handleSubmit={handleSubmit}
      ></Modal>

      <Modal
        showModal={showResetQst}
        icon={<DangerWarning />}
        title="Reset Security Question"
        subTitle={
          <>
            Do you want to reset
            <b> {data?.data?.[0]?.name}</b> security question?
          </>
        }
        setShowModal={() => setShowResetQst(!showResetQst)}
        cancelBtnText="Cancel"
        buttonText="Reset"
        hideContent={true}
        loading={resetting}
        handleSubmit={handleResetQst}
      ></Modal>
      <SucccessAlert
        showSuccess={success}
        setShowModal={setSuccess}
        title="Reset Security Question"
        subTitle="You have successfully reset security question"
      />
    </>
  )
}

export default BusinessDetailContainer
