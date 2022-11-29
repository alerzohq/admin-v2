import { useMutation } from 'react-query'
import { axiosInstance } from '../configs/axios-instance'
import { useAppContext } from '../context'
import { Action } from '../context/actions'

import { logOut } from '../utils/session-storage'

const useLogout = () => {
  const { dispatch } = useAppContext()

  const logoutUser = () => {
    return axiosInstance.post(`/logout`)
  }

  return useMutation(logoutUser, {
    onSuccess: () => {
      logOut(() => {
        dispatch({ type: Action.LOGOUT })
      })
    },
  })
}

export default useLogout
