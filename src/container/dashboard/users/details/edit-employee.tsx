import { useState } from 'react'
import { useQuery } from 'react-query'
import { Color } from '../../../../assets/theme'
import {
  Button,
  Form,
  Jumbotron,
  SelectInput,
  Stack,
} from '../../../../components'
import { getResource } from '../../../../utils/apiRequest'

const EditEmployees = ({ data }: any) => {
  const [isEditing, setIsEditing] = useState(false)

  const getRoles = () => {
    return getResource('roles')
  }
  const { isLoading: isLoadingRoles, data: roles } = useQuery('roles', getRoles)

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
              disabled={!isEditing}
            />
          </Form.Control>
          <Form.Control pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Last Name</Form.Label>
            <Form.Input
              type="text"
              value={data?.lastName}
              onChange={() => {}}
              disabled={!isEditing}
            />
          </Form.Control>{' '}
          <Form.Control pr={'2rem'} pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Email Address</Form.Label>
            <Form.Input
              type="text"
              value={data?.email}
              onChange={() => {}}
              disabled={!isEditing}
            />
          </Form.Control>
          <Form.Control pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Phone Number</Form.Label>
            <Form.Input
              type="text"
              value={data?.phoneNumber}
              onChange={() => {}}
              disabled={!isEditing}
            />
          </Form.Control>
          <Form.Control pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Role Name</Form.Label>
            {!isLoadingRoles && roles && (
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
                onChange={(e) => {}}
                value={{ value: data?.roleName, label: data?.roleName }}
                styles={{ width: '100%' }}
                disabled={!isEditing}
              />
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
          <Button onClick={() => {}} weight="600">
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
