import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OtpInput from 'react-otp-input'

import { useAppContext } from '../../context'
import useResendOTPMutation from '../../container/dashboard/businesses/hooks/useResendOtpMutation'
import Form from '../form'
import { Color } from '../../assets/theme'
import Stack from '../stack'
import Button from '../button'
import Modal from '../modal'
import Text from '../text'
import { TimerIcon } from '../../assets/icons'
import Loader from '../loader'

type OTPFormModalProps = {
  open: boolean
  onClose: ()=>void
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
  resend?: () => void
  loading?: boolean
  otp?: string
  setOtp?:(otp:string)=>void
  otpError?: boolean
  multiSteps?:boolean
}

const OTPFormModal = ({
  open,
  onClose,
  onSubmit,
  resend,
  loading,
  otp,
  setOtp,
  multiSteps,
  otpError,
}: OTPFormModalProps) => {
  const {
    state: { userOtp, user },
  } = useAppContext()

  const { businessId, slug: productSlug } = useParams()

  const { handleResendOTP, minutes, seconds, isLoading } = useResendOTPMutation(
    {
      userOtp,
      businessId,
      productSlug,
    }
  )

  // convert time to milliseconds
  const timeToMilliseconds = () => {
    const totalSeconds = Number(minutes) * 60 + Number(seconds)
    const totalMilliseconds = totalSeconds * 1000
    return totalMilliseconds
  }

  const resendOtpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // wait for timer to finish before resending otp
    if (timeToMilliseconds() > 1 && resend) {
      setTimeout(() => {
        resend()
      }, timeToMilliseconds())
    } else if (timeToMilliseconds() < 1 && resend) {
      resend()
    }
  }

  const userEmail = user?.data?.email

  const handleChange = (otp: string) => {
    setOtp?.(otp)
  }

  // const closeModal = () => {
  //   setOtp('')
  //   close()
  // }

  useEffect(() => {
    if (!userOtp) {
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resendOTP = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleResendOTP()
  }

  return (
    <Modal
      showModal={open}
      setShowModal={onClose}
      modalWidth="500px"
      title=""
    >
      <Stack
        alignItems='center'
        style={{ marginTop: '-4rem', marginBottom: '-4rem' }}
        id="otp-verification"
      >
        <Form width='100%'>
          <Text
            margin='auto'
            as='h1'
            color={Color.alerzoDarkGray}
            padding='1rem 0'
          >
            Enter OTP
          </Text>
          <Text
            as='p'
            align='center'
            weight='500'
            size='14px'
            color={Color.alerzoBlack}
          >
            <>
              A 6 digit OTP sent to <strong>{userEmail}</strong>, please check
              your email adress and enter OTP below to authorise this action.
            </>
          </Text>
          <Form.Control pb='2rem' pt='2rem'>
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
            direction='row'
            justifyContent='center'
            gap='5px'
            alignItems='center'
          >
            <TimerIcon />
            <Text as='small' weight='600' color='#7890B5'>
              {' '}
              Expires In :
            </Text>
            <Stack width="50px">
              <Text as='small' weight='600' color='#7890B5'>
                {' '}
                {minutes} : {seconds}
              </Text>
            </Stack>
          </Stack>

          <Form.Control pt='3rem' pb='2rem'>
            <Button onClick={onSubmit}>
              {loading ? <Loader color={Color.alerzoWhite} /> : multiSteps?'Proceed':'Submit'}
            </Button>
          </Form.Control>
        </Form>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Text as='p' weight='500' color='#7890B5'>
            {' '}
            Didn’t get a code?
          </Text>
          <Button
            width="auto"
            variant="transparent"
            weight="600"
            fontSize="1rem"
            color={Color.alerzoBlue}
            onClick={resendOtpHandler || resendOTP}
          >
            {isLoading ? 'Resend...' : 'Resend'}
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default OTPFormModal
