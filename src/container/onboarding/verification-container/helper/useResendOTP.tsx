import axios from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { IResendOTPProps } from '../../type'



const useResendOTP = (payload:IResendOTPProps) => {

    const BASE_URL = process.env.REACT_APP_API_BASE_URL
    const { minutes, seconds, resetTimer } = useCountdownTimer()
 
   const {token, email} = payload


   const handleOTP=() => {
    return axios.post(`${BASE_URL}/login/resend-otp`,{token, email})
   }

    const {mutate, isLoading}= useMutation(handleOTP,{
        onSuccess: () => {
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


    
  return {handleResendOTP,minutes, seconds,isLoading}
}

export default useResendOTP