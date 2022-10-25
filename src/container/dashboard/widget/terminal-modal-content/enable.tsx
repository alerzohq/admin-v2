import Modal from '../../../../components/modal'

type Props = {
  isShown: boolean
  loading?: boolean
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const EnableTerminalModal = ({
  loading,
  isShown,
  toggleModal,
  handleSubmit,
}: Props) => {
  return (
    <Modal
      subTitle="Are you sure you want to disable this terminal?"
      contentPadding={'0'}
      titleSize="22px"
      modalHeight="auto"
      modalWidth="480px"
      subTitleSize="16px"
      showModal={isShown}
      setShowModal={toggleModal}
      buttonText="Yes, disable terminal"
      title="Disable Terminal"
      handleSubmit={handleSubmit}
      loading={loading}
      cancelBtnText="No, don't disable terminal"
    ></Modal>
  )
}
export default EnableTerminalModal
