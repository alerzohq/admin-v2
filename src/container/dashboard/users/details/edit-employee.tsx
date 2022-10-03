import { useState } from 'react'
import { Color } from '../../../../assets/theme'
import { Button, Form, Jumbotron, Stack } from '../../../../components'

const EditEmployees = ({ data }: any) => {
  const [isEditing, setIsEditing] = useState(false)
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
          <Form.Control pr={'2rem'} pb={'1rem'} width="45%">
            <Form.Label labelFontSize="1rem">Role</Form.Label>
            <Form.Input
              type="text"
              value={data?.roleName}
              onChange={() => {}}
              disabled={!isEditing}
            />
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
          >
            Cancel
          </Button>
          <Button onClick={() => console.log('sss')}>Save changes</Button>
        </Stack>
      ) : (
        <Stack gap="1rem" width="35%" direction="row" pt="2rem">
          <Button
            borderColor={Color.alerzoBlue}
            color={Color.alerzoBlue}
            variant="transparent"
            onClick={() => console.log('sss')}
          >
            Reset Password
          </Button>
          <Button onClick={() => setIsEditing(true)}>Edit Information</Button>
        </Stack>
      )}
    </>
  )
}
export default EditEmployees
