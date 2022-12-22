import { filterProps } from '../@types'
import {
  axiosInstance,
  axiosInstanceWithoutToken,
} from '../configs/axios-instance'
import queryString from 'query-string'
type Methods = 'put' | 'post' | 'patch' | 'delete'
type useMutationProps = {
  pathUrl: string
  methodType: Methods
  payload: { [key: string]: any }
}
export const getResource = async (pathUrl: string, withoutToken?: boolean) => {
  const { data } = withoutToken
    ? await axiosInstanceWithoutToken.get(`/${pathUrl}`)
    : await axiosInstance.get(`/${pathUrl}`)
  return data
}
export const getNewFilterResource = async (
  pathUrl: string,
  filterValue: filterProps & { [key in string]?: string | number },
  hasArg?: boolean
) => {
  const filterQuery = queryString.stringify(filterValue, {
    skipNull: true,
    skipEmptyString: true,
  })
  const { data } = await axiosInstance.get(
    `/${pathUrl}${hasArg ? '' : '?'}${filterQuery}`
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

export const postRequest = async ({
  pathUrl,
  payload,
  methodType,
}: useMutationProps) => {
  const { data } = await axiosInstance[methodType](pathUrl, payload)
  return data
}
