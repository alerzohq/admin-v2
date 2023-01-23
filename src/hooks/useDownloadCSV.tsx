import { useState } from 'react'
import toast from 'react-hot-toast'
import queryString from 'query-string'

import { axiosInstance } from '../configs/axios-instance'
import { filterProps } from '../@types'

const useDownloadCSV = (
  url: string,
  filters: filterProps & { [key in string]?: string | number },
  name?: string
) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const download = (blob: any, filename: string) => {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const downloadBulkCSV = () => {
    const filterQuery = queryString.stringify(filters, {
      skipNull: true,
      skipEmptyString: true,
    })
    setIsDownloading(true)
    axiosInstance
      .get(`/${url}${filterQuery}&download=true`, {
        responseType: 'blob',
      })
      .then((response: any) => {
        download(new Blob([response.data]), `${name || 'sample'}.csv`)
        setIsDownloading(false)
      })
      .catch((error) => {
        toast.error('Failed to download CSV, kindly try again')
        setIsDownloading(false)
      })
  }
  return { downloadBulkCSV, isDownloading }
}

export default useDownloadCSV
