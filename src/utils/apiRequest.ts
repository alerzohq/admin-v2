import { filterProps } from '../@types';
import { axiosInstance } from '../configs/axios-instance'



export const getResource = async(pathUrl:string)=>{
const {data} = await axiosInstance.get(`/${pathUrl}`)
  return data
}

// ${filterValue?.from !=='' ? `&from=${filterValue?.from}` : ""}${filterValue?.to !=='' ? `&to=${filterValue?.to}`:"" }

export const getFilterResource = async(pathUrl:string, filterValue:filterProps)=>{
  const {data} = await axiosInstance.get(`/${pathUrl}?count=${filterValue.count}&pageNumber=${filterValue.pageNumber}${filterValue?.query !== "" ? `&query=${filterValue?.query}` : ""}${filterValue?.status !=="" ? `&status=${filterValue?.status}` : ""}`)
    return data
  }