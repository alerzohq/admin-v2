import { Dispatch, SetStateAction, useState } from 'react'

import Modal from '../../../../components/modal'
import { Form, SelectInput, Text } from '../../../../components'
import { Color } from '../../../../assets/theme'
import { useMutation, useQueryClient } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { axiosInstance } from '../../../../configs/axios-instance'
import { TerminalProviders } from '../../../../data/terminal-data'
import { InviteSent } from '../../../../assets/icons'
interface Props {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}
const SingleReversalModal = ({showModal, setShowModal}:Props) => {
  const queryClient = useQueryClient()
  const [showSuccess, setShowSuccess] = useState(false)

  const [addValues, setAddValues] = useState({
    reason: '',
    references: '',
  })
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)


  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >( () => {
      return axiosInstance.post('/reverse-transactions', { ...addValues })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('transactions')
        setAddValues({
          reason: '',
          references: '',
        })
        setShowSuccess(true)
      },
    }
  )
  const handleChange = (name: string, value: string) =>
    setAddValues({
      ...addValues,
      [name]: value.trim(),
    })

  const handleIsTriggerSubmit = (triggered: boolean) => {
    setIsTriggerSubmit(triggered)
  }
  return (
    <>
    <Modal
      showModal={showModal}
      setShowModal={() => setShowModal(!showModal)}
      buttonText="Submit"
      title="Add New Terminal"
      contentPadding={'0'}
      handleSubmit={async () => {
        handleIsTriggerSubmit(true)
        if (addValues.references?.length > 0) {
          handleIsTriggerSubmit(false)
          mutation.mutate({...addValues, references: [addValues?.references]})
        }
      }}
    >
      <>
        <Form>
          <Form.Control pb={'1rem'}>
            <Form.Label>Transaction ID</Form.Label>
            <Form.Input
              type="text"
              onChange={(e) =>handleChange('references',e.target.value.trim())
              }
              placeholder="Enter Transaction ID"
              value={addValues.references[0]}
            />
            {isTriggerSubmit && (
              <Text
                padding="8px"
                as={'small'}
                weight={'500'}
                color={Color.alerzoDanger}
              >
                {isTriggerSubmit && addValues.references?.length === 0
                  ? 'Transaction Id is required*'
                  : ''}
              </Text>
            )}
          </Form.Control>
          <Form.Control pb={'1rem'}>
            <Form.Label>Reason for Reversal</Form.Label>
            <Form.Input
              type="text"
              onChange={(e) =>handleChange('reason',e.target.value.trim())}
              placeholder="Why do you want to reverse this transaction"
              value={addValues.reason}
            />
          </Form.Control>
        </Form>
        {mutation.isError && (
          <Text
            padding="8px"
            as={'small'}
            weight={'500'}
            color={Color.alerzoDanger}
          >
            {mutation.error.response.data.message as string}
          </Text>
        )}
      </>
    </Modal>
    <Modal
        showModal={showSuccess}
        setShowModal={() => setShowSuccess(!showSuccess)}
        title="Processing Reversal"
        modalWidth="320px"
        contentPadding={'0'}
        icon={<InviteSent />}
        subTitle={
          <>
            You have successfully updated the threshold for{' '}
            <strong>{addValues?.references[0]}</strong>
          </>
        }
        cancelBtnText="Back To Transaction History"
      />
    </>
  )
}

export default SingleReversalModal
