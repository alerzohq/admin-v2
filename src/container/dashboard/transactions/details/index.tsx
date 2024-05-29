/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'

import { getResource, postRequest } from '../../../../utils/apiRequest'
import DetailsContent from '../../widget/tabs/tab-content-details'
import { TABS } from '../../../../data/tab-data'
import { detailsHelper, otherHelper } from '../../../../data/tab-data-helper'
import NotesContent from './tab-content/notes'
import Receipt from './tab-content/receipt'
import TabsContentWidget from '../../widget/tabs/tab-content'
import Modal from '../../../../components/modal'
import useRequeryTransactions from '../hooks/useRequeryTransactions'
import { ResponseViewer } from './styles/details.styles'
import DangerWarning from '../../../../assets/icons/danger-warning'
import { useAppContext } from '../../../../context'
import ReverseCommModal from '../modal/reverse-commission-modal'
import AllPermissions from '../../../../configs/access-control'

const TabsContainer = () => {
  const navigate = useNavigate()
  const { reverseTransactionAccess } = AllPermissions()
  //states
  const [fetchUser, setFetchUser] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [reversalModal, setReversalModal] = useState(false)
  const [openPin, setOpenPin] = useState<boolean>(false)
  const [otp, setOtp] = useState<string | undefined>()
  const [value, setValue] = useState('')

  const location = useLocation()
  const thePath = location.pathname
  var result = thePath.split('/')
  const id = result[3]
  const search = useLocation().search
  const queryParam = new URLSearchParams(search).get('status')
  const found = TABS.find((element) => element.value === queryParam)
  const getTransactions = () => {
    return getResource(`transactions?id=${id}`)
  }

  // adding transaction id to an array to pass into useRequeryTransactions
  const transactionId = [id]

  const { isLoading, data, isError, isFetching } = useQuery(
    ['transactions', id],
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
          navigate(`/dashboard/businesses/${data?.data?.[0]?.business_id}`, {
            state: { prevPath: `${thePath}` },
          })
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

  const { mutate: requery, isLoading: isRequerying } =
    useRequeryTransactions(transactionId)

  const {
    state: { user },
  } = useAppContext()
  const status: string = data?.data[0]?.status

  const lastItemIndex = data?.data?.[0]?.runs?.length - 1
  const billerResponse = data?.data?.[0]?.runs?.[lastItemIndex]?.data

  const isBillerResponse = Object.keys(billerResponse ?? {})?.length > 0

  const useInitiateReversalMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: '/transactions/initiate-successful-reversal',
        payload,
        methodType: 'post',
      })
    )

  const { isLoading: loadingAssign, mutate: initiateMutate } =
    useInitiateReversalMutation()

  //Filters
  const showfilters = {
    ...(status === 'pending' && {
      buttons: [
        {
          label: 'Retry Transaction',
          onClick: () => requery(),
          buttonClass: 'add-button transparent-button',
          isLoading: isRequerying,
        },
      ].filter(Boolean),
    }),
  }

  const onSubmit = () => {
    initiateMutate(
      {
        email: user?.data?.email,
      },
      {
        onSuccess: (data) => {
          toast.success(data?.message)
          setReversalModal(true)
          setShowConfirm(false)
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message)
          setReversalModal(false)
          setShowConfirm(false)
        },
      }
    )
  }

  return (
    <>
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
        routePath="/dashboard/transactions"
        btnHandler={() => setOpenModal(true)}
        btnLabel="Biller Response"
        showfilters={showfilters}
        {...(reverseTransactionAccess
          ? { secondBtnHandler: () => setShowConfirm(true) }
          : {})}
        seconddBtnLabel="Reverse this transaction"
      />
      <Modal
        showModal={showConfirm}
        setShowModal={() => setShowConfirm(!showConfirm)}
        titleSize="22px"
        modalWidth="320px"
        title="Are you sure?"
        contentPadding="0"
        icon={<DangerWarning />}
        subTitleSize="16"
        loading={loadingAssign}
        // subTitle={}
        handleSubmit={onSubmit}
        cancelBtnText="Cancel"
        buttonText="Reverse Transaction"
      />
      <ReverseCommModal
        openPin={openPin}
        setOpenPin={setOpenPin}
        resendOTP={onSubmit}
        transactionId={transactionId}
        otp={otp}
        setShowModal={setReversalModal}
        showModal={reversalModal}
      />
      <Modal
        title={isBillerResponse ? 'Biller Response' : 'No biller response'}
        contentPadding={'0'}
        titleSize="22px"
        modalHeight="auto"
        modalWidth="480px"
        subTitleSize="16px"
        showModal={openModal}
        setShowModal={() => {
          setOpenModal(!openModal)
        }}
      >
        {isBillerResponse && (
          <ResponseViewer>
            {JSON.stringify(billerResponse, null, 2)}
          </ResponseViewer>
        )}
      </Modal>
    </>
  )
}

export default TabsContainer
