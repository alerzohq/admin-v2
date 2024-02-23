import { useMutation } from 'react-query'
import toast from 'react-hot-toast'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

type ResetPasswordProps = {
  employeeId: string
  setOpenModal: (open: boolean) => void
}

const useResetPassword = ({ employeeId, setOpenModal }: ResetPasswordProps) => {
  const passwordReset = (payload: Object) => {
    return postRequest({
      pathUrl: `/members/${employeeId}/auth/reset`,
      payload,
      methodType: 'post',
    })
  }

  return useMutation((payload: Object) => passwordReset(payload), {
    onSuccess: (data) => {
      setOpenModal(false)
      toast.success(data?.message)
    },
    onError: (error: Error) => {
      toast.error(`${errorMessage(error)}`)
    },
  })
}

export default useResetPassword
