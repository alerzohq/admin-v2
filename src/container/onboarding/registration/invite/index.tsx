import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Color } from '../../../../assets/theme'
import { Button, Form, Loader, Stack, Text } from '../../../../components'
import AuthLayout from '../../layout'
import { FormValue } from '../type'
import useRegisterInvites from '../../hooks/useRegisterInvites'
import useGetInvites from '../../hooks/useGetInvites'
import { strongPassword } from '../../../../utils/formatValue'

export const RegistrationInvite = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.pathname.split('/').pop()
  const { isLoading, isError, data } = useGetInvites(id!)
  const { mutate, isLoading: isLoadingInvites } = useRegisterInvites(id!)

  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [values, setValues] = useState<FormValue>({
    email: data?.data?.email,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsTriggerSubmit(true)
    if (Object.values(values).every((value) => value !== '')) {
      setIsTriggerSubmit(false)
      setValues((prevState) => {
        delete prevState.confirmPassword
        return prevState
      })
      mutate(values)
    }
  }
  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value.trim() })
    }
  if (isError) {
    navigate('/')
  }

  return (
    <>
      {!isLoading && (
        <AuthLayout p="0">
          <Stack alignItems="center" id="login">
            <Form width="65%">
              <Text
                margin="auto"
                as="h1"
                color={Color.alerzoDarkGray}
                padding="1rem 0"
              >
                Complete Account Setup
              </Text>
              <Text
                as="p"
                padding="0 1rem"
                align="center"
                weight="500"
                color={Color.alerzoDarkGray}
                size="14px"
                margin="14px 0"
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
              <Form.Control pb="1rem">
                <Form.Label>First Name</Form.Label>
                <Form.Input
                  type="text"
                  onChange={handleChange('firstName')}
                  placeholder="Enter your first name"
                />
                {isTriggerSubmit && (
                  <Text as="small" weight="500" color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.firstName === ''
                      ? 'First name is required*'
                      : ''}
                  </Text>
                )}
              </Form.Control>{' '}
              <Form.Control pb="1rem">
                <Form.Label>Last Name</Form.Label>
                <Form.Input
                  type="text"
                  onChange={handleChange('lastName')}
                  placeholder="Enter your last name"
                />
                {isTriggerSubmit && (
                  <Text as="small" weight="500" color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.lastName === ''
                      ? 'Last name is required*'
                      : ''}
                  </Text>
                )}
              </Form.Control>
              <Form.Control pb="1rem">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Input
                  type="number"
                  onChange={handleChange('phoneNumber')}
                  placeholder="Enter your mobile number"
                />
                {isTriggerSubmit && (
                  <Text as='small' weight='500' color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.phoneNumber === ''
                      ? 'Phone number is required*'
                      : values.phoneNumber.length < 8 ||
                        values.phoneNumber.length > 11
                      ? 'Phone must be between 8 and 11 number'
                      : ''}
                  </Text>
                )}
              </Form.Control>
              <Form.Control pb="1rem">
                <Form.Label> Password</Form.Label>
                <Form.Input
                  type="password"
                  onChange={handleChange('password')}
                  placeholder="Enter your password"
                />
                {isTriggerSubmit && (
                  <Text as='small' weight='500' color={Color.alerzoDanger}>
                    {isTriggerSubmit && values.password === ''
                      ? 'Password is required*'
                      : !strongPassword(values.password)
                      ? 'Password must contain 1 number, 1 uppercase letter, at least one special character (^+#_) and no spaces'
                      : values.password !== '' && values.password.length < 8
                      ? 'Password must be 8 characters long'
                      : ''}
                  </Text>
                )}
                {!isTriggerSubmit && (
                  <Text as='small' weight='500' color={Color.alerzoGray4}>
                      Password must must be 8 characters long and must contain 1 number, 1 uppercase letter, at least one special character (^+#_) and no spaces
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
                  <Text as="small" weight="500" color={Color.alerzoDanger}>
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
                <Button loading={isLoadingInvites} onClick={submitForm}>
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
