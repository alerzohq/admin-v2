import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useSetCommission = (
  id: string,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()
  const setCommission = (payload: {}) => {
    return postRequest({
      pathUrl: `business/${id}/products/commission`,
      payload,
      methodType: 'patch',
    })
  }

  return useMutation(setCommission, {
    onSuccess: () => {
      queryClient.invalidateQueries('business-products')
      setShow(false)
      setShowSuccess(true)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useSetCommission
