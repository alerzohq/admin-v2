import React, { useEffect, useState } from 'react'
import Modal from '../../../../components/modal'
import { Button, Form } from '../../../../components'
import { isEmailValid } from '../../../../utils/formatValue'
import SuccessModal from '../../../../components/success-modal/success-modal'
import useUpdateBiller from '../hooks'

type UpdateCommissionProps = {
  data: Record<string, string>
  showModal: boolean
  slug: string
  modalTitle:string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const defaultValues = {
  displayName: '',
  email: '',
  phoneNumber: '',
}
const UpdateCommission = ({
  data,
  showModal,
  slug,
  modalTitle,
  setShowModal,
}: UpdateCommissionProps) => {
  const [inputValues, setInputValues] = useState(defaultValues)
  const [showSuccess, setShowSuccess] = useState(false)
  const [emailError, setEmailError] = useState('')
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
  }, [data?.displayName])

  const handleChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    })
    setEmailError('')
  }

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!isEmailValid(inputValues?.email)) {
      setEmailError('Please enter a valid email')
    } else {
      mutate({
        email: inputValues?.email,
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
        title={modalTitle??"Update Rate"}
        contentPadding="0 2rem"
        subTitle="Change Rate for this product"
        setShowModal={() => setShowModal(false)}
      >
        <Form>
          <Form.Control pb={'1rem'}>
            <Form.Label>Rate Type</Form.Label>
            <Form.Input
              type="text"
              onChange={(e) => handleChange('biller', e.target.value)}
              placeholder="Rate Type"
              value={inputValues.displayName}
            />
          </Form.Control>
          <Form.Control pb={'1rem'}>
            <Form.Label>Commission</Form.Label>
            <Form.Input
              type="number"
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Commission"
              value={inputValues.email}
            />
            {emailError && <Form.Error>{emailError}</Form.Error>}
          </Form.Control>

          <Form.Control pb={'1rem'}>
            <Form.Label>Merchants Rate</Form.Label>
            <Form.Input
              type="number"
              onChange={(e) =>
                handleChange('phoneNumber', e.target.value)
              }
              placeholder="Merchants Rate"
              value={inputValues.phoneNumber}
            />
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

export default UpdateCommission
