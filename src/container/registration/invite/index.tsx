import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Color } from '../../../assets/theme'
import { Button, Form, Loader, Stack, Text } from '../../../components'
import AuthLayout from '../../onboarding/layout'
import { useQuery, useMutation } from 'react-query'
import { getResource } from '../../../utils/apiRequest'
import { AxiosResponse, AxiosError } from 'axios'
import { axiosInstanceWithoutToken } from '../../../configs/axios-instance'
import toast from 'react-hot-toast'
import { FormValue } from '../type'

export const RegistrationInvite = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.pathname.split('/').pop()

  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsTriggerSubmit(true)
    if (Object.values(values).every((value) => value !== '')) {
      setIsTriggerSubmit(false)
      setValues((prevState) => {
        delete prevState.confirmPassword
        return prevState
      })
      mutation.mutate(values)
    }
  }
  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value.trim() })
    }
  const isValidInvite = (id?: string) => {
    return getResource(`members/invites/${id}`, true)
  }

  const { isLoading, isError, data } = useQuery(
    'isValidId',
    () => isValidInvite(id),
    {
      enabled: !!id,
      retry: 1,
    }
  )
  if (isError) {
    navigate('/')
  }
  const [values, setValues] = useState<FormValue>({
    email: data?.data?.email,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })
  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    (inviteData: {
      firstName: string
      lastName: string
      phoneNumber: string
      password: string
    }) => {
      return axiosInstanceWithoutToken.post(
        `members/invites/${id}/accept`,
        values
      )
    },
    {
      onSuccess: () => {
        navigate('/')
      },
      onError: (e) => {
        toast.error(`${e}`)
      },
    }
  )

  return (
    <>
      {!isLoading && !isError && (
        <AuthLayout p={'0'}>
          <Stack alignItems={'center'} id="login">
            <Form width={'65%'}>
              <Text
                margin={'auto'}
                as={'h1'}
                color={Color.alerzoDarkGray}
                padding={'1rem 0'}
              >
                {`Complete Account Setup`}
              </Text>
              <Text
                as={'p'}
                padding={'0 1rem'}
                align={'center'}
                weight={'500'}
                color={Color.alerzoDarkGray}
                size={'14px'}
                margin={'14px 0'}
              >
                {
                  'Complete the form below to create account and access  Dashboard'
                }
              </Text>
              <Form.Control pb={'1rem'}>
                <Form.Label>Email address</Form.Label>
                <Form.Input
                  type="text"
                  onChange={handleChange('email')}
                  value={data?.data?.email}
                  disabled
                />
              </Form.Control>
              <Form.Control pb={'1rem'}>
                <Form.Label>First Name</Form.Label>
                <Form.Input
                  type="text"
                  onChange={handleChange('firstName')}
                  placeholder="Enter your first name"
                />
                {isTriggerSubmit && (
                  <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.firstName === ''
                      ? 'first name is required*'
                      : ''}
                  </Text>
                )}
              </Form.Control>{' '}
              <Form.Control pb={'1rem'}>
                <Form.Label>Last Name</Form.Label>
                <Form.Input
                  type="text"
                  onChange={handleChange('lastName')}
                  placeholder="Enter your last name"
                />
                {isTriggerSubmit && (
                  <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.lastName === ''
                      ? 'last name is required*'
                      : ''}
                  </Text>
                )}
              </Form.Control>
              <Form.Control pb={'1rem'}>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Input
                  type="text"
                  onChange={handleChange('phoneNumber')}
                  placeholder="Enter your mobile number"
                />
                {isTriggerSubmit && (
                  <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.phoneNumber === ''
                      ? 'Phone number is required*'
                      : values.phoneNumber.length < 8 ||
                        values.phoneNumber.length > 11
                      ? 'Phone must be between 8 and 11 number'
                      : !values.phoneNumber.match('^[0-9]{8,11}$')
                      ? 'Only numbers are allowed*'
                      : ''}
                  </Text>
                )}
              </Form.Control>
              <Form.Control pb={'1rem'}>
                <Form.Label> Password</Form.Label>
                <Form.Input
                  type="password"
                  onChange={handleChange('password')}
                  placeholder="Enter your password"
                />
                {isTriggerSubmit && (
                  <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.password === ''
                      ? 'Password is required*'
                      : values.password !== '' && values.password.length < 8
                      ? 'Password must be 8 characters long'
                      : !values.password.match(
                          '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
                        )
                      ? 'Password must be number, small/captial letters, and speacial characters'
                      : ''}
                  </Text>
                )}
              </Form.Control>
              <Form.Control pb={'1rem'}>
                <Form.Label> Password</Form.Label>
                <Form.Input
                  type="password"
                  onChange={handleChange('confirmPassword')}
                  placeholder="Confirm Your Password"
                />
                {isTriggerSubmit && (
                  <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.confirmPassword === ''
                      ? 'Confirm password is required*'
                      : values.confirmPassword !== '' &&
                        values.password.length < 8
                      ? 'Password must be 8 characters long'
                      : values.password !== values.confirmPassword
                      ? `Passwords don't match`
                      : ''}
                  </Text>
                )}
              </Form.Control>
              <Form.Control>
                <Button onClick={submitForm}>
                  {isLoading ? (
                    <Loader color={Color.alerzoWhite} />
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </Form.Control>
            </Form>
          </Stack>
        </AuthLayout>
      )}
    </>
  )
}
