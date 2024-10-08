import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Color } from '../../../../assets/theme'
import { Button, Form, Loader, Stack, Text } from '../../../../components'
import { useAppContext } from '../../../../context'
import OtpInput from 'react-otp-input'
import { TimerIcon } from '../../../../assets/icons'
import Modal from '../../../../components/modal'
import useResendOTPMutation from '../../businesses/hooks/useResendOtpMutation'

type VerificationModalProps = {
  open: boolean
  close: VoidFunction
  callback?: VoidFunction | any
  resend?: () => void
  loading?: boolean
  otp?: string
  setOtp?: any
  otpError: boolean
}

const VerificationPinModal = ({
  open,
  close,
  callback,
  resend,
  loading,
  otp,
  setOtp,
  otpError,
}: VerificationModalProps) => {
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
    setOtp(otp)
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
      setShowModal={close}
      modalWidth="500px"
      title=""
      handleSubmit={() => {}}
    >
      <Stack
        alignItems={'center'}
        style={{ marginTop: '-4rem', marginBottom: '-4rem' }}
        id="otp-verification"
      >
        <Form width={'100%'}>
          <Text
            margin={'auto'}
            as={'h1'}
            color={Color.alerzoDarkGray}
            padding={'1rem 0'}
          >
            Enter OTP
          </Text>
          <Text
            as="p"
            align="center"
            weight="500"
            size="14px"
            color={Color.alerzoBlack}
          >
            <>
              A 6 digit OTP sent to <strong>{userEmail}</strong>, please check
              your email adress and enter OTP below to authorise this action.
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
            <Button onClick={callback}>
              {loading ? <Loader color={Color.alerzoWhite} /> : 'Proceed'}
            </Button>
          </Form.Control>
        </Form>
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
            onClick={resendOtpHandler || resendOTP}
          >
            {isLoading ? 'Resend...' : 'Resend'}
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default VerificationPinModal
