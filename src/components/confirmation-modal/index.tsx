import { InviteSent } from '../../assets/icons'
import DangerWarning from '../../assets/icons/danger-warning'
import Modal from '../modal'
import { ConfirmationProps } from './type'

const ConfirmationModal = ({
  showModal,
  handleShow,
  showStatus,
  title,
  setShowStatus,
  handleChange,
}: ConfirmationProps) => {
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={() => {
          handleShow(false)
        }}
        titleSize="22px"
        modalWidth="320px"
        title={title}
        contentPadding="0"
        icon={<DangerWarning />}
        subTitleSize={'16'}
        // subTitle={}
        handleSubmit={handleChange}
        cancelBtnText="Cancel"
        buttonText="Change Biller"
      />
      <Modal
        showModal={showStatus}
        setShowModal={() => {
          setShowStatus(false)
        }}
        titleSize="22px"
        modalWidth="320px"
        title="Biller Changed"
        subTitleMargin="0"
        contentPadding="0"
        icon={<InviteSent />}
        subTitleSize={'16'}
        subTitle={''}
        handleSubmit={() => {}}
        cancelBtnText="Back To Products"
      />
    </>
  )
}

export default ConfirmationModal
