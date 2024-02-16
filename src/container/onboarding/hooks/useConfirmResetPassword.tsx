import axios from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

import { useNavigate } from 'react-router-dom'
import { Path } from '../../../constants/route-path'
import { errorMessage } from '../../../utils/message'

const useConfirmResetPassword = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const navigate = useNavigate()

  const confirmReset = (payload: Object) => {
    return axios.post(`${BASE_URL}/members/auth/reset`, payload)
  }

  return useMutation(confirmReset, {
    onSuccess: ({ data }) => {
      toast.success(data?.message)
      navigate(Path.LOGIN)
    },
    onError: (error: Error) => {
      toast.error(`${errorMessage(error)}`)
    },
  })
}

export default useConfirmResetPassword
