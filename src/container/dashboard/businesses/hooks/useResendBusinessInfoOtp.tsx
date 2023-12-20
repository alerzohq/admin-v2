import { useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { getResource } from '../../../../utils/apiRequest'

const useResendBusinessInfoOTP = () => {
  const [newOtpToken, setNewOtpToken] = useState('')
  const { minutes, seconds, resetTimer } = useCountdownTimer()
  const { businessId } = useParams()

  const handleOTP = () => {
    return getResource(`business/${businessId}/update/resend-otp`)
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

export default useResendBusinessInfoOTP
