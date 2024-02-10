import React, { useState } from 'react'

import { Stack } from '../../../components'
import AuthLayout from '../layout'
import ResetPasswordForm from './reset-password-form'
import useConfirmResetPassword from '../hooks/useConfirmResetPassword'
import { strongPassword } from '../../../utils/formatValue'
import useGetResetPassToken from '../hooks/useGetResetPassToken'
import { useSearchParams } from 'react-router-dom'

const PasswordResetContainer = () => {
  const[searchParams]=useSearchParams()
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
  })
  const resetToken = searchParams.get('token');
  const { password, confirmPassword } = values
  const {data} = useGetResetPassToken(resetToken!)

  const { mutate, isLoading } = useConfirmResetPassword()

  const payload={
    password,
    adminId:data?.data?.data?.adminId,
    token:data?.data?.data?.token
  }

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setIsTriggerSubmit(true)
    if (strongPassword(password) && password === confirmPassword) {
      setIsTriggerSubmit(false)
        mutate(payload)
    }
  }

  return (
    <AuthLayout>
      <Stack alignItems="center" id="login">
        <ResetPasswordForm
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

export default PasswordResetContainer
