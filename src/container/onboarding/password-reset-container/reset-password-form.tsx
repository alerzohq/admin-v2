import React from 'react'

import { Button, Form, Text } from '../../../components'
import { LockIcon } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import { strongPassword } from '../../../utils/formatValue'
import { ResetPasswordProps } from '../type'

const ResetPasswordForm = ({
  isTriggerSubmit,
  values,
  setValues,
  submitForm,
  loading,
}: ResetPasswordProps) => {
  const { confirmPassword, password } = values

  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value.trim() })
    }
  return (
    <Form width="65%">
      <Text margin="auto" as="h1" color={Color.alerzoDarkGray} padding="1rem 0">
        Reset Password
      </Text>

      <Form.Control pb="1rem">
        <Form.Label>New Password</Form.Label>
        <Form.Input
          Icon={LockIcon}
          type="password"
          onChange={handleChange('password')}
          placeholder="Enter your password"
          inputPadding="0 2.5rem"
        />
        {isTriggerSubmit && (
          <Text as="small" weight="500" color={Color.alerzoDanger}>
            {isTriggerSubmit && values.password === ''
              ? 'Password is required*'
              : !strongPassword(values.password)
              ? 'Password must contain 1 number, 1 uppercase letter, at least one special character (^+#_) and no spaces'
              : ''}
          </Text>
        )}
      </Form.Control>

      <Form.Control>
        <Form.Label> Confirm Password</Form.Label>
        <Form.Input
          Icon={LockIcon}
          type="password"
          onChange={handleChange('confirmPassword')}
          placeholder="Confirm password"
          inputPadding="0 2.5rem"
        />
        {isTriggerSubmit && (
          <Text as="small" weight="500" color={Color.alerzoDanger}>
            {isTriggerSubmit && confirmPassword === ''
              ? 'Confirm password is required*'
              : confirmPassword !== '' && password !== confirmPassword
              ? 'Password and confirm password must be the same'
              : ''}
          </Text>
        )}
      </Form.Control>
      <Form.Control pb="1rem">
        <Text as="small" weight="500" color={Color.alerzoGray4}>
          Password must be 8 characters long and must contain 1 number, 1
          uppercase letter, at least one special character (^+#_) and no spaces
        </Text>
      </Form.Control>

      <Form.Control>
        <Button onClick={submitForm} loading={loading}>
          Reset
        </Button>
      </Form.Control>
    </Form>
  )
}

export default ResetPasswordForm
