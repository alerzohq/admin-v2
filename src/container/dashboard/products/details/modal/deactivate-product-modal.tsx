import React, { Dispatch, SetStateAction, useState } from 'react'

import Modal from '../../../../../components/modal'
import { Button } from '../../../../../components'
import DangerWarning from '../../../../../assets/icons/danger-warning'
import { Color } from '../../../../../assets/theme'
// import SucccessReversalModal from './success-reversal-modal'
import VerificationPinModal from '../../../widget/verification-pin-modal/verification-pin-modal'
import { useAppContext } from '../../../../../context'
import useSendOTPMutation from '../../hooks/useSendOtpMutation'

type DeactivateProductProps = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  setValue: Dispatch<SetStateAction<string>>
  productName: string
  productSlug: string
}

const DeactivateProductModal: React.FC<DeactivateProductProps> = ({
  showModal,
  setShowModal,
  setValue,
  productName,
  productSlug,
}) => {
  const {
    state: { userOtp },
    dispatch,
  } = useAppContext()

  const businessId = '5696aa8c-3376-4f27-b408-048ff64751bd'

  const { handleSendOTP } =
  useSendOTPMutation({userOtp, businessId, productSlug})

  // states
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  //   const { isLoading: loading, mutate } = useReversalMutation({
  //     setShowModal,
  //     showModal,
  //     setValue,
  //     setShowSuccess,
  //   })
  const handleCancel = () => {
    setShowModal(!showModal)
  }

  const handleOpenPinModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSendOTP()
    setShowModal(false)
    setShowVerification(true)
  }

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={() => {
          setShowModal(!showModal)
        }}
        titleSize="22px"
        modalWidth="430px"
        title="Deactivate Product"
        contentPadding="0"
        icon={<DangerWarning />}
        subTitleSize={'16'}
        subTitle={
          <div style={{ marginTop: '15px' }}>
            Do you want to deactivate <br />
            <span className="bold">{productName}</span>
          </div>
        }
        handleSubmit={() => {}}
      >
        <Button.Group align={'center'}>
          <Button
            onClick={handleCancel}
            height={'45px'}
            width="30%"
            borderSize="1px"
            color={Color.alerzoBlue}
            variant="transparent"
            borderColor={Color.alerzoBlue}
          >
            {'Cancel'}
          </Button>
          <Button
            // onClick={() => console.log('clicked')}
            onClick={handleOpenPinModal}
            height="45px"
            width="50%"
            variant={Color.alerzoBlue}
            color={'#FFF'}
          >
            {'Deactivate Product'}
          </Button>
        </Button.Group>
      </Modal>
      {showVerification && (
        <VerificationPinModal
          open={showVerification}
          close={() => setShowVerification(false)}
        />
      )}
    </>
  )
}

export default DeactivateProductModal
