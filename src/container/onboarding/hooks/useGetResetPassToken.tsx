import axios from 'axios'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'

import { useNavigate } from 'react-router-dom'
import { Path } from '../../../constants/route-path'
import { errorMessage } from '../../../utils/message'

const useGetResetPassToken = (resetToken: string) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const navigate = useNavigate()

  const getResetPassToken = () => {
    return axios.get(`${BASE_URL}/members/auth/reset/${resetToken}`)
  }

  return useQuery('reset-password-token', getResetPassToken, {
    enabled: !!resetToken,
    onError: (error: Error) => {
      toast.error(`${errorMessage(error)}`)
      navigate(Path.LOGIN)
    },
  })
}

export default useGetResetPassToken
