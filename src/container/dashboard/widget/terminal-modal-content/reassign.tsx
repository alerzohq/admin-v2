import { Color } from '../../../../assets/theme'
import { SelectInput, Text } from '../../../../components'
import Modal from '../../../../components/modal'
import { TextArea } from '../../../../components/modal/styles/modal.styles'
import { mapMerchants } from '../../../../utils/formatValue'
type Props = {
  data: any
  isShown: boolean
  loading?: boolean
  loadingOptions?: boolean
  merchants?: any
  value: { [key: string]: any }
  triggerSubmit: boolean
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
  merchants,
}: Props) => {
  const mappedMerchants = mapMerchants(merchants)
  const subtitle =
    data?.user_id === null
      ? 'Assign this terminal to a merchant'
      : 'Reassign this terminal to a new merchant'
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
        !value?.reassignmentReason ||
        value.reassignmentReason.length <= 5
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
        Select New Merchant
      </Text>
      <SelectInput
        placeholder="Enter to search for merchant"
        onChange={(e: any) => {
          setValue({
            ...value,
            businessId: e?.value,
            serialNumber: data?.serial_number,
          })
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
            : [
                {
                  label: 'Enter to search for merchant',
                  options: mappedMerchants || [{ label: '', value: '' }],
                },
              ]
        }
      />
      {triggerSubmit && !value?.businessId && (
        <Text
          padding="8px"
          as={'small'}
          weight={'500'}
          color={Color.alerzoDanger}
        >
          Merchant is required*
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
            textAreaWidth="95%"
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
