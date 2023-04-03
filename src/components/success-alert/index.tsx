import { Dispatch, SetStateAction } from 'react'
import { InviteSent } from '../../assets/icons'
import { Color } from '../../assets/theme'
import Button from '../button'
import Modal from '../modal'

type SucccessAlertProps = {
  showSuccess: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  bntTex?: string
  subTitle: string
  title: string
}

const SucccessAlert = ({
  showSuccess,
  setShowModal,
  bntTex,
  subTitle,
  title,
}: SucccessAlertProps) => {
  return (
    <Modal
      showModal={showSuccess}
      setShowModal={() => {
        setShowModal((prev: boolean) => !prev)
      }}
      title={title}
      modalWidth="320px"
      contentPadding={'0'}
      icon={<InviteSent />}
      subTitle={subTitle}
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
          setShowModal((prev: boolean) => !prev)
        }}
      >
        {bntTex ?? 'Continue'}
      </Button>
    </Modal>
  )
}

export default SucccessAlert
