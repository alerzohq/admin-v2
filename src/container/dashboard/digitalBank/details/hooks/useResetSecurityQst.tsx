import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../../utils/apiRequest'
import { errorMessage } from '../../../../../utils/message'

const useResetSecurityQst = (
  setSuccess?: React.Dispatch<React.SetStateAction<boolean>>,
  setShow?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()
  const customerReset = (id: string) => {
    return postRequest({
      pathUrl: `customer/${id}/reset-security-question`,
      methodType: 'patch',
    })
  }

  return useMutation(customerReset, {
    onSuccess: () => {
      queryClient.invalidateQueries('customer-detail')
      setSuccess?.(true)
      setShow?.(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useResetSecurityQst
