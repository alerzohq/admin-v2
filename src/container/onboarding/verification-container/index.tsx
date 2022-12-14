import React, { useState, useEffect } from 'react'
import { Color } from '../../../assets/theme'
import { Button, Form, Loader, Stack, Text } from '../../../components'
import { useAppContext } from '../../../context'
import AuthLayout from '../layout'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../../constants/route-path'
import OtpInput from 'react-otp-input'
import { TimerIcon } from '../../../assets/icons'
import useAuthenticate from './helper/useAuthenticate'
import useResendOTP from './helper/useResendOTP'

const VerificationContainer = () => {
  const navigate = useNavigate()
  const {
    state: { userOtp },
    dispatch,
  } = useAppContext()

  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)

  let payload = {
    otp,
    token: userOtp?.token,
    email: userOtp?.email,
  }

  const { authenticateUser, loading } = useAuthenticate({
    payload: payload,
    dispatch: dispatch,
  })
  const { handleResendOTP, minutes, seconds, isLoading } = useResendOTP(payload)

  const handleChange = (otp: string) => {
    setOtp(otp)
    setOtpError(false)
  }

  useEffect(() => {
    if (!userOtp) {
      navigate(Path.LOGIN)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resendOTP = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleResendOTP()
  }

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (userOtp?.email && otp && otp?.length >= 6 && userOtp?.token) {
      setOtpError(false)
      await authenticateUser()
    } else {
      setOtpError(true)
    }
  }

  return (
    <AuthLayout>
      <Stack alignItems={'center'} id="otp-verification">
        <Form width={'65%'}>
          <Text
            margin={'auto'}
            as={'h1'}
            color={Color.alerzoDarkGray}
            padding={'1rem 0'}
          >
            {`Enter OTP`}
          </Text>
          <Text
            as={'p'}
            padding={'0 1rem'}
            align={'center'}
            weight={'500'}
            size={'14px'}
            color={Color.alerzoBlack}
          >
            <>
              A 6 digit OTP sent to <strong>{userOtp?.email}</strong>, please
              check your email adress and enter OTP below
            </>
          </Text>
          <Form.Control pb={'2rem'} pt={'2rem'}>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              hasErrored={otpError}
              separator={<span> </span>}
              errorStyle={{
                border: `0.8px solid ${Color.alerzoDanger}`,
              }}
              isInputNum={true}
              focusStyle={{
                border: `1px solid ${Color.alerzoBlue}`,
              }}
              inputStyle={{
                padding: '1rem',
                background: ' rgba(255, 255, 255, 0.5)',
                border: `0.8px solid ${Color.alerzoGrayBorder}`,
                borderRadius: '10px',
                fontSize: '1.5rem',
                color: `${Color.alerzoDarkGray}`,
              }}
              containerStyle={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '5px',
              }}
            />
          </Form.Control>

          <Stack
            direction={'row'}
            justifyContent={'center'}
            gap={'5px'}
            alignItems={'center'}
          >
            <TimerIcon />
            <Text as={'small'} weight={'600'} color={'#7890B5'}>
              {' '}
              Expires In :
            </Text>
            <Stack width="50px">
              <Text as={'small'} weight={'600'} color={'#7890B5'}>
                {' '}
                {minutes} : {seconds}
              </Text>
            </Stack>
          </Stack>

          <Form.Control pt={'3rem'} pb={'2rem'}>
            <Button onClick={submitForm}>
              {loading ? <Loader color={Color.alerzoWhite} /> : 'Proceed'}
            </Button>
          </Form.Control>

          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text as={'p'} weight={'500'} color={'#7890B5'}>
              {' '}
              Didn’t get a code?
            </Text>
            <Button
              width="auto"
              variant="transparent"
              weight="600"
              fontSize="1rem"
              color={Color.alerzoBlue}
              onClick={resendOTP}
            >
              {isLoading ? 'Resend...' : 'Resend'}
            </Button>
          </Stack>
        </Form>
      </Stack>
    </AuthLayout>
  )
}

export default VerificationContainer
