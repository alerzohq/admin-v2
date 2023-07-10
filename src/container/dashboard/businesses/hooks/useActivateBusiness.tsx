import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useActivateBusiness = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()

  const activateBusiness = (id: string) => {
    return postRequest({
      pathUrl: `business/${id}/activate`,
      methodType: 'patch',
    })
  }

  return useMutation(activateBusiness, {
    onSuccess: () => {
      queryClient.invalidateQueries('businesses-detail')
      setShow(false)
    },
    onError: (error) => {
      toast.error(errorMessage(error as ErrorType))
    },
  })
}

export default useActivateBusiness
