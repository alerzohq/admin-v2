import { filterProps } from '../@types'
import { axiosInstance } from '../configs/axios-instance'
import { cleanPayload } from '../helper/api-helper'
import queryString from 'query-string';

export const getResource = async (pathUrl: string) => {
  const { data } = await axiosInstance.get(`/${pathUrl}`)
  return data
}
export const getNewFilterResource = async (
  pathUrl: string,
  filterValue: filterProps
) => {
  const payload = cleanPayload(filterValue)
  const filterQuery = queryString.stringify(payload)
  const { data } = await axiosInstance.get(
    `/${pathUrl}?${filterQuery}`
  )
  return data
}
export const getFilterResource = async (
  pathUrl: string,
  filterValue: filterProps
) => {
  const { data } = await axiosInstance.get(
    `/${pathUrl}?count=${filterValue.count}&pageNumber=${
      filterValue.pageNumber
    }${filterValue?.query !== '' ? `&query=${filterValue?.query}` : ''}${
      filterValue?.status !== '' ? `&status=${filterValue?.status}` : ''
    }${filterValue?.from !== '' ? `&from=${filterValue?.from}` : ''}${
      filterValue?.to !== '' ? `&to=${filterValue?.to}` : ''
    }
    `
  )
  return data
}

export const getTerminalsData = async (pathUrl: string, count: number) => {
  const { data } = await axiosInstance.get(`/${pathUrl}?count=${count}&cursor`)
  return data
}

export const getTerminalsRequestsData = async (
  pathUrl: string,
  count: number
) => {
  const { data } = await axiosInstance.get(`/${pathUrl}?count=${count}&cursor`)
  return data
}

// ${
//   filterValue?.channel !== '' ? `&channel=${filterValue?.channel}` : ''
// }
