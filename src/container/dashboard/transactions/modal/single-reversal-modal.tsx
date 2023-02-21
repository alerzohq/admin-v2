import { Dispatch, SetStateAction, useState } from 'react'

import Modal from '../../../../components/modal'
import { Button, Form, Text } from '../../../../components'
import { Color } from '../../../../assets/theme'
import { useMutation, useQueryClient } from 'react-query'
import { InviteSent } from '../../../../assets/icons'
import { postRequest } from '../../../../utils/apiRequest'
import { toast } from 'react-hot-toast'
interface Props {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
const SingleReversalModal = ({
  showModal,
  setShowModal,
  value,
  setValue,
}: Props) => {
  const queryClient = useQueryClient()
  const [showSuccess, setShowSuccess] = useState(false)

  const [addValues, setAddValues] = useState({
    reasonForReversal: '',
    references: '',
  })
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const useReversalMutation = () =>
    useMutation((payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: '/reverse-transactions',
        payload,
        methodType: 'post',
      })
    )
  const { isLoading: loadingAssign, mutate } = useReversalMutation()
  const handleChange = (name: string, value: string) =>
    setAddValues({
      ...addValues,
      [name]: value,
    })

  const handleIsTriggerSubmit = (triggered: boolean) => {
    setIsTriggerSubmit(triggered)
  }

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={() => {
          setValue('')
          setShowModal(false)
        }}
        buttonText="Submit"
        title={'Process Single Reversal'}
        contentPadding={'0'}
        loading={loadingAssign}
        disabled={loadingAssign}
        handleSubmit={async () => {
          handleIsTriggerSubmit(true)
          if (addValues.references) {
            handleIsTriggerSubmit(false)
            mutate(
              {
                reasonForReversal: addValues?.reasonForReversal,
                references: [`${addValues?.references}`],
              },
              {
                onSuccess: (data) => {
                  if (
                    data?.message === 'Transactions reversed with some errors'
                  ) {
                    setShowModal(!showModal)
                    setValue('')
                    toast.error('Transactions reversed with some errors')
                  } else {
                    queryClient.invalidateQueries('transactions')
                    setShowSuccess(true)
                  }
                },
                onError: (error: any) => {
                  toast.error(error?.response?.data?.message)
                },
              }
            )
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
                value={addValues.references}
              />

              {isTriggerSubmit && !addValues?.references && (
                <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  Transaction ID is required*
                </Text>
              )}
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Reason For Reversal for Reversal</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange('reasonForReversal', e.target.value.trim())
                }
                placeholder="Why do you want to reverse this transaction"
                value={addValues.reasonForReversal}
              />
            </Form.Control>
          </Form>
        </>
      </Modal>
      <Modal
        showModal={showSuccess}
        setShowModal={() => {
          setValue('')
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
            setValue('')
            setShowSuccess(!showSuccess)
            setAddValues({
              reasonForReversal: '',
              references: '',
            })
            setShowModal(!showModal)
          }}
        >
          Back To Transaction History
        </Button>
      </Modal>
    </>
  )
}

export default SingleReversalModal
