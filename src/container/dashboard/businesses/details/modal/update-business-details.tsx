import React, { useState } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'

const UpdateBusinessDetails = ({
  showUpdateBusiness,
  setShowUpdateBusiness,
}: any) => {
  const [addValues, setAddValues] = useState({
    serialNumber: '',
    specification: '',
    provider: '',
    terminalId: '',
  })

  const handleChange = (name: string, value: string) =>
    setAddValues({
      ...addValues,
      [name]: value.trim(),
    })
  return (
    <Modal
      showModal={showUpdateBusiness}
      modalWidth={'800px'}
      title="Update Business Details"
      setShowModal={() => setShowUpdateBusiness(!showUpdateBusiness)}
      buttonText="Save Changes"
      hideContent={true}
      // loading={resetting}
      // handleSubmit={handleResetQst}
    >
      <Form>
        <Form.Control pb={'1rem'}>
          <Form.Label>Serial Number</Form.Label>
          <Form.Input
            type="text"
            onChange={(e) =>
              handleChange('serialNumber', e.target.value.trim())
            }
            placeholder="Enter serial number"
            value={addValues.serialNumber}
          />
          {/* {isTriggerSubmit && (
              <Text
                padding="8px"
                as={'small'}
                weight={'500'}
                color={Color.alerzoDanger}
              >
                {isTriggerSubmit && addValues.serialNumber === ''
                  ? 'Serial Number is required*'
                  : ''}
              </Text>
            )} */}
        </Form.Control>
        <Button
          width={'100%'}
          radius="10px"
          fontSize="14px"
          weight="500"
          // loading={loading}
          // disabled={disabled}
          onClick={() => {}}
        >
          Save Changes
        </Button>
      </Form>
    </Modal>
  )
}

export default UpdateBusinessDetails
