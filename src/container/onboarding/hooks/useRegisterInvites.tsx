import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { axiosInstanceWithoutToken } from '../../../configs/axios-instance'
import { errorMessage } from '../../../utils/message'

const useRegisterInvites = (id: string) => {
  const navigate = useNavigate()

  const registerInvites = (payload: Record<string, string | number>) => {
    return axiosInstanceWithoutToken.post(
      `members/invites/${id}/accept`,
      payload
    )
  }

  return useMutation(registerInvites, {
    onSuccess: () => {
      navigate('/')
    },
    onError: (error) => {
      toast.error(errorMessage(error as ErrorType))
    },
  })
}

export default useRegisterInvites
