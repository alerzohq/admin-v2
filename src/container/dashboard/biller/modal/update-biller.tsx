import React, { useEffect, useState } from 'react'
import Modal from '../../../../components/modal'
import { Button, Form } from '../../../../components'
import { convertPhoneNumber, isEmailValid } from '../../../../utils/formatValue'
import SuccessModal from '../../../../components/success-modal/success-modal'
import useUpdateBiller from '../hooks/useUpdateBiller'

type UpdateBillerProps = {
  data: Record<string, string>
  showModal: boolean
  slug: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const defaultValues = {
  displayName: '',
  email: '',
  phoneNumber: '',
}
const UpdateBiller = ({
  data,
  showModal,
  slug,
  setShowModal,
}: UpdateBillerProps) => {
  const [inputValues, setInputValues] = useState(defaultValues)
  const [showSuccess, setShowSuccess] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const { mutate, isLoading } = useUpdateBiller(setShowSuccess, setShowModal)

  useEffect(() => {
    if (data) {
      setInputValues({
        ...inputValues,
        displayName: data?.displayName,
        email: data?.email,
        phoneNumber: data?.phoneNumber,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.email, showModal])

  const handleChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    })
    setEmailError('')
    setPhoneError('')
  }

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!isEmailValid(inputValues?.email)) {
      setEmailError('Please enter a valid email')
    } else if (inputValues?.phoneNumber?.length < 11) {
      setPhoneError('Phone number must be 11 characters')
    } else {
      mutate({
        email: inputValues?.email,
        phoneNumber: inputValues?.phoneNumber,
        slug,
      })
    }
  }

  const closeSuccessModal = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <Modal
        showModal={showModal}
        titleSize="25px"
        modalWidth="450px"
        title="Update Biller"
        contentPadding="0 2rem"
        subTitle="Update biller information"
        setShowModal={() => setShowModal(false)}
      >
        <Form>
          <Form.Control pb={'1rem'}>
            <Form.Label>Biller</Form.Label>
            <Form.Input
              type="text"
              disabled
              onChange={(e) => handleChange('biller', e.target.value)}
              placeholder="Biller"
              value={inputValues.displayName}
            />
          </Form.Control>
          <Form.Control pb={'1rem'}>
            <Form.Label>Email</Form.Label>
            <Form.Input
              type="text"
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Email"
              value={inputValues.email}
            />
            {emailError && <Form.Error>{emailError}</Form.Error>}
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
            {phoneError && <Form.Error>{phoneError}</Form.Error>}
          </Form.Control>
        </Form>
        <Button
          width="60%"
          margin="2rem 0 0"
          radius="10px"
          fontSize="14px"
          weight="500"
          disabled={!inputValues?.email}
          onClick={submitForm}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </Modal>

      {showSuccess && (
        <SuccessModal
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          message="You have successfully updated biller"
          btnText="Continue"
          title="Biller Detail Updated"
          onClick={closeSuccessModal}
        />
      )}
    </>
  )
}

export default UpdateBiller
