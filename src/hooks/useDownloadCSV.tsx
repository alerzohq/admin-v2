import toast from 'react-hot-toast'
import { axiosInstance } from '../configs/axios-instance'
import queryString from 'query-string'
import { filterProps } from '../@types'

const useDownloadCSV = (
  url: string,
  filters: filterProps & { [key in string]?: string | number },
  name?: string
) => {
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
    axiosInstance
      .get(`/${url}?${filterQuery}&download=true`, {
        responseType: 'blob',
      })
      .then((response: any) => {
        download(new Blob([response.data]), `${name || 'sample'}.csv`)
      })
      .catch((error) => {
        toast.error('Failed to download CSV, kindly try again')
      })
  }
  return { downloadBulkCSV }
}

export default useDownloadCSV
