
import {
  axiosInstance,
  axiosInstanceWithoutToken,
} from '../configs/axios-instance'
import queryString from 'query-string'
type Methods = 'put' | 'post' | 'patch' | 'delete'
type useMutationProps = {
  pathUrl: string
  methodType: Methods
  payload?: { [key: string]: any }
}

export const getResource = async (pathUrl: string, withoutToken?: boolean) => {
  const { data } = withoutToken
    ? await axiosInstanceWithoutToken.get(`/${pathUrl}`)
    : await axiosInstance.get(`/${pathUrl}`)
  return data
}
export const getNewFilterResource = async (
  pathUrl: string,
  filterValue: FilterProps & { [key in string]?: string | number },
  hasArg?: boolean
) => {
  const filterQuery = queryString.stringify(filterValue, {
    skipNull: true,
    skipEmptyString: true,
  })
  const formatedFilter =
    filterQuery.indexOf('%20') === filterQuery.length - 3
      ? filterQuery.replace(/%20/g, '')
      : filterQuery
  const { data } = await axiosInstance.get(
    `/${pathUrl}${hasArg ? '' : '?'}${formatedFilter}`
  )
  return data
}

export const getTerminalsData = async (pathUrl: string, count: number) => {
  const { data } = await axiosInstance.get(`/${pathUrl}?count=${count}&cursor`)
  return data
}

export const getTerminalsRequestsData = async (
  pathUrl: string,
  filterValue: FilterProps & { [key in string]?: string | number }
) => {
  const { data }: any = await axiosInstance.get(
    `/${pathUrl}?count=${filterValue.count}&cursor=&pageNumber=${
      filterValue.pageNumber + 1
    }`
  )
  return data
}

export const postRequest = async ({
  pathUrl,
  payload,
  methodType,
}: useMutationProps) => {
  const { data } = await axiosInstance[methodType](pathUrl, payload && payload)
  return data
}
