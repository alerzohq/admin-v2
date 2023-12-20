import React, { useState } from 'react'

import Modal from '../../../../components/modal'
import { Form, SelectInput, Text } from '../../../../components'
import { Color } from '../../../../assets/theme'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { axiosInstance } from '../../../../configs/axios-instance'
import toast from 'react-hot-toast'
import { getTerminalsSpecs } from '../utils'
import { TerminalProviders } from '../../../../data/terminal-data'

const AddTerminalModal: React.FC<{
  addMethod: string
  handleAddMethod: (method: 'manual' | 'excel' | '') => void
}> = ({ addMethod, handleAddMethod }) => {
  const queryClient = useQueryClient()

  const [addValues, setAddValues] = useState({
    serialNumber: '',
    specification: '',
    provider: '',
    terminalId: '',
  })
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)

  const { isLoading: specsLoading, data: specs } = useQuery(
    'terminal-specs',
    getTerminalsSpecs
  )

  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    (inviteData: { serialNumber: string; POSVariant: string }) => {
      return axiosInstance.post('/terminals', { ...addValues })
    },
    {
      onSuccess: () => {
        toast.success('Terminal add successfully')
        queryClient.invalidateQueries('terminal-stats')
        queryClient.invalidateQueries('terminals')
        handleAddMethod('')
        setAddValues({
          serialNumber: '',
          specification: '',
          provider: '',
          terminalId: '',
        })
      },
    }
  )
  const handleChange = (name: string, value: string) =>
    setAddValues({
      ...addValues,
      [name]: value.trim(),
    })

  const handleIsTriggerSubmit = (triggered: boolean) => {
    setIsTriggerSubmit(triggered)
  }
  return (
    <Modal
      showModal={addMethod === 'manual'}
      setShowModal={() => handleAddMethod('')}
      buttonText="Add Terminal"
      title="Add New Terminal"
      contentPadding={'0'}
      handleSubmit={async () => {
        handleIsTriggerSubmit(true)
        if (addValues.serialNumber && addValues.specification) {
          handleIsTriggerSubmit(false)
          mutation.mutate(addValues)
        }
      }}
    >
      <>
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
            {isTriggerSubmit && (
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
            )}
          </Form.Control>
          <Form.Control pb={'1rem'}>
            <Form.Label>POS Variant</Form.Label>
            {!specsLoading && (
              <SelectInput
                fullWidth
                placeholder="Select POS variant"
                options={[
                  {
                    value: '',
                    label: 'Select POS variant',
                    disabled: true,
                  },
                  ...specs?.data?.map(
                    (spec: { variant: string; id: string }) => {
                      return {
                        value: spec.id,
                        label: spec.variant,
                      }
                    }
                  ),
                ]}
                onChange={(e) => {
                  handleChange('specification', e.value)
                }}
                value={addValues.specification}
              />
            )}
            {isTriggerSubmit && (
              <Text
                padding="8px"
                as={'small'}
                weight={'500'}
                color={Color.alerzoDanger}
              >
                {isTriggerSubmit && addValues.specification === ''
<<<<<<< HEAD
                  ? 'POS variant is required*'
=======
                  ? 'POS Variant is required*'
                  : ''}
              </Text>
            )}
          </Form.Control>
          <Form.Control pb={'1rem'}>
            <Form.Label>Provider</Form.Label>
            {!specsLoading && (
              <SelectInput
                fullWidth
                placeholder="Select Provider"
                options={[
                  {
                    value: '',
                    label: 'Select Provider',
                    disabled: true,
                  },
                  ...TerminalProviders,
                ]}
                onChange={(e) => {
                  handleChange('provider', e.value)
                }}
                value={addValues.specification}
              />
            )}
            {isTriggerSubmit && (
              <Text
                padding="8px"
                as={'small'}
                weight={'500'}
                color={Color.alerzoDanger}
              >
                {isTriggerSubmit && addValues.provider === ''
                  ? 'Provider is required*'
>>>>>>> f3b732ebe81de0f958804e53701f8aa1f9c04514
                  : ''}
              </Text>
            )}
          </Form.Control>
          {addValues.provider === 'ga' && (
            <Form.Control pb={'1rem'}>
              <Form.Label>Terminal ID</Form.Label>
              <Form.Input
                type="text"
                onChange={(e) =>
                  handleChange('terminalId', e.target.value.trim())
                }
                placeholder="Enter terminal ID"
                value={addValues.terminalId}
              />
              {isTriggerSubmit && (
                <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  {isTriggerSubmit && addValues.terminalId === ''
                    ? 'Terminal ID is required*'
                    : ''}
                </Text>
              )}
            </Form.Control>
          )}
        </Form>
        {mutation.isError && (
          <Text
            padding="8px"
            as={'small'}
            weight={'500'}
            color={Color.alerzoDanger}
          >
            {mutation.error.response.data.message as string}
          </Text>
        )}
      </>
    </Modal>
  )
}

export default AddTerminalModal
