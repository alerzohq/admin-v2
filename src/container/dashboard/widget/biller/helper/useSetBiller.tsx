import React from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { axiosInstance } from '../../../../../configs/axios-instance'

const useSetBiller = (slug:string, setShow: React.Dispatch<React.SetStateAction<boolean>>) => {

    const queryClient = useQueryClient()

    const setBillerThreshold = async (payload: {}) => {
        return axiosInstance.patch(`billers/${slug}`, payload)
      }
    
     return useMutation(setBillerThreshold, {
        onSuccess: () => {
          queryClient.invalidateQueries('billers');      
          setShow(false)
          toast.success('Threshold set successfully');
        },
        onError: () => {
          toast.error('Failed to set threshold')
        },
      })
}

export default useSetBiller