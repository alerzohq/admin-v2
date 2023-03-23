import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useResetSecurityQst = (
  setShow?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()
  const deactivateBusiness = (id: string) => {
    return postRequest({
      pathUrl: `business/${id}/reset-security-question`,
      methodType: 'patch',
    })
  }

  return useMutation(deactivateBusiness, {
    onSuccess: () => {
      queryClient.invalidateQueries('businesses-detail')
      setShow?.(true)
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useResetSecurityQst
