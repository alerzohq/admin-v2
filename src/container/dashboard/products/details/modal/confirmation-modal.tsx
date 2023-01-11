import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { InviteSent } from '../../../../../assets/icons'
import DangerWarning from '../../../../../assets/icons/danger-warning'
import Modal from '../../../../../components/modal'

import { postRequest } from '../../../../../utils/apiRequest'

const ConfirmBillerChange = ({
  biller,
  showConfirmModal,
  handleShow,
  showStatus,
  setShowStatus,
  slug,
  setBiller,
}: {
  showConfirmModal: boolean
  showStatus: boolean
  slug: string
  biller: { [key: string]: any } | undefined
  setBiller: Dispatch<SetStateAction<{ [key: string]: any } | undefined>>
  setShowStatus: Dispatch<SetStateAction<boolean>>
  handleShow: Dispatch<SetStateAction<boolean>>
}) => {
  //Create a type file and move the types there and then import it @here
  const queryClient = useQueryClient()

  //this should be a custom hook,  move this logic to a different file
  const useChangeBillerMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: `products/${slug}/set-biller`,
        payload,
        methodType: 'post',
      })
    )
  const { isLoading: loadingEnable, mutate } = useChangeBillerMutation()
  // const { isLoading: loadingAssign, mutate } = useChangeBillerMutation()
  const handleChange = () => {
    mutate(
      { billerSlug: biller?.newBiller },
      {
        onSuccess: () => {
          handleShow(false)
          setShowStatus(true)
          queryClient.invalidateQueries('products')
        },
        onError: (error: any) => {
          toast.error(`${error?.response?.data?.message}`)
        },
      }
    )
  }

  //Replace Div with Stack component, Span tag with Text component as span

  return (
    <>
      <Modal
        showModal={showConfirmModal}
        setShowModal={() => {
          handleShow(false)
        }}
        titleSize="22px"
        modalWidth="320px"
        title="Change Biller"
        contentPadding="0"
        icon={<DangerWarning />}
        subTitleSize={'16'}
        subTitle={
          <div>
            Do you want to change{' '}
            <span className="bold">{`${biller?.displayName?.toUpperCase()}'s`}</span>{' '}
            biller to{' '}
            <span className="bold">{biller?.newBiller?.toUpperCase()}</span>?
          </div>
        }
        handleSubmit={handleChange}
        cancelBtnText="Cancel"
        buttonText="Change Biller"
      />
      <Modal
        showModal={showStatus}
        setShowModal={() => {
          setShowStatus(false)
        }}
        titleSize="22px"
        modalWidth="320px"
        title="Biller Changed"
        subTitleMargin="0"
        contentPadding="0"
        icon={<InviteSent />}
        subTitleSize={'16'}
        subTitle={
          <div>
            You have changed{' '}
            <span className="bold">{`${biller?.displayName?.toUpperCase()}'s`}</span>{' '}
            biller to{' '}
            <span className="bold">{biller?.newBiller?.toUpperCase()}</span>?
          </div>
        }
        handleSubmit={() => {
          setBiller(undefined)
          setShowStatus(false)
        }}
        cancelBtnText="Back To Products"
      />
    </>
  )
}

export default ConfirmBillerChange
