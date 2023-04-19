import { Color } from '../../../../assets/theme'
import { SelectInput, Text } from '../../../../components'
import Modal from '../../../../components/modal'
import { TextArea } from '../../../../components/modal/styles/modal.styles'
import { mapBusinesses } from '../../../../utils/formatValue'
type Props = {
  data: any
  isShown: boolean
  loading?: boolean
  loadingOptions?: boolean
  businesses?: any
  value: { [key: string]: any }
  triggerSubmit: boolean
  setQuery: React.Dispatch<React.SetStateAction<string>>
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
  setValue: React.Dispatch<
    React.SetStateAction<{
      reassignmentReason?: string
      businessId?: string
      serialNumber?: string
    }>
  >
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ReassignTerminalModal = ({
  data,
  loadingOptions,
  triggerSubmit,
  isShown,
  value,
  handleSubmit,
  toggleModal,
  setValue,
  loading,
  businesses,
  setQuery,
}: Props) => {
  let mappedBusinesses = mapBusinesses(businesses)
  const subtitle =
    data?.user_id === null
      ? 'Assign this terminal to a business'
      : 'Reassign this terminal to a new business'
  const btnText =
    data?.user_id === null ? 'Assign Terminal' : 'Reassign Terminal'
  return (
    <Modal
      subTitle={subtitle}
      contentPadding={'0 0 2rem 0'}
      modalHeight="auto"
      showModal={isShown}
      setShowModal={toggleModal}
      buttonText={btnText}
      title={btnText}
      disabled={
        !value?.businessId ||
        (data?.user_id !== null &&
          (!value?.reassignmentReason || value.reassignmentReason.length <= 5))
      }
      handleSubmit={handleSubmit}
      loading={loading}
    >
      <Text
        as="p"
        padding="1.5rem 0 0 0"
        color={Color.alerzoBlack}
        size="14px"
        margin="0 0 .5rem 0"
        align="start"
        alignSelf="self-start"
      >
        Select New Business
      </Text>

      <SelectInput
        placeholder="Enter to search for business"
        onChange={(e: any) => {
          setValue({
            ...value,
            businessId: e?.value,
            serialNumber: data?.serial_number,
          })
        }}
        onInputChange={(e: any) => {
          setQuery(e)
        }}
        value={value?.businessId}
        fullWidth
        options={
          loadingOptions
            ? [
                {
                  label: 'Loading...',
                  options: [{ label: '', value: '' }],
                },
              ]
            : mappedBusinesses
        }
      />
      {triggerSubmit && !value?.businessId && (
        <Text
          padding="8px"
          as={'small'}
          weight={'500'}
          color={Color.alerzoDanger}
        >
          Business is required*
        </Text>
      )}
      {data?.user_id !== null && (
        <>
          <Text
            as="p"
            padding="0"
            color={Color.alerzoBlack}
            size="14px"
            margin="1rem 0 .5rem 0"
            alignSelf="self-start"
          >
            Reason for Reassigning
          </Text>

          <TextArea
            textAreaTopMargin="0"
            placeholder={'Enter message with more than 5 charaters'}
            textAreaHeight="85px"
            value={value?.reassignmentReason}
            textAreaWidth="100%"
            onChange={(e) => {
              setValue({ ...value, reassignmentReason: e.target.value })
            }}
          />
        </>
      )}
      {triggerSubmit && data?.user_id && !value.reassignmentReason && (
        <Text
          padding="8px"
          as={'small'}
          weight={'500'}
          color={Color.alerzoDanger}
        >
          Reason is required*
        </Text>
      )}
    </Modal>
  )
}
export default ReassignTerminalModal
