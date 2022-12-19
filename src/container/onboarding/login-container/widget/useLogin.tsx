import axios from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../../../constants/route-path'
import { useAppContext } from '../../../../context'
import { Action } from '../../../../context/actions'
import { errorMessage } from '../../../../utils/message'

const useLogin = (email: string) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const navigate = useNavigate()
  const { dispatch } = useAppContext()

  const loginUser = (payload: {}) => {
    return axios.post(`${BASE_URL}/login`, payload)
  }

  return useMutation(loginUser, {
    onSuccess: ({ data }) => {
      if (data) {
        let userInfo = {
          token: data?.data?.token,
          email,
        }

        dispatch({ type: Action.VERIFY_OTP, payload: userInfo })
        navigate(Path.VERIFY_OTP)
      }
    },
    onError: (error: any) => {
      toast.error(`${errorMessage(error)}`)
    },
  })
}

export default useLogin
