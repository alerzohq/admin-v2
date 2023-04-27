import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { TABS, customerHelper } from '../../../../data/digital-bank-data'
import { getResource } from '../../../../utils/apiRequest'
import DetailsContent from '../../widget/tabs/tab-content-details'
import TabsContentWidget from '../../widget/tabs/tab-content'
import TransactionHistory from './transaction-history'
import CardsContainer from './user-accounts'
import { errorMessage } from '../../../../utils/message'
import { selectStyles } from '../../../../components/select-input/styles/select-input.styes'
import { useEffect, useState } from 'react'
import Modal from '../../../../components/modal'
import DangerWarning from '../../../../assets/icons/danger-warning'
import { SucccessAlert } from '../../../../components'
import useResetSecurityQst from './hooks/useResetSecurityQst'
import useActivateCustomer from './hooks/useActiveCustomer'
import useDeactivateCustomer from './hooks/useDeactivateCustomer'

const DigitalBankDetailContainer = () => {
  const location = useLocation()
  const search = location.search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const title = found ? found?.title : TABS[0]?.title
  const thePath = location.pathname
  let result = thePath.split('/')
  const id = result[3]
  const [reset, setReset] = useState('')
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showResetQst, setShowResetQst] = useState(false)
  const getBusinessDetails = () => {
    return getResource(`customers?id=${id}`)
  }
  const { mutate: activate, isLoading: isActivating } =
    useActivateCustomer(setShow)
  const { mutate: deactivate, isLoading: isDeactivating } =
    useDeactivateCustomer(setShow)
  const { mutate: resetQst, isLoading: resetting } = useResetSecurityQst(
    setSuccess,
    setShowResetQst
  )
  const { isLoading, isError, data, isFetching, error } = useQuery(
    'customer-detail',
    getBusinessDetails
  )
  const isCustomerActive = data?.data?.[0]

  const handleSubmit = () => {
    if (isCustomerActive?.is_live) {
      deactivate(id)
    } else {
      activate(id)
    }
  }

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
  let actionOptions = [
    {
      label: 'Reset Security Question',
      value: 'Reset Security Question',
    },
  ].filter(Boolean)

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
  useEffect(() => {
    if (reset) {
      setShowResetQst(true)
      setReset('')
    }
  }, [reset])

  const handleResetQst = () => {
    resetQst(id)
  }

  return (
    <>
      <TabsContentWidget
        isFetching={isFetching}
        isLoading={isLoading}
        containerTitle="Customer Information"
        isError={isError}
        title={title}
        showfilters={showfilters}
        errorMessage={error && errorMessage(error)}
        currentValue={found?.value || 'details'}
        renderSwitch={renderSwitch}
        tabs={TABS}
        routePath={'/dashboard/digital-bank'}
        hideStatus
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
            <b>
              {' '}
              {data?.data?.[0]?.first_name} {data?.data?.[0]?.last_name}
            </b>{' '}
            security question?
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

export default DigitalBankDetailContainer
