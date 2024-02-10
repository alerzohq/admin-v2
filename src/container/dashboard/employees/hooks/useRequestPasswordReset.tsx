import { useMutation } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'
import toast from 'react-hot-toast'

type ResetPasswordProps={
  adminId:string
}

const useRequestPasswordReset = ({adminId}:ResetPasswordProps) => {

    const requestPasswordReset=()=>{
        return postRequest({
          pathUrl:`/members/${adminId}/auth/reset/otp`,
          methodType:'post'
        })
      }

    return useMutation(requestPasswordReset,{
      onError: (error: Error) => {
        toast.error(`${errorMessage(error)}`)
      },
      })
}

export default useRequestPasswordReset