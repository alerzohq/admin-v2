import React, { useEffect, useState } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import VerificationPinModal from '../../../widget/verification-pin-modal/verification-pin-modal'
import { ModalForm } from './styles/modals.styles'
import useSendBusinessOTP from '../../hooks/useSendBusinessInfoOtp'
import useUpdateBusinessInfo from '../../hooks/useUpdateBusinessInfo'
import SuccessModal from '../../../../../components/success-modal/success-modal'

const UpdateBusinessDetails = ({
  showUpdateBusiness,
  setShowUpdateBusiness,
  data,
  businessId,
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

  // states
  const [showVerification, setShowVerification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)

  const handleOpenPinModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSendOTP()
    setShowUpdateBusiness(false)
    setShowVerification(true)
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
    }
  }

  return (
    <>
      <Modal
        showModal={showUpdateBusiness}
        modalWidth={'800px'}
        title="Update Business Details"
        setShowModal={() => setShowUpdateBusiness(!showUpdateBusiness)}
        // loading={resetting}
        handleSubmit={() => {}}
      >
        <ModalForm>
          <Form className="form">
            <Form.Control pb={'1rem'}>
              <Form.Label>Email Address</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange('businessEmail', e.target.value.trim())
                }
                placeholder={data?.[0]?.business_owner?.email}
                value={inputValues.businessEmail}
              />
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
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>State</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('state', e.target.value)}
                placeholder={data?.[0]?.state}
                value={inputValues.state}
              />
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>City</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) => handleChange('city', e.target.value)}
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
            // loading={loading}
            // disabled={disabled}
            onClick={handleOpenPinModal}
          >
            Save Changes
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
          message={'You have successfully updated business details'}
          btnText={'Continue'}
          title={'Business Details Updated'}
          onClick={() => setShowSuccess(false)}
        />
      )}
    </>
  )
}

export default UpdateBusinessDetails
