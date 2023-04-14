import { useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { getResource } from '../../../../utils/apiRequest'

const useSendBusinessOwnerOTP = () => {
  const [newOtpToken, setNewOtpToken] = useState('')
  const { minutes, seconds, resetTimer } = useCountdownTimer()
  const { businessId } = useParams()

  const handleOTP = () => {
    return getResource(`business/${businessId}/owner/update/otp`)
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

export default useSendBusinessOwnerOTP
