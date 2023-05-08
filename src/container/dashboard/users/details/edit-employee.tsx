import { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useQuery, useMutation } from 'react-query'
import { Color } from '../../../../assets/theme'
import {
  Button,
  Form,
  Jumbotron,
  SelectInput,
  Stack,
  Text,
} from '../../../../components'
import { axiosInstance } from '../../../../configs/axios-instance'
import { getResource } from '../../../../utils/apiRequest'

interface Role {
  value: string
  label: string
}

const EditEmployees = ({ data }: any) => {
  const [isEditing, setIsEditing] = useState(false)
  const role = {
    value: data?.adminRoleName,
    label: data?.adminRoleName,
  }
  const [updatedRole, setUpdatedRole] = useState<Role | undefined>({
    value: data?.adminRoleName,
    label: data?.adminRoleName,
  })

  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)

  const getRoles = () => {
    return getResource('roles')
  }
  const { isLoading: isLoadingRoles, data: roles } = useQuery('roles', getRoles)

  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    (role) => {
      return axiosInstance.patch(`/members/${data.id}`, {
        roleName: updatedRole?.value,
      })
    },
    {
      onSuccess: () => {
        setIsEditing(false)
        toast.success('Role updated succesfully')
      },
    }
  )
  return (
    <>
      <Jumbotron width={'65%'} padding={'2rem'} direction={'column'}>
        <Form wrap={'wrap'} width={'100%'} direction="row">
          <Form.Control pr={'2rem'} pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">First Name</Form.Label>
            <Form.Input
              type="text"
              value={data?.firstName}
              onChange={() => {}}
              disabled
            />
          </Form.Control>
          <Form.Control pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Last Name</Form.Label>
            <Form.Input
              type="text"
              value={data?.lastName}
              onChange={() => {}}
              disabled
            />
          </Form.Control>{' '}
          <Form.Control pr={'2rem'} pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Email Address</Form.Label>
            <Form.Input
              type="text"
              value={data?.email}
              onChange={() => {}}
              disabled
            />
          </Form.Control>
          <Form.Control pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Phone Number</Form.Label>
            <Form.Input
              type="text"
              value={data?.phoneNumber}
              onChange={() => {}}
              disabled
            />
          </Form.Control>
          <Form.Control pb={'1rem'} width="45%">
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
                    as={'small'}
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
                    as={'small'}
                    weight={'500'}
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
                mutation.mutate(role)
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
            onClick={() => {}}
            weight="600"
          >
            Reset Password
          </Button>
          <Button weight="600" onClick={() => setIsEditing(true)}>
            Edit Information
          </Button>
        </Stack>
      )}
    </>
  )
}
export default EditEmployees
