import { Color } from '../../../../../assets/theme'
import { SelectInput, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { TextArea } from '../../../../../components/modal/styles/modal.styles'
type Props = {
  isShown: boolean
  loading?: boolean
  value: { [key: string]: any }
  triggerSubmit: boolean
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
  setValue: React.Dispatch<
    React.SetStateAction<{
      comments?: string
      status?: string
      reason?: string
    }>
  >
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const UpdateKYCModal = ({
  triggerSubmit,
  isShown,
  value,
  handleSubmit,
  toggleModal,
  setValue,
  loading,
}: Props) => {
  return (
    <Modal
      subTitle="Provide an action to this user's Account Upgrade Request"
      contentPadding={'0 0 2rem 0'}
      modalHeight="auto"
      showModal={isShown}
      setShowModal={toggleModal}
      buttonText="Submit"
      title="Account Upgrade Request"
      disabled={
        !value?.status || (value?.status === 'rejected' && !value?.reason)
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
        Action
      </Text>
      <SelectInput
        placeholder="Select action"
        onChange={(e: any) => {
          setValue({
            ...value,
            status: e?.value,
          })
        }}
        value={value?.status}
        fullWidth
        options={[
          { label: 'Verified', value: 'verified' },
          { label: 'Rejected', value: 'rejected' },
        ]}
      />
      {triggerSubmit && !value?.status && (
        <Text
          padding="8px"
          as={'small'}
          weight={'500'}
          color={Color.alerzoDanger}
        >
          Action is required*
        </Text>
      )}
      {value?.status === 'rejected' && (
        <>
          {' '}
          <Text
            as="p"
            padding="1.5rem 0 0 0"
            color={Color.alerzoBlack}
            size="14px"
            margin="0 0 .5rem 0"
            align="start"
            alignSelf="self-start"
          >
            Reason for Rejection
          </Text>
          <SelectInput
            placeholder="Select action"
            onChange={(e: any) => {
              setValue({
                ...value,
                reason: e?.value,
              })
            }}
            value={value?.reason}
            fullWidth
            options={[
              { label: 'Unable to verify ID', value: 'Unable to verify ID' },
              {
                label: 'Unable to verify document/address',
                value: 'Unable to verify document/address',
              },
              {
                label: 'Biometric submission unclear',
                value: 'Biometric submission unclear',
              },
            ]}
          />
          {triggerSubmit && !value?.reason && (
            <Text
              padding="8px"
              as={'small'}
              weight={'500'}
              color={Color.alerzoDanger}
            >
              Reason is required*
            </Text>
          )}
        </>
      )}
      <Text
        as="p"
        padding="0"
        color={Color.alerzoBlack}
        size="14px"
        margin="1rem 0 .5rem 0"
        alignSelf="self-start"
      >
        Comments
      </Text>

      <TextArea
        textAreaTopMargin="0"
        placeholder={'Enter message with more than 5 charaters'}
        textAreaHeight="85px"
        value={value?.comments}
        onChange={(e) => {
          setValue({ ...value, comments: e.target.value })
        }}
      />
    </Modal>
  )
}
export default UpdateKYCModal
