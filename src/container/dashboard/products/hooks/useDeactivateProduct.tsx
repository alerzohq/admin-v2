import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useDeactivateProduct = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  slug: string | any,
  otp: string
) => {
  const queryClient = useQueryClient()
  const deactivateProduct = () => {
    return postRequest({
      pathUrl: `products/${slug}/deactivate`,
      payload: { otp },
      methodType: 'patch',
    })
  }

  return useMutation(deactivateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('product-detail')
      setShow(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useDeactivateProduct
