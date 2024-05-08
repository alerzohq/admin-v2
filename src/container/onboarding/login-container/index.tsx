import React, { useState } from 'react'
import { Stack } from '../../../components'

import { validEmail } from '../../../utils/formatValue'
import AuthLayout from '../layout'

import { formValue } from './formValues'
import LoginForm from './login-form'
import useLogin from '../hooks/useLogin'

const LoginContainer = () => {
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [values, setValues] = useState(formValue)
  const { email, password } = values

  const { mutate, isLoading } = useLogin(email)

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsTriggerSubmit(true)
    if (email && validEmail(email) && password && password.length >= 8) {
      setIsTriggerSubmit(false)
      mutate(values)
    }
  }

  return (
    <AuthLayout>
      <Stack alignItems="center" id="login">
        <LoginForm
          submitForm={submitForm}
          values={values}
          loading={isLoading}
          isTriggerSubmit={isTriggerSubmit}
          setValues={setValues}
        />
      </Stack>
    </AuthLayout>
  )
}

export default LoginContainer
