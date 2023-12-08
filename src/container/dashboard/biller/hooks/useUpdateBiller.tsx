import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useUpdateBiller = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient()

  const updateBiller = (payload: {
    email: string
    phoneNumber: string
    slug: string
  }) => {
    return postRequest({
      pathUrl: `biller/${payload.slug}`,
      methodType: 'patch',
      payload: { email: payload?.email, phoneNumber: payload?.phoneNumber },
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

export default useUpdateBiller
