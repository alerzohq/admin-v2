import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast'

import { useMutation, useQueryClient } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

type useReversalProps = {
  setShowSuccess: Dispatch<SetStateAction<boolean>>
  setValue: Dispatch<SetStateAction<string>>
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}
const useReversalMutation = ({
  setShowModal,
  showModal,
  setValue,
  setShowSuccess,
}: useReversalProps) => {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: { [key: string]: any }) =>
      postRequest({
        pathUrl: '/reverse-transactions',
        payload,
        methodType: 'post',
      }),
    {
      onSuccess: (data) => {
        if (data?.message === 'Transactions reversed with some errors') {
          setShowModal(!showModal)
          setValue('')
          toast.error('Transactions reversed with some errors')
        } else {
          queryClient.invalidateQueries('transactions')
          setShowSuccess(true)
          setShowModal(!showModal)
        }
      },
      onError: (error: any) => {
        toast.error(errorMessage(error))
      },
    }
  )
}

export default useReversalMutation
