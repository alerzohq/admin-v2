import React, { useState } from 'react'

import { Color } from '../../../../assets/theme'
import {
  Button,
  Form,
  Jumbotron,
  SelectInput,
  Stack,
  Text,
} from '../../../../components'
import useGetRoles from '../hooks/useGetRoles'
import useUpdateRole from '../hooks/useUpdateRole'
import useRequestPasswordReset from '../hooks/useRequestPasswordReset'
import OTPFormModal from '../../../../components/otp-modal'
import useResetPassword from '../hooks/useResetPassword'

type Role = {
  value: string
  label: string
}

type EmployeeProps = {
  data?: Record<string, string>
}

const EditEmployee = ({ data }: EmployeeProps) => {
  const [otp, setOtp] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)

  const [updatedRole, setUpdatedRole] = useState<Role | undefined>({
    value: data?.adminRoleName || '',
    label: data?.adminRoleName || '',
  })

  const { isLoading: isLoadingRoles, data: roles } = useGetRoles()
  const { mutate: requestOTP } = useRequestPasswordReset({ adminId: data?.id! })
  const { mutate: resetPassword, isLoading } = useResetPassword({
    employeeId: data?.id!,
    setOpenModal,
  })

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    resetPassword({ otp })
  }

  const { mutate } = useUpdateRole({
    setIsEditing: setIsEditing,
    id: data?.id!,
    role: updatedRole?.value!,
  })

  const role = {
    value: data?.adminRoleName,
    label: data?.adminRoleName,
  }

  return (
    <>
      <Jumbotron width="65%" padding="2rem" direction="column">
        <Form wrap="wrap" width="100%" direction="row">
          <Form.Control pr="2rem" pb="1rem" width="45%">
            <Form.Label labelFontSize="1rem">First Name</Form.Label>
            <Form.Input type="text" value={data?.firstName} disabled />
          </Form.Control>
          <Form.Control pb="1rem" width="45%">
            <Form.Label labelFontSize="1rem">Last Name</Form.Label>
            <Form.Input type="text" value={data?.lastName} disabled />
          </Form.Control>{' '}
          <Form.Control pr="2rem" pb="1rem" width="45%">
            <Form.Label labelFontSize="1rem">Email Address</Form.Label>
            <Form.Input type="text" value={data?.email} disabled />
          </Form.Control>
          <Form.Control pb="1rem" width="45%">
            <Form.Label labelFontSize="1rem">Phone Number</Form.Label>
            <Form.Input
              type="text"
              value={data?.phoneNumber}
              onChange={() => {}}
              disabled
            />
          </Form.Control>
          <Form.Control pb="1rem" width="45%">
            <Form.Label labelFontSize="1rem">Role Name</Form.Label>
            {!isLoadingRoles && roles && (
              <>
                <SelectInput
                  placeholder="Select a role"
                  options={[
                    {
                      value: '',
                      label: 'Select a role',
                      disabled: true,
                    },
                    ...roles?.data?.map((role: { name: string }) => {
                      return {
                        value: role.name,
                        label: role.name,
                      }
                    }),
                  ]}
                  isClearable
                  onChange={(e) => {
                    if (e?.value) {
                      setUpdatedRole(e)
                    } else {
                      setUpdatedRole(undefined)
                    }
                  }}
                  value={updatedRole}
                  disabled={!isEditing}
                  fullWidth
                />
                {isTriggerSubmit && !updatedRole ? (
                  <Text
                    padding="8px"
                    as="small"
                    weight={'500'}
                    color={Color.alerzoDanger}
                  >
                    Role is required*
                  </Text>
                ) : (
                  ''
                )}
                {isTriggerSubmit && updatedRole?.value === role.value ? (
                  <Text
                    padding="8px"
                    as="small"
                    weight="500"
                    color={Color.alerzoDanger}
                  >
                    Admin already on this role
                  </Text>
                ) : (
                  ''
                )}
              </>
            )}
          </Form.Control>
        </Form>
      </Jumbotron>
      {isEditing ? (
        <Stack gap="1rem" width="35%" direction="row" pt="2rem">
          <Button
            borderColor={Color.alerzoBlue}
            color={Color.alerzoBlue}
            variant="transparent"
            onClick={() => setIsEditing(false)}
            weight="600"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (updatedRole?.value && updatedRole.value !== role.value) {
                mutate()
              } else {
                setIsTriggerSubmit(true)
              }
            }}
            weight="600"
          >
            Save changes
          </Button>
        </Stack>
      ) : (
        <Stack gap="1rem" width="35%" direction="row" pt="2rem">
          <Button
            borderColor={Color.alerzoBlue}
            color={Color.alerzoBlue}
            variant="transparent"
            onClick={() => {
              requestOTP()
              setOpenModal(true)
            }}
            weight="600"
          >
            Reset Password
          </Button>
          <Button weight="600" onClick={() => setIsEditing(true)}>
            Edit Information
          </Button>
        </Stack>
      )}
      <OTPFormModal
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
        onSubmit={onSubmit}
        setOtp={setOtp}
        multiSteps={false}
        otp={otp}
        loading={isLoading}
      />
    </>
  )
}
export default EditEmployee
