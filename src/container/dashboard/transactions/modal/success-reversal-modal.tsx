import { Dispatch, SetStateAction } from 'react'
import { InviteSent } from '../../../../assets/icons'
import { Color } from '../../../../assets/theme'
import { Button } from '../../../../components'
import Modal from '../../../../components/modal'

type SucccessReversalProps = {
  showSuccess: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  setShowSuccess: Dispatch<SetStateAction<boolean>>
}

const SucccessReversalModal = ({
  showSuccess,
  setShowSuccess,
  setShowModal,
}: SucccessReversalProps) => {
  return (
    <Modal
      showModal={showSuccess}
      setShowModal={() => {
        setShowSuccess(!showSuccess)
        setShowModal((prev: boolean) => !prev)
      }}
      title="Processing Reversal"
      modalWidth="320px"
      contentPadding={'0'}
      icon={<InviteSent />}
      subTitle="You have successfully reversed the  transaction"
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
          setShowSuccess((prev: boolean) => !prev)
        }}
      >
        Back To Transaction History
      </Button>
    </Modal>
  )
}

export default SucccessReversalModal
