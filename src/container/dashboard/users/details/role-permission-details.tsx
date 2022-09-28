import { Color } from '../../../../assets/theme'
import { FallBack, Form, Jumbotron, Stack, Text } from '../../../../components'

const RolePermissionDetails = ({ data }: any) => {
  return (
    <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
      <Form width={'30%'}>
        <Form.Control pb={'1rem'} width="20%">
          <Form.Label labelFontSize="1rem">Role Name</Form.Label>
          <Form.Input
            type="text"
            value={data?.name}
            onChange={() => {}}
            disabled
          />
        </Form.Control>
      </Form>
      <Stack
        direction="row"
        columnGap="1.875rem"
        rowGap="1.3125rem"
        flexWrap="wrap"
      >
        {data?.permissions?.length === 0 ? (
          <FallBack title={'No permissions for this role'} />
        ) : (
          data?.permissions.map((permission: string) => (
            <Text
              lineHeight="1.375rem"
              weight="600"
              color={Color?.alerzoDarkGray}
              size="0.875rem"
              bgColor={Color.alerzoBlue5}
              padding=".6rem .9rem"
            >
              {permission}
            </Text>
          ))
        )}
      </Stack>
    </Jumbotron>
  )
}
export default RolePermissionDetails
