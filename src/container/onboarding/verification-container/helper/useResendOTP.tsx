import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { IResendOTPProps } from '../../type'



const useResendOTP = (userOtp:IResendOTPProps) => {

    const BASE_URL = process.env.REACT_APP_API_BASE_URL
    const [newOtpToken, setNewOtpToken] = useState('')
    const { minutes, seconds, resetTimer } = useCountdownTimer();

    let resendOTPPayload = {
        token:newOtpToken || userOtp?.token,
        email: userOtp?.email,
      }

   const handleOTP=() => {
    return axios.post(`${BASE_URL}/login/resend-otp`,resendOTPPayload)
   }

    const {mutate, isLoading}= useMutation(handleOTP,{
        onSuccess: ({data}) => {
            setNewOtpToken(data?.data?.token)
            toast.success('Resend OTP successfully!');
            resetTimer()
        },
        onError: () => {
            toast.error('Resend OTP failed')
        }
    })

    const handleResendOTP=()=>{
        mutate()
    }


    
  return {handleResendOTP,minutes, seconds,isLoading,newOtpToken}
}

export default useResendOTP
