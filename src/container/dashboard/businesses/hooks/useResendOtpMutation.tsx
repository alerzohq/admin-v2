import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { postRequest } from '../../../../utils/apiRequest'

type ITokenProps = {
  token: string
  email: string
}

type ISendOTPProps = {
  userOtp: ITokenProps
  businessId: string | any
  productSlug: string | any
}

const useResendOTPMutation = ({
  userOtp,
  businessId,
  productSlug,
}: ISendOTPProps) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const [newOtpToken, setNewOtpToken] = useState('')
  const { minutes, seconds, resetTimer } = useCountdownTimer()

  let sendOTPPayload = {
    token: newOtpToken || userOtp?.token,
    email: userOtp?.email,
  }

  const handleOTP = () => {
    return postRequest({
      pathUrl: `${BASE_URL}/business/${businessId}/products/${productSlug}/resend-OTP`,
      payload: sendOTPPayload,
      methodType: 'post',
    })
  }

  const { mutate, isLoading } = useMutation(handleOTP, {
    onSuccess: ({ data }) => {
      setNewOtpToken(data?.data?.token)
      toast.success('Resent OTP successfully!')
      resetTimer()
    },
    onError: () => {
      toast.error('Resending OTP failed')
    },
  })

  const handleResendOTP = () => {
    mutate()
  }

  return { handleResendOTP, minutes, seconds, isLoading, newOtpToken }
}

export default useResendOTPMutation
