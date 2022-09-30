import { useState } from 'react'
import axios from 'axios'
import { getStorageItem } from '../utils/session-storage'

type Methods = 'put' | 'post' | 'patch' | 'delete'

type useMutationProps = {
  pathUrl: string
  methodType: Methods
  payload: {}
}

const BASE_URL = process.env.REACT_APP_API_BASE_URL

const useMutation = ({ pathUrl, payload, methodType }: useMutationProps) => {
  let token = getStorageItem('user') ? getStorageItem('user')?.data?.token : '';
  console.log(token)
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>()

  const postData = async () => {
    setLoading(true)
    setError('')
    try {
      const { data } = await axios[methodType](
        `${BASE_URL}/${pathUrl}`,
        payload,
        {
          ...(token && {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        }
      )
      setData(data)
      setLoading(false)
    } catch (error: any) {
      if (error.response.data?.message === 'Incorrect password') {
        setLoading(false)
        setError('Invalid credentials')
      } else if (error.message === 'Network Error') {
        setError('Please check your network connection')
        setLoading(false)
      } else {
        setError('Something went wrong, please try again')
        setLoading(false)
      }

      setLoading(false)
    }
  }

  return [postData, { data, loading, error }] as const
}
export default useMutation
