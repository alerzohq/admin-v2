import { useState } from 'react'
import { useQuery } from 'react-query'
// import { Color } from '../../../assets/theme'
import {
  FallBack,
  Filter,
  Form,
  Jumbotron,
  Loader,
  Table,
} from '../../../components'
import Modal from '../../../components/modal'
import { rolesPermList } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'

const RolesPermissions = () => {
  const [isShown, setIsShown] = useState(false)

  const getRoles = () => {
    return getResource('roles')
  }

  const { isLoading, isError, data, refetch } = useQuery(
    'roles-permissions',
    getRoles
  )
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack
        error
        refetch={refetch}
        title={'Failed to load roles and permission. '}
      />
    )
  } else if (data?.data?.length < 1) {
    component = (
      <FallBack title={'No roles and permissions list available yet. '} />
    )
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="user-roles-permission"
        tableData={data?.data}
        tableHeaders={rolesPermList}
        hideDate
        setParams
      />
    )
  }

  const toggle = () => {
    setIsShown(!isShown)
  }

  return (
    <>
      <Modal
        showModal={isShown}
        subTitle={'Enter employee email adree and assign role'}
        setShowModal={toggle}
        buttonText="Send Invite"
        title="Add New Employer"
        contentPadding={'0'}
      >
        <Form>
          <Form.Control pb={'1rem'}>
            <Form.Label>Email address</Form.Label>
            <Form.Input
              type="text"
              onChange={() => {}}
              placeholder="Enter your email address"
            />
            {/* {isTriggerSubmit && (
              <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                {isTriggerSubmit && email === ''
                  ? 'Email address is required*'
                  : email !== '' && !validEmail(email)
                  ? 'Please provide an alerzo email*'
                  : ''}
              </Text>
            )} */}
          </Form.Control>
          <Form.Control pb={'1rem'}>
            <Form.Label>Select Role</Form.Label>
            <Form.Input
              type="text"
              onChange={() => {}}
              placeholder="Enter your email address"
            />
            {/* {isTriggerSubmit && (
              <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                {isTriggerSubmit && email === ''
                  ? 'Email address is required*'
                  : email !== '' && !validEmail(email)
                  ? 'Please provide an alerzo email*'
                  : ''}
              </Text>
            )} */}
          </Form.Control>
        </Form>
      </Modal>
      <Jumbotron padding={'.5rem 1rem'} direction={'column'}>
        <Filter
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: false,
            selects: [
              {
                placeholder: 'Status',
                values: [],
                value: '',
                onChange: () => {},
              },
            ],
            buttons: [
              {
                label: 'Add New Role',
                onClick: () => toggle(),
                buttonClass: 'add-button',
              },
            ],
          }}
        />
        {component}
      </Jumbotron>
    </>
  )
}

export default RolesPermissions
