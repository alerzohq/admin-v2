import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'
import { ValueProps } from '../type'

type InitialStateProps = {
  comments: string
  status: string
  reason: string
}
const useUpdateKYC = (
  id: string,
  setValue: React.Dispatch<React.SetStateAction<ValueProps>>,
  initialState: InitialStateProps,
  toggle: () => void
) => {
  const queryClient = useQueryClient()
  const updateKYC = (payload: { [key: string]: any }) => {
    return postRequest({
      pathUrl: `kyc/verifications/${id}`,
      payload,
      methodType: 'patch',
    })
  }

  return useMutation(updateKYC, {
    onSuccess: () => {
      toggle()
      toast.success(`KYC updated successfully`)
      queryClient.invalidateQueries('kyc-detail')
      setValue(initialState)
    },
    onError: (err: ErrorType) => {
      toggle()
      toast.error(`${errorMessage(err)}`)
      setValue(initialState)
    },
  })
}

export default useUpdateKYC
