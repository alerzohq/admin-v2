import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../../../../components/modal'
import { Button } from '../../../../../components'
import DangerWarning from '../../../../../assets/icons/danger-warning'
import { Color } from '../../../../../assets/theme'
import useActivateProduct from '../../hooks/useActivateProduct'
import VerificationPinModal from '../../../widget/verification-pin-modal/verification-pin-modal'
import SuccessModal from '../../../../../components/success-modal/success-modal'
import useSendProductOTPMutation from '../../hooks/useSendProductOtp'

type DeactivateProductProps = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  setValue: Dispatch<SetStateAction<string>>
  productName: string | any
  productSlug: string | any
}

const ActivateProductModal: React.FC<DeactivateProductProps> = ({
  showModal,
  setShowModal,
  productName,
  productSlug,
}) => {
  // mutations
  const { handleSendOTP } = useSendProductOTPMutation({
    productSlug,
  })

  //   const { handleResendOTP, newOtpToken, minutes, seconds, isLoading } =
  //     useResendOTPMutation({
  //       productSlug,
  //     })

  // states
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [show, setShow] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)

  const navigate = useNavigate()

  const handleCancel = () => {
    setShowModal(!showModal)
  }

  const handleOpenPinModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSendOTP()
    setShowModal(false)
    setShowVerification(true)
  }

  const {
    mutate: activate,
    isLoading: isActivating,
    isError,
    error,
    isSuccess,
  } = useActivateProduct(setShow, productSlug, otp)

  useEffect(() => {
    if (error) {
      setOtpError(isError)
      setShowVerification(true)
    }
    if (isSuccess) {
      setShowVerification(false)
      setShowSuccess(true)
    }
  }, [isError, isSuccess])

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (productSlug) {
      if (otp && otp.length < 6) {
        setOtpError(true)
      } else {
        activate()
      }
    }
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
        title="Activate Product"
        contentPadding="0"
        icon={<DangerWarning />}
        subTitleSize={'16'}
        subTitle={
          <span style={{ marginTop: '15px' }}>
            Do you want to deactivate <br />
            <span className="bold">{productName}</span>
          </span>
        }
        handleSubmit={() => {}}
      >
        <Button.Group align={'center'}>
          <Button
            onClick={handleCancel}
            height={'45px'}
            width="40%"
            borderSize="1px"
            color={Color.alerzoBlue}
            variant="transparent"
            borderColor={Color.alerzoBlue}
          >
            {'Cancel'}
          </Button>
          <Button
            onClick={handleOpenPinModal}
            height="45px"
            width="40%"
            variant={Color.alerzoBlue}
            color={'#FFF'}
          >
            {'Activate'}
          </Button>
        </Button.Group>
      </Modal>
      {showVerification && (
        <VerificationPinModal
          open={showVerification}
          close={() => setShowVerification(false)}
          callback={submitForm}
          loading={isActivating}
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
        />
      )}
      {showSuccess && (
        <SuccessModal
          productName={productName}
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          message={'You have successfully deactivated'}
          btnText={'Back To Products'}
          title={'Product Deactivated'}
          onClick={() => navigate(-1)}
        />
      )}
    </>
  )
}

export default ActivateProductModal
