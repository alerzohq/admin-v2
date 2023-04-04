import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useDeactivateBusinessProduct = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  slug: string | any,
  otp: string
) => {
  const queryClient = useQueryClient()
  const deactivateBusinessProduct = (id: string | any) => {
    return postRequest({
      //   pathUrl: `business/872c7d00-5202-46b4-83aa-8529c46d7daa/products/mtn-vtu/deactivate`,
      pathUrl: `business/${id}/products/${slug}/deactivate`,
      payload: { otp },
      methodType: 'patch',
    })
  }

  return useMutation(deactivateBusinessProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('business-product-detail')
      setShow(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useDeactivateBusinessProduct

