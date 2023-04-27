import React, { useEffect, useState } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import VerificationPinModal from '../../../widget/verification-pin-modal/verification-pin-modal'
import { ModalForm, InputError } from './styles/modals.styles'
import useSendBusinessOTP from '../../hooks/useSendBusinessInfoOtp'
import useUpdateBusinessInfo from '../../hooks/useUpdateBusinessInfo'
import SuccessModal from '../../../../../components/success-modal/success-modal'
import useResendBusinessInfoOTP from '../../hooks/useResendBusinessInfoOtp'

const UpdateBusinessDetails = ({
  showUpdateBusiness,
  setShowUpdateBusiness,
  data,
  businessId,
  refetch,
}: any) => {
  const [inputValues, setInputValues] = useState({
    businessName: '',
    businessAddress: '',
    businessPhoneNumber: '',
    businessEmail: '',
    businessWebsite: '',
    state: '',
    city: '',
  })

  // mutations
  const { handleSendOTP } = useSendBusinessOTP()

  const { handleResendOTP } = useResendBusinessInfoOTP()

  // states
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const [websiteError, setWebsiteError] = useState(false)

  const handleOpenPinModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // check if fields in inputValues are not empty strings
    let hasValues = false
    for (const value of Object.values(inputValues)) {
      if (value.trim() !== '') {
        hasValues = true
        break
      }
    }

    // check email validity
    const isEmailValid = () => {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(inputValues.businessEmail)
    }

    // check website validity
    const isWebsiteValid = () => {
      const websiteRegex =
        /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-.]+)$/
      return websiteRegex.test(inputValues.businessWebsite)
    }

    if (hasValues) {
      if (inputValues.businessEmail?.length > 0 && !isEmailValid()) {
        setEmailError(true)
      } else if (
        inputValues.businessPhoneNumber?.length > 0 &&
        inputValues.businessPhoneNumber?.length < 11
      ) {
        setPhoneNumberError(true)
      } else if (inputValues.businessWebsite?.length > 0 && !isWebsiteValid()) {
        setWebsiteError(true)
      } else {
        handleSendOTP()
        setShowUpdateBusiness(false)
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
  } = useUpdateBusinessInfo(otp, inputValues)

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
      refetch()
    }
  }

  const resetForm = () => {
    setInputValues({
      businessName: '',
      businessAddress: '',
      businessPhoneNumber: '',
      businessEmail: '',
      businessWebsite: '',
      state: '',
      city: '',
    })
  }

  const toggleModal = () => {
    setShowUpdateBusiness(!showUpdateBusiness)
    resetForm()
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
        showModal={showUpdateBusiness}
        modalWidth={'800px'}
        title="Update Business Details"
        setShowModal={toggleModal}
        // loading={resetting}
        handleSubmit={() => {}}
      >
        <ModalForm>
          <Form className="form">
            <Form.Control pb={'1rem'}>
              <Form.Label>Email Address</Form.Label>
              <Form.Input
                type="email"
                onChange={(e) =>
                  handleChange('businessEmail', e.target.value.trim())
                }
                placeholder={data?.[0]?.email}
                value={inputValues.businessEmail}
              />
              {emailError ? (
                <InputError>Please enter a valid email</InputError>
              ) : null}
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Business Address</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange('businessAddress', e.target.value)
                }
                placeholder={data?.[0]?.address}
                value={inputValues.businessAddress}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Business Name</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('businessName', e.target.value)}
                placeholder={data?.[0]?.name}
                value={inputValues.businessName}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Business Website</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange('businessWebsite', e.target.value)
                }
                placeholder={data?.[0]?.website}
                value={inputValues.businessWebsite}
              />
              {websiteError ? (
                <InputError>Please enter a valid website</InputError>
              ) : null}
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Input
                type="text"
                maxLength={11}
                onChange={(e) =>
                  handleChange(
                    'businessPhoneNumber',
                    e.target.value.replace(/\D/g, '')
                  )
                }
                placeholder={data?.[0]?.phone_number}
                value={inputValues.businessPhoneNumber}
              />
              {phoneNumberError ? (
                <InputError>Phone number must be 11 digits</InputError>
              ) : null}
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>State</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange(
                    'state',
                    e.target.value.replace(/[^a-zA-Z\s-]/g, '')
                  )
                }
                placeholder={data?.[0]?.state}
                value={inputValues.state}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>City</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange(
                    'city',
                    e.target.value.replace(/[^a-zA-Z\s-]/g, '')
                  )
                }
                placeholder={data?.[0]?.city}
                value={inputValues.city}
              />
            </Form.Control>
          </Form>
          <Button
            width={'100%'}
            radius="10px"
            fontSize="14px"
            weight="500"
            onClick={handleOpenPinModal}
          >
            Save Changes
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
          message={'You have successfully updated business details'}
          btnText={'Continue'}
          title={'Business Details Updated'}
          onClick={closeSuccessModal}
        />
      )}
    </>
  )
}

export default UpdateBusinessDetails
