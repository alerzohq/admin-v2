import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

const useUpgradeUser = (phoneNumber: any, documentNumber: string) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL

  const handleUpgradeUser = () => {
    return postRequest({
      pathUrl: `${BASE_URL}/kyc/upgrade/2?phoneNumber=${phoneNumber}`,
      payload: { documentNumber },
      methodType: 'post',
    })
  }

  const { mutate, isLoading } = useMutation(handleUpgradeUser, {
    onSuccess: ({ data }) => {
      toast.success('User upgraded to Tier 2 successfully!')
    },
    onError: (error) => {
      toast.error(errorMessage(error))
    },
  })

  return { mutate, isLoading }
}

export default useUpgradeUser
