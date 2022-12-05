import { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Color } from '../../../../assets/theme'
import {
  Button,
  FallBack,
  Form,
  Jumbotron,
  Stack,
  Text,
} from '../../../../components'
import Checkbox from '../../../../components/checkbox'
import { axiosInstance } from '../../../../configs/axios-instance'
import { Path } from '../../../../constants/route-path'
import { getResource } from '../../../../utils/apiRequest'

const RolePermissionDetails = ({
  data,
  handleRoleEdit,
  edit,
  create,
  handleRoleCreation,
}: {
  data: any
  handleRoleEdit: (edit: boolean) => void
  handleRoleCreation: (create: boolean) => void
  edit?: boolean
  create?: boolean
}) => {
  const [permissions, setPermissions] = useState<
    { slug: string; displayName: string }[]
  >(data?.permissions ?? [])
  const [inputValue, setInputValue] = useState('')
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const handlePermissions = (selectedPermission: {
    slug: string
    displayName: string
  }) => {
    if (
      permissions?.some(
        (permission) => permission.slug === selectedPermission.slug
      )
    ) {
      setPermissions((prev) =>
        prev.filter((permission) => permission.slug !== selectedPermission.slug)
      )
    } else {
      setPermissions((prev) => [...prev, selectedPermission])
    }
  }

  const getPermissions = () => {
    return getResource('permissions')
  }
  const { data: allPermissions } = useQuery('permissions', getPermissions)

  const createRole = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    () => {
      return axiosInstance.post('/roles', {
        role: inputValue,
        permissions: permissions.map((permission) => permission.slug),
      })
    },
    {
      onSuccess: () => {
        toast.success('Role created succesfully')
        queryClient.invalidateQueries('roles')
        handleRoleCreation(false)
        navigate(
          {
            pathname: Path.USERS,
            search: '?status=roles-permissions',
          },
          { replace: true }
        )
      },
      onError: (error) => {
        toast.error(error.response.data.message)
      },
    }
  )
  const editRoles = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    () => {
      return axiosInstance.patch(`/roles/${data?.name}`, {
        permissions: permissions.map((permission) => permission.slug),
      })
    },
    {
      onSuccess: () => {
        toast.success('Role edited succesfully')
        queryClient.invalidateQueries('roles')
        handleRoleEdit(false)
        navigate(
          {
            search: '?status=roles-permissions',
          },
          { replace: true }
        )
      },
      onError: (error) => {
        toast.error(error.response.data.message)
      },
    }
  )

  return (
    <>
      <Jumbotron padding='.5rem .5rem' margin="0 1rem" direction='column'>
        <Form width='100%'>
          <Form.Control pb='1rem' width="30%">
            <Form.Label labelFontSize="1rem">Role Name</Form.Label>
            <Form.Input
              type="text"
              value={data?.name ?? inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              inputPadding="0 1rem"
              disabled={!create}
            />
          </Form.Control>
        </Form>
        <Stack
          direction="row"
          columnGap="1.875rem"
          rowGap="2.3125rem"
          flexWrap="wrap"
          pb="1rem"
          pt="2rem"
        >
          {data?.permissions?.length === 0 && !edit ? (
            <FallBack title={'No permissions for this role'} />
          ) : edit || create ? (
            allPermissions?.data.map(
              (
                permission: { slug: string; displayName: string },
                i: number
              ) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    flex: '0 0 18%',
                  }}
                >
                  <Text
                    lineHeight="1.375rem"
                    weight="600"
                    color={Color?.alerzoDarkGray}
                    size="0.875rem"
                    bgColor=''
                    padding='0 2rem'
                    height='100%'
                  >
                    {permission.displayName}
                  </Text>
                  <Checkbox
                    value={permission.slug}
                    name={permission.slug}
                    onClick={() => handlePermissions(permission)}
                    checked={Boolean(
                      permissions?.find((one) => one.slug === permission.slug)
                        ?.slug
                    )}
                  />
                </div>
              )
            )
          ) : (
            data?.permissions.map(
              (permission: { displayName: string }, i: number) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                  }}
                >
                  <Text
                    lineHeight="1.375rem"
                    weight="600"
                    color={Color?.alerzoDarkGray}
                    size="0.875rem"
                    bgColor={Color.alerzoBlue5}
                    padding='.6rem .9rem'
                  >
                    {permission.displayName}
                  </Text>
                </div>
              )
            )
          )}
        </Stack>
      </Jumbotron>
      {!create && (
        <Button
          onClick={() => {
            edit ? editRoles.mutate(permissions) : handleRoleEdit(true)
          }}
          className="download-btn mt-3"
        >
          {edit ? 'Update' : 'Edit Role and Permissions'}
        </Button>
      )}
      {create && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '500px',
            minWidth: '450px',
          }}
        >
          <Button.Group>
            <Button
              onClick={() => {
                handleRoleCreation(false)
              }}
              className="download-btn mt-3"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                createRole.mutate({
                  role: inputValue,
                  permissions: permissions.map((permission) => permission.slug),
                })
              }}
              className="download-btn mt-3 btn-blue"
              disabled={!inputValue}
            >
              Create Role
            </Button>
          </Button.Group>
        </div>
      )}
    </>
  )
}
export default RolePermissionDetails
