import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useActivateBusinessProduct = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  slug: string,
  otp: string
) => {
  const queryClient = useQueryClient()
  const activateBusinessProduct = (id: string) => {
    return postRequest({
      pathUrl: `business/${id}/products/${slug}/activate`,
      payload: { otp },
      methodType: 'patch',
    })
  }

  return useMutation(activateBusinessProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('business-products')
      setShow(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error as ErrorType))
    },
  })
}

export default useActivateBusinessProduct
