import React, { useEffect, useState } from 'react'
import { Button, Form } from '../../../../../components'
import Modal from '../../../../../components/modal'
import VerificationPinModal from '../../../widget/verification-pin-modal/verification-pin-modal'
import { ModalForm, InputError } from './styles/modals.styles'
import useSendBusinessOwnerOTP from '../../hooks/useSendBusinessOwnerOtp'
import useUpdateBusinessOwnerInfo from '../../hooks/useUpdateBusinessOwnerInfo'
import SuccessModal from '../../../../../components/success-modal/success-modal'
import {
  convertPhoneNumber,
  formValidator,
} from '../../../../../utils/formatValue'
import useResendBusinessOwnerOTP from '../../hooks/useResendBusinessOwnerOtp'

const defaultValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
}
const UpdateOwnersDetails = ({
  showUpdateOwner,
  setShowUpdateOwner,
  data,
  businessId,
  refetch,
}: any) => {
  const [inputValues, setInputValues] = useState(defaultValues)
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)

  const { handleSendOTP } = useSendBusinessOwnerOTP()
  const { handleResendOTP } = useResendBusinessOwnerOTP()

  const handleOpenPinModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const hasValues = formValidator(inputValues)
    if (hasValues) {
      if (
        inputValues.phoneNumber?.length > 0 &&
        inputValues.phoneNumber?.length < 11
      ) {
        setPhoneNumberError(true)
      } else {
        handleSendOTP()
        setShowUpdateOwner(false)
        setShowVerification(true)
      }
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess])

  useEffect(() => {
    if (data) {
      setInputValues({
        ...inputValues,
        firstName: data?.[0]?.business_owner?.first_name,
        lastName: data?.[0]?.business_owner?.last_name,
        phoneNumber: data?.[0]?.business_owner?.phone_number,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.[0]?.business_owner?.first_name])

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
      refetch()
    }
  }

  const resetForm = () => {
    setInputValues(defaultValues)
  }

  const toggleModal = () => {
    setShowUpdateOwner(!showUpdateOwner)
  }

  const closeVerificationModal = () => {
    resetForm()
    setShowVerification(false)
  }

  const closeSuccessModal = () => {
    resetForm()
    setShowSuccess(false)
  }

  return (
    <>
      <Modal
        showModal={showUpdateOwner}
        modalWidth={'500px'}
        title="Update Business Owner Details"
        setShowModal={toggleModal}
      >
        <ModalForm>
          <Form>
            <Form.Control pb={'1rem'}>
              <Form.Label>First Name</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('firstName', e.target.value)}
                placeholder="First Name"
                value={inputValues.firstName}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Last Name</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('lastName', e.target.value)}
                placeholder="Last Name"
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
                placeholder="Phone Number"
                value={convertPhoneNumber(inputValues.phoneNumber)}
              />
            </Form.Control>
            {phoneNumberError && (
              <InputError>Phone number must be 11 digits</InputError>
            )}
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
          close={closeVerificationModal}
          callback={submitForm}
          loading={isUpdating}
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
          resend={handleResendOTP}
        />
      )}
      {showSuccess && (
        <SuccessModal
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          message={'You have successfully updated owner detail'}
          btnText={'Continue'}
          title={'Owner Detail Updated'}
          onClick={closeSuccessModal}
        />
      )}
    </>
  )
}

export default UpdateOwnersDetails
