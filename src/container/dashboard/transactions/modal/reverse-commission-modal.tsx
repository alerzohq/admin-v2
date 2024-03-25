import { Dispatch, SetStateAction, useState } from 'react'

import Modal from '../../../../components/modal'
import { Button, Form, Text } from '../../../../components'
import { Color } from '../../../../assets/theme'
import {useMutation, useQueryClient } from 'react-query'
import { InviteSent } from '../../../../assets/icons'
import { postRequest } from '../../../../utils/apiRequest'
import { toast } from 'react-hot-toast'
import { useAppContext } from '../../../../context'
import OTPFormModal from '../../../../components/otp-modal'
interface Props {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  otp?: string
  transactionId: string[]
  openPin: boolean
  setOpenPin: Dispatch<SetStateAction<boolean>>,
  resendOTP: () => void
}
const ReverseCommModal = ({
  showModal,
  setShowModal,
  openPin,
  setOpenPin,
  transactionId,
  resendOTP
}: Props) => {
  const queryClient = useQueryClient()
  const [showSuccess, setShowSuccess] = useState(false)
  const [reversalModal, setReversalModal] = useState(false)

  const [addValues, setAddValues] = useState({
    reasonForReversal: '',
    references: '',
  })
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)

  const [otp, setOtp] = useState<string | undefined>()
  const useReversalMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: '/transactions/execute-successful-reversal',
        payload,
        methodType: 'post',
      })
    )

  const { isLoading: executingReversal, mutate } = useReversalMutation()
  const {
    state: { user },
  } = useAppContext()

  const handleChange = (name: string, value: string) =>
    setAddValues({
      ...addValues,
      [name]: value,
    })


  const handleExecuteReversal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    mutate(
      {
        reasonForReversal: addValues?.reasonForReversal,
        transactionIds: transactionId,
        email: user?.data?.email,
        otp,
      },
      {
        onSuccess: (data) => {
          toast.success(data?.message)
          closeModal()
          setOpenPin(false)
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message)
        },
      }
    )
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <OTPFormModal
        open={openPin}
        setOtp={(otp: string) => setOtp(otp)}
        otp={otp}
        onClose={() => setOpenPin(false)}
        onSubmit={handleExecuteReversal}
        loading={executingReversal}
        resend={resendOTP}
      />
      <Modal
        showModal={showModal}
        setShowModal={() => {
          closeModal()
        }}
        buttonText="Submit"
        title={'Reverse Successful Transaction'}
        contentPadding={'0'}
        loading={executingReversal}
        disabled={executingReversal}
        handleSubmit={() => {
          setIsTriggerSubmit(true)
          if (addValues.reasonForReversal?.length > 5) {
            setShowModal(false)
            setOpenPin(true)
          }

        }}
      >
        <>
          <Form>
            <Form.Control pb={'1rem'}>
              <Form.Label>Transaction ID</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('references', e.target.value)}
                placeholder="Enter Transaction ID"
                value={transactionId}
                disabled
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Reason For Reversal for Reversal</Form.Label>
              <Form.Input
                type="text"
                required
                min={5}
                onChange={(e) =>
                  handleChange('reasonForReversal', e.target.value)
                }
                placeholder="Why do you want to reverse this transaction"
                value={addValues.reasonForReversal}
              />
              {
                isTriggerSubmit && addValues.reasonForReversal?.length < 5 && <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  The reason for reversal must be more than 5 characters
                </Text>
              }
            </Form.Control>
          </Form>
        </>
      </Modal>
      <Modal
        showModal={showSuccess}
        setShowModal={() => {
          setShowSuccess(!showSuccess)
          setAddValues({
            reasonForReversal: '',
            references: '',
          })
          setShowModal(!showModal)
        }}
        title="Processing Reversal"
        modalWidth="320px"
        contentPadding={'0'}
        icon={<InviteSent />}
        subTitle="You have successfully reversed the  transaction"
      >
        <Button
          width={'70%'}
          radius="10px"
          fontSize="14px"
          weight="500"
          variant="transparent"
          borderColor={Color.alerzoBlue}
          color={Color.alerzoBlue}
          onClick={() => {
            setShowSuccess(!showSuccess)
            setAddValues({
              reasonForReversal: '',
              references: '',
            })
          }}
        >
          Back To Transaction History
        </Button>
      </Modal>
    </>
  )
}

export default ReverseCommModal
