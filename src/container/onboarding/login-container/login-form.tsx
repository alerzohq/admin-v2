import React from 'react'
import { EmailIcon, LockIcon } from '../../../assets/icons'
import { Color } from '../../../assets/theme'
import { Button, Form,Text} from '../../../components'
import { validEmail } from '../../../utils/formatValue'
import { LoginProps } from '../type'

const LoginForm = ({isTriggerSubmit,values,setValues,submitForm,loading}:LoginProps) => {

    const {email,password} = values

    const handleChange =(name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value.trim() })
    }
  return (
    <Form width={'65%'}>
          <Text
            margin={'auto'}
            as={'h1'}
            color={Color.alerzoDarkGray}
            padding={'1rem 0'}
          >
            {`Admin Login`}
          </Text>
          <Text
            as={'p'}
            padding={'0 1rem'}
            align={'center'}
            weight={'500'}
            color={Color.alerzoDarkGray}
            size={'14px'}
          >
            {'Enter email address and password to access admin dashboard'}
          </Text>
          <Form.Control pb={'1rem'}>
            <Form.Label>Email address</Form.Label>
            <Form.Input
              Icon={EmailIcon}
              type="text"
              onChange={handleChange('email')}
              placeholder="Enter your email address"
              inputPadding="0 2.5rem"
            />
            {isTriggerSubmit && (
              <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                {isTriggerSubmit && email === ''
                  ? 'Email address is required*'
                  : email !== '' && !validEmail(email)
                  ? 'Please provide an alerzo email*'
                  : ''}
              </Text>
            )}
          </Form.Control>

          <Form.Control pb={'1rem'}>
            <Form.Label> Password</Form.Label>
            <Form.Input
              Icon={LockIcon}
              type="password"
              onChange={handleChange('password')}
              placeholder="Enter your password"
              inputPadding="0 2.5rem"
            />
            {isTriggerSubmit && (
              <Text as={'small'} weight={'500'} color={Color.alerzoDanger}>
                {isTriggerSubmit && password === ''
                  ? 'Password is required*'
                  : password !== '' && password.length < 8
                  ? 'Password must be 8 characters long'
                  : ''}
              </Text>
            )}
          </Form.Control>

          <Form.Control>
            <Button onClick={submitForm} loading={loading}>
              {'Login'}
            </Button>
          </Form.Control>
        </Form>
  )
}

export default LoginForm