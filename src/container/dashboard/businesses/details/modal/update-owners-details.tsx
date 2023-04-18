import React, { useEffect, useState } from 'react'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import VerificationPinModal from '../../../widget/verification-pin-modal/verification-pin-modal'
import { ModalForm } from './styles/modals.styles'
import useSendBusinessOwnerOTP from '../../hooks/useSendBusinessOwnerOtp'
import useUpdateBusinessOwnerInfo from '../../hooks/useUpdateBusinessOwnerInfo'
import SuccessModal from '../../../../../components/success-modal/success-modal'
import { convertPhoneNumber } from '../../../../../utils/formatValue'

const UpdateOwnersDetails = ({
  showUpdateOwner,
  setShowUpdateOwner,
  data,
  businessId,
}: any) => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  })

  // mutations
  const { handleSendOTP } = useSendBusinessOwnerOTP()

  // states
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)

  const handleOpenPinModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSendOTP()
    setShowUpdateOwner(false)
    setShowVerification(true)
  }

  const {
    mutate: update,
    isLoading: isUpdating,
    isError,
    error,
    isSuccess,
  } = useUpdateBusinessOwnerInfo(otp, inputValues)

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

  const handleChange = (name: string, value: string) =>
    setInputValues({
      ...inputValues,
      [name]: value,
    })

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (otp && otp.length < 6) {
      setOtpError(true)
    } else {
      update(businessId)
    }
  }
  return (
    <>
      <Modal
        showModal={showUpdateOwner}
        modalWidth={'500px'}
        title="Update Business Owner Details"
        setShowModal={() => setShowUpdateOwner(!showUpdateOwner)}
        handleSubmit={() => {}}
      >
        <ModalForm>
          <Form>
            <Form.Control pb={'1rem'}>
              <Form.Label>First Name</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('firstName', e.target.value)}
                placeholder={data?.[0]?.business_owner?.first_name}
                value={inputValues.firstName}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Last Name</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('lastName', e.target.value)}
                placeholder={data?.[0]?.business_owner?.last_name}
                value={inputValues.lastName}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Input
                type="text"
                maxLength={11}
                onChange={(e) =>
                  handleChange('phoneNumber', e.target.value.replace(/\D/g, ''))
                }
                placeholder={data?.[0]?.phone_number}
                value={convertPhoneNumber(inputValues.phoneNumber)}
              />
            </Form.Control>
            {/* <Form.Control pb={'1rem'}>
              <Form.Label>Email Address</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('email', e.target.value.trim())}
                placeholder={data?.[0]?.business_owner?.email}
                value={inputValues.email}
              />
            </Form.Control> */}
          </Form>
          <Button
            width={'100%'}
            radius="10px"
            fontSize="14px"
            weight="500"
            onClick={handleOpenPinModal}
          >
            Submit
          </Button>
        </ModalForm>
      </Modal>
      {showVerification && (
        <VerificationPinModal
          open={showVerification}
          close={() => setShowVerification(false)}
          callback={submitForm}
          loading={isUpdating}
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
        />
      )}
      {showSuccess && (
        <SuccessModal
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          message={'You have successfully updated owner detail'}
          btnText={'Continue'}
          title={'Owner Detail Updated'}
          onClick={() => setShowSuccess(false)}
        />
      )}
    </>
  )
}

export default UpdateOwnersDetails
