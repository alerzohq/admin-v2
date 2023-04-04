import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useResetSecurityQst = (
  setSuccess?: React.Dispatch<React.SetStateAction<boolean>>,
  setShow?: React.Dispatch<React.SetStateAction<boolean>>,
  setReset?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()
  const resetBusiness = (id: string) => {
    return postRequest({
      pathUrl: `business/${id}/reset-security-question`,
      methodType: 'patch',
    })
  }

  return useMutation(resetBusiness, {
    onSuccess: () => {
      queryClient.invalidateQueries('businesses-detail')
      setSuccess?.(true)
      setShow?.(false)
      setReset?.(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useResetSecurityQst
