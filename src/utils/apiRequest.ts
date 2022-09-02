import { axiosInstance } from '../configs/axios-instance'

export const getResource = async(pathUrl: string)=>{
const {data} = await axiosInstance.get(`/${pathUrl}`)
  return data
}