import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'

const useDeactivateCustomer = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()
  const deactivateBusiness = (id: string) => {
    return postRequest({
      pathUrl: `business/${id}/deactivate`,
      methodType: 'patch',
    })
  }

  return useMutation(deactivateBusiness, {
    onSuccess: () => {
      queryClient.invalidateQueries('customer-detail')
      setShow(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useDeactivateCustomer
