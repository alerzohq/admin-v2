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
      tid?: string
    }>
  >
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ReassignTerminalWidget = ({
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
  console.log(loading, loadingOptions, 'opk')
  const mappedMerchants = mapMerchants(merchants)
  console.log(mappedMerchants, 'merchants')
  console.log(data)
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
      headerText={btnText}
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
        onChange={(e) => setValue({ businessId: e?.value, tid: data?.tid })}
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
            placeholder={'Enter message'}
            textAreaHeight="85px"
            value={value.reassignmentReason}
            textAreaWidth="95%"
            onChange={(e) =>
              setValue({ ...value, reassignmentReason: e.target.value })
            }
          ></TextArea>
        </>
      )}
      {triggerSubmit &&
        data?.user_id === null &&
        value.reassignmentReason === '' && (
          <Text
            padding="8px"
            as={'small'}
            weight={'500'}
            color={Color.alerzoDanger}
          >
            'Reason is required*'
          </Text>
        )}
    </Modal>
  )
}
export default ReassignTerminalWidget
