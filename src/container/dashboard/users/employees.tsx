import { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { InviteSent } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import {
  Button,
  FallBack,
  Filter,
  Form,
  Jumbotron,
  Loader,
  Table,
  Text,
} from '../../../components'
import Modal from '../../../components/modal'
import { axiosInstance } from '../../../configs/axios-instance'
import { employeesHeader } from '../../../data/table-headers'
import { getResource } from '../../../utils/apiRequest'
import { validEmail } from '../../../utils/formatValue'

const Employees = () => {
  const [isShown, setIsShown] = useState(false)
  const [showSuucessInvite, setShowSuucessInvite] = useState(false)
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [values, setValues] = useState({
    email: '',
    role: '',
  })
  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    (inviteData: { email: string; role: string }) => {
      return axiosInstance.post('/members/invites', inviteData)
    },
    {
      onSuccess: () => {
        toggle()
        toggle('sendInvite')
      },
    }
  )
  const getEmployees = () => {
    return getResource('members')
  }
  const getRoles = () => {
    return getResource('roles')
  }

  const { isLoading, isError, data, refetch } = useQuery(
    'employees',
    getEmployees
  )
  const {
    isLoading: isLoadingRoles,
    isError: isErrorRoles,
    data: roles,
    refetch: refetchRoles,
  } = useQuery('roles', getRoles)
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={'Failed to load Employees'} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={'No Employees list available yet.'} />
  } else {
    component = (
      <Table
        headerbgColor={'transparent'}
        tableName="employees"
        tableData={data?.data}
        tableHeaders={employeesHeader}
        hideDate
        setParams
      />
    )
  }

  const toggle = (type?: 'sendInvite') => {
    type === 'sendInvite'
      ? setShowSuucessInvite(!showSuucessInvite)
      : setIsShown(!isShown)
  }
  const handleChange =
    (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues({ ...values, [name]: e.target.value.trim() })
    }
  return (
    <>
      <Modal
        showModal={showSuucessInvite}
        setShowModal={() => {
          toggle('sendInvite')
          setValues({
            email: '',
            role: '',
          })
        }}
        headerText="Employee Invite Sent"
        contentPadding={'0'}
        icon={<InviteSent />}
        subTitle={`You have invited ${values.email}`}
        handleSubmit={() => {
          toggle('sendInvite')
          setValues({
            email: '',
            role: '',
          })
        }}
        buttonText="Back To Employees"
      />

      <Modal
        showModal={isShown}
        subTitle={'Enter employee email address and assign role'}
        setShowModal={toggle}
        buttonText="Send Invite"
        headerText="Add New Employee"
        contentPadding={'0'}
        handleSubmit={async () => {
          setIsTriggerSubmit(true)
          if (values.email && validEmail(values.email) && values.role) {
            setIsTriggerSubmit(false)
            mutation.mutate(values)
          }
        }}
      >
        <>
          <Form>
            <Form.Control pb={'1rem'}>
              <Form.Label>Email address</Form.Label>
              <Form.Input
                type="text"
                onChange={handleChange('email')}
                placeholder="Enter email address"
                value={values.email}
              />
              {isTriggerSubmit && (
                <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  {isTriggerSubmit && values.email === ''
                    ? 'Email address is required*'
                    : values.email !== '' && !validEmail(values.email)
                    ? 'Please provide a valid Alerzo email*'
                    : ''}
                </Text>
              )}
            </Form.Control>
            <Form.Control pb={'1rem'}>
              <Form.Label>Select Role</Form.Label>
              {!isLoadingRoles && (
                <Form.Select
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
                  onChange={handleChange('role')}
                  value={values.role}
                />
              )}
              {isTriggerSubmit && (
                <Text
                  padding="8px"
                  as={'small'}
                  weight={'500'}
                  color={Color.alerzoDanger}
                >
                  {isTriggerSubmit && values.role === ''
                    ? 'Role is required*'
                    : ''}
                </Text>
              )}
            </Form.Control>
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
      <Jumbotron padding={'.5rem 1rem'} direction={'column'} width="98%">
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
                label: 'Add New Employee',
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

export default Employees
