import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useRequeryTransactions = (payload: string[]) => {
  const queryClient = useQueryClient()

  const requeryTransactions = () => {
    return postRequest({
      pathUrl: '/transactions/requery',
      payload: { transactionIds: payload },
      methodType: 'post',
    })
  }

  return useMutation({
    mutationFn: requeryTransactions,
    mutationKey: ['transaction', payload.toString()],
    onSuccess: () => {
      queryClient.invalidateQueries(['transaction', payload.toString()])
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })
}

export default useRequeryTransactions
