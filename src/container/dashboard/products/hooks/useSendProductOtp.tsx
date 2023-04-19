import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { getResource } from '../../../../utils/apiRequest'

type ISendOTPProps = {
  productSlug: string
}

const useSendProductOTPMutation = ({ productSlug }: ISendOTPProps) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const [newOtpToken, setNewOtpToken] = useState('')
  const { minutes, seconds, resetTimer } = useCountdownTimer()

  const handleOTP = () => {
    return getResource(`products/${productSlug}/initiate`)
  }

  const { mutate, isLoading } = useMutation(handleOTP, {
    onSuccess: ({ data }) => {
      setNewOtpToken(data?.data?.token)
      toast.success('Sent OTP successfully!')
      resetTimer()
    },
    onError: () => {
      toast.error('Sending OTP failed')
    },
  })

  const handleSendOTP = () => {
    mutate()
  }

  return { handleSendOTP, minutes, seconds, isLoading, newOtpToken }
}

export default useSendProductOTPMutation
