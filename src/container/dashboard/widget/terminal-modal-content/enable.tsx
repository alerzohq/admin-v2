import { Color } from '../../../../assets/theme'
import { Text } from '../../../../components'
import Modal from '../../../../components/modal'
import { TextArea } from '../../../../components/modal/styles/modal.styles'

type Props = {
  data: any
  isShown: boolean
  loading?: boolean
  value: { [key: string]: any }
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  setValue: React.Dispatch<
    React.SetStateAction<{ reassignmentReason?: string; businessId?: string }>
  >
}
const EnableTerminalWidget = ({
  loading,
  data,
  isShown,
  value,
  toggleModal,
  setValue,
  handleSubmit,
}: Props) => {
  console.log(isShown)
  const buttonEnabledText = data?.data?.active
    ? 'Disable Terminal'
    : 'Enable Terminal'
  const enabledSubTitle = data?.data?.active
    ? 'Disable this terminal'
    : 'Enable this terminal'
  const enabledPlaceholder = data?.data?.active
    ? 'Enter reason for disabling terminal'
    : 'Enter reason for enabling terminal'
  return (
    <Modal
      subTitle={enabledSubTitle}
      contentPadding={'0'}
      modalHeight="auto"
      showModal={isShown}
      setShowModal={toggleModal}
      buttonText={buttonEnabledText}
      headerText={buttonEnabledText}
      handleSubmit={handleSubmit}
      loading={loading}
    >
      <>
        <Text
          as="p"
          padding="0"
          color={Color.alerzoBlack}
          size="14px"
          margin=".5rem 0 .5rem 0"
          alignSelf="self-start"
        >
          Reason
        </Text>
        <TextArea
          textAreaTopMargin="0"
          placeholder={enabledPlaceholder}
          textAreaHeight="85px"
          value={value.reassignmentReason}
          textAreaWidth="95%"
          textAreaBottomMargin="2rem"
          onChange={(e) =>
            setValue({ ...value, reassignmentReason: e.target.value })
          }
        ></TextArea>
      </>
    </Modal>
  )
}
export default EnableTerminalWidget
