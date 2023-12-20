import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useUpdateBusinessOwnerInfo = (otp: string, inputValues: any) => {
  const nonEmptyValues = Object.fromEntries(
    Object.entries(inputValues).filter(([_, value]) => value !== '')
  )
  const queryClient = useQueryClient()
  const updateBusinessOwnerInfo = (id: string | any) => {
    return postRequest({
      pathUrl: `business/${id}/owner`,
      payload: { ...nonEmptyValues, otp },
      methodType: 'patch',
    })
  }

  return useMutation(updateBusinessOwnerInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('businesses-detail')
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useUpdateBusinessOwnerInfo
