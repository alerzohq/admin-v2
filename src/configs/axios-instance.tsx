import axios from 'axios'
import dayjs from 'dayjs'
import jwt_decode from 'jwt-decode'

import { getStorageItem, logOut } from '../utils/session-storage'

let baseURL = process.env.REACT_APP_API_BASE_URL
let token = getStorageItem('user') ? getStorageItem('user')?.data?.token : null

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
})
export const axiosInstanceWithoutToken = axios.create({
  baseURL,
})
export const axiosInstanceUniqueUrl = axios.create()
axiosInstance.interceptors.request.use(
  async (req: any) => {
    token = getStorageItem('user')?.data?.token ?? null

    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    const user: any = jwt_decode(token)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

    if (!isExpired) return req

    logOut(() => {
      window.location.href = '/'
    })

    //  const {data} = await axios.post(`${baseURL}/logout`, {headers:{ Authorization: `Bearer ${token}`}})
    //   if(data){
    //     logOut(() => {
    //       window.location.href = '/'
    //     })
    //   }

    // const {data} = await axios.post(`${baseURL}/user/token/refresh`,{refresh:token.refreshToken})
    //   localStorage.getItem('token',JSON.stringify(data.token))
    // req.headers.Authorization = data?.access_token;

    return req
  },
  (error) => {
    return Promise.reject(error)
  }
)
