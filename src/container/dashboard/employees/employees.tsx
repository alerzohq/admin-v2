import { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { FilterValueProps } from '../../../@types/global'

import { InviteSent } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import {
  FallBack,
  Filter,
  Form,
  Jumbotron,
  Loader,
  Pagination,
  SelectInput,
  Table,
  Text,
} from '../../../components'
import Modal from '../../../components/modal'
import { axiosInstance } from '../../../configs/axios-instance'
import { useAppContext } from '../../../context'
import { filterValue } from '../../../data/filter-data'
import { employeesHeader } from '../../../data/table-headers'
import { employeFilterOptions } from '../../../helper/filter-helper'
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import { validEmail } from '../../../utils/formatValue'
import { errorMessage } from '../../../utils/message'

const Employees = () => {
  const {
    state: { appFilters },
  } = useAppContext()

  const [isShown, setIsShown] = useState(false)
  const [showSuucessInvite, setShowSuucessInvite] = useState(false)
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [filters, setFilters] = useState(filterValue)
  const [values, setValues] = useState({
    email: '',
    role: '',
  })
  let employeeOptions = employeFilterOptions(appFilters?.['employees'])
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

  const getEmployees = (filterValue: FilterValueProps) => {
    return getNewFilterResource(`members`, filterValue)
  }
  const getRoles = () => {
    return getResource('roles')
  }

  const { isLoading, isError, data, refetch, error, isFetching } = useQuery(
    ['employees', filters],
    () => getEmployees(filters)
  )

  const { isLoading: isLoadingRoles, data: roles } = useQuery('roles', getRoles)
  let component
  if (isLoading) {
    component = <Loader />
  } else if (isError) {
    component = (
      <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
    )
  } else if (data?.data?.length < 1) {
    component = <FallBack title={' Employee not available'} />
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

  const handleChange = (name: string, value: string) =>
    setValues({
      ...values,
      [name]: value.trim(),
    })
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
        title="Employee invitation sent"
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
        buttonText="Close"
      />

      <Modal
        showModal={isShown}
        subTitle={'Enter employee email address and assign role'}
        setShowModal={toggle}
        buttonText="Send Invite"
        title="Add New Employee"
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
                onChange={(e) => handleChange('email', e.target.value)}
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
              {!isLoadingRoles && roles && (
                <SelectInput
                  fullWidth
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
                  onChange={(e) => {
                    handleChange('role', e.value)
                  }}
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
              as="small"
              weight="500"
              color={Color.alerzoDanger}
            >
              {mutation.error.response.data.message as string}
            </Text>
          )}
        </>
      </Modal>
      <Jumbotron padding=".5rem 1rem" direction="column">
        <Filter
          setFilterValues={setFilters}
          showFilters={{
            search: {
              placeholder: 'Search',
              type: 'text',
            },
            date: false,
            selects: [
              {
                query: 'disabled',
                placeholder: 'Status',
                values: employeeOptions,
                value: '',
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
          isFetching={isFetching}
        />
        {component}
      </Jumbotron>
      <Pagination data={data} setPageNumber={setFilters} />
    </>
  )
}

export default Employees
