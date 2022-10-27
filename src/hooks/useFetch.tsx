import { useEffect, useState } from 'react'
import { axiosInstance } from '../configs/axios-instance'

const useFetch = ({ pathUrl }: { pathUrl: string }) => {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      setError('')
      try {
        const { data } = await axiosInstance.get(`/${pathUrl}`)
        if (data) {
          setData(data)
          setLoading(false)
        }
      } catch (error: any) {
        if (error.response.data) {
          setLoading(false)
          setError(error.response.data.message)
        } else if (error.message === 'Network Error') {
          setError('Please check your network connection')
        } else {
          setError('Something went wrong, please try again')
        }
      }
    }
    getData()
  }, [pathUrl])

  return {
    data,
    loading,
    error,
  }
}
export default useFetch
