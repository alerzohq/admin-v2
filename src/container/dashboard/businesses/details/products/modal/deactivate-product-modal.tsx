import React, { Dispatch, SetStateAction, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../../../../../../components/modal'
import { Button } from '../../../../../../components'
import DangerWarning from '../../../../../../assets/icons/danger-warning'
import { Color } from '../../../../../../assets/theme'
import { useAppContext } from '../../../../../../context'
import useSendOTPMutation from '../hooks/useSendOtpMutation'
import useResendOTPMutation from '../hooks/useResendOtpMutation'
import useDeactivateBusinessProduct from '../hooks/useDeactivateProductMutation'
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

  const { mutate: deactivate, isLoading: isDeactivating } =
    useDeactivateBusinessProduct(setShow, productSlug, otp)

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // if (userOtp?.email && otp && otp?.length >= 6 && userOtp?.token) {
    //   setOtpError(false)
    if (businessId && productSlug) {
      deactivate(businessId)
      setShowVerification(false)
      setShowSuccess(true)
    }
    // } else {
    //   setOtpError(true)
    // }
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
          callback={submitForm}
          loading={isDeactivating}
          otp={otp}
          setOtp={setOtp}
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
