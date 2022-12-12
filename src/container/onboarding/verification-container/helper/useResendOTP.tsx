import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { axiosInstance } from '../../../../configs/axios-instance'
import { useCountdownTimer } from '../../../../hooks/useCountdownTimer'
import { IResendOTPProps } from '../../type'



const useResendOTP = (payload:IResendOTPProps) => {

 
 
   const {token, email} = payload

// console.log({payload})

   const handleOTP=() => {
    return axiosInstance.post(`/login/resend-otp`,{token, email})
   }

    const {mutate}= useMutation(handleOTP,{
        onSuccess: () => {
            toast.success('Resend OTP successfully!');
        },
        onError: () => {
            toast.error('Resend OTP failed')
        }
    })

    const handleResendOTP=()=>{
        mutate()
    }


    
  return {handleResendOTP}
}

export default useResendOTP