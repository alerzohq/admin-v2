import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useUpdateCommission = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  billerSlug:string
) => {
  const queryClient = useQueryClient()

  const updateBiller = (payload:Record<string,any>) => {
    return postRequest({
      pathUrl: `products/${billerSlug}/commissions?billerSlug=${billerSlug}`,
      methodType: 'patch',
      payload
    })
  }

  return useMutation(updateBiller, {
    onSuccess: () => {
      queryClient.invalidateQueries('biller-detail')
      setShow(true)
      setShowModal(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error as ErrorType))
    },
  })
}

export default useUpdateCommission