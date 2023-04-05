import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Modal from '../../../../../../components/modal'
import { Button } from '../../../../../../components'
import DangerWarning from '../../../../../../assets/icons/danger-warning'
import { Color } from '../../../../../../assets/theme'
import { useAppContext } from '../../../../../../context'
import useSendOTPMutation from '../../../hooks/useSendOtpMutation'
import useResendOTPMutation from '../../../hooks/useResendOtpMutation'
import useDeactivateBusinessProduct from '../../../hooks/useDeactivateProductMutation'
import VerificationPinModal from '../../../../widget/verification-pin-modal/verification-pin-modal'
import SuccessModal from './success-modal'

type DeactivateProductProps = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  setValue: Dispatch<SetStateAction<string>>
  productName: string | any
  productSlug: string | any
  businessId: string | any
}

const DeactivateProductModal: React.FC<DeactivateProductProps> = ({
  showModal,
  setShowModal,
  setValue,
  productName,
  productSlug,
  businessId,
}) => {
  const {
    state: { userOtp },
    dispatch,
  } = useAppContext()

  // mutations
  const { handleSendOTP } = useSendOTPMutation({
    userOtp,
    businessId,
    productSlug,
  })

  const { handleResendOTP, newOtpToken, minutes, seconds, isLoading } =
    useResendOTPMutation({
      userOtp,
      businessId,
      productSlug,
    })

  // states
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [show, setShow] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)

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
    mutate: deactivate,
    isLoading: isDeactivating,
    isError,
    error,
    isSuccess,
  } = useDeactivateBusinessProduct(setShow, productSlug, otp)

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

    if (businessId && productSlug) {
      if (otp && otp.length < 6) {
        setOtpError(true)
      } else {
        deactivate(businessId)
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
        title="Deactivate Product"
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
            {'Deactivate'}
          </Button>
        </Button.Group>
      </Modal>
      {showVerification && (
        <VerificationPinModal
          open={showVerification}
          close={() => setShowVerification(false)}
          callback={submitForm}
          loading={isDeactivating}
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
        />
      )}
    </>
  )
}

export default DeactivateProductModal
