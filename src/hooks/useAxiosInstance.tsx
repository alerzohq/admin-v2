import axios from 'axios'
import dayjs from 'dayjs'
import jwt_decode from 'jwt-decode'

import { useAppContext } from '../context'

const useAxios = () => {
  let baseURL = process.env.REACT_APP_API_BASE_URL
  let getToken = localStorage.getItem('token')
  let token = localStorage.getItem('token') ? JSON.parse(`${getToken}`) : null

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${token && token}` },
  })

  const { state, dispatch } = useAppContext()

  axiosInstance.interceptors.request.use(
    async (req: any) => {
      if (!token) {
        token = localStorage.getItem('token') ? JSON.parse(`${getToken}`) : null
        req.headers.Authorization = `Bearer ${token && token}`
      }
      const user: any = jwt_decode(token)
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

      if (!isExpired) return req

      const { data } = await axios.post(`${baseURL}/user/token/refresh`, {
        refresh: token.refreshToken,
      })
      //   localStorage.getItem('token',JSON.stringify(data.token))
      // req.headers.Authorization = data?.access_token;

      return req
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  return axiosInstance
}

export default useAxios
