import { Dispatch, SetStateAction, useRef, useState } from 'react'

import Modal from '../../../../components/modal'
import { Button, Form, Text } from '../../../../components'
import { Color } from '../../../../assets/theme'
import { useMutation, useQueryClient } from 'react-query'
import { FileIcon, InviteSent } from '../../../../assets/icons'
import { postRequest } from '../../../../utils/apiRequest'
import { toast } from 'react-hot-toast'
import { FileInput } from './styles/rev.style'
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
  const [fileArray] = useState<string[] | any>([])
  const [fileName, setFileName] = useState()
  const handleChange = (name: string, value: string) =>
    setAddValues({
      ...addValues,
      [name]: value,
    })

  const handleIsTriggerSubmit = (triggered: boolean) => {
    setIsTriggerSubmit(triggered)
  }
  const handleFileChange = (event: any) => {}
  const ref = useRef(null)
  const single = value === 'Perform Single Reversals'
  const handleFile = (fileSelect: any) => {
    if (fileSelect) {
      fileSelect?.current?.click()
    }
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
        title={single ? 'Process Single Reversal' : 'Process Bulk Reversals'}
        contentPadding={'0'}
        loading={loadingAssign}
        disabled={loadingAssign}
        handleSubmit={async () => {
          handleIsTriggerSubmit(true)
          if (single && addValues.references) {
            // const refArr = [addValues?.references]
            handleIsTriggerSubmit(false)
            mutate(
              {
                reasonForReversal: addValues?.reasonForReversal,
                references: [`${addValues?.references}`],
              },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries('transactions')
                  setShowSuccess(true)
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
              {!single ? (
                <FileInput onClick={() => handleFile(ref)}>
                  <button>
                    {fileName ? fileName : 'Select to attach document'}
                  </button>
                  <input
                    accept=".csv"
                    ref={ref}
                    type="file"
                    onChange={(e) => handleFileChange(e)}
                    placeholder="Enter Transaction ID"
                    value={addValues.references}
                  />
                  <FileIcon />
                </FileInput>
              ) : (
                <Form.Input
                  type="text"
                  onChange={(e) => handleChange('references', e.target.value)}
                  placeholder="Enter Transaction ID"
                  value={addValues.references}
                />
              )}
              {isTriggerSubmit &&
                ((single && !addValues?.references) ||
                  (!single && fileArray?.length === 0)) && (
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
          setFileName(undefined)
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
        subTitle={
          <>
            {single
              ? `You have successfully reversed the  transaction`
              : 'You have successfully reversed transactions'}
          </>
        }
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
            setFileName(undefined)
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
