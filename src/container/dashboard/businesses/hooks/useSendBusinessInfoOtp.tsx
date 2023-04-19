import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { getResource } from '../../../../utils/apiRequest'

const useSendBusinessOTP = () => {
  const [newOtpToken, setNewOtpToken] = useState('')
  const { minutes, seconds, resetTimer } = useCountdownTimer()

  const handleOTP = () => {
    return getResource(`business/update/otp`)
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

export default useSendBusinessOTP
