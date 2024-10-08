import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useUpdateBusinessInfo = (otp: string, inputValues: any) => {
  const nonEmptyValues = Object.fromEntries(
    Object.entries(inputValues).filter(([_, value]) => value !== '')
  )
  const queryClient = useQueryClient()
  const updateBusinessInfo = (id: string | any) => {
    return postRequest({
      pathUrl: `business/${id}/update`,
      payload: { ...nonEmptyValues, otp },
      methodType: 'patch',
    })
  }

  return useMutation(updateBusinessInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('businesses-detail')
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useUpdateBusinessInfo
