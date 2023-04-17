import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'
import { errorMessage } from '../../../../utils/message'

type IUpgradeUserProps = {
  userId: string
  userType: string
}

const useUpgradeUser = (
  userId: string,
  userType: string,
  documentNumber: string
) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL

  const handleUpgradeUser = () => {
    return postRequest({
      pathUrl: `${BASE_URL}/kyc/upgrade/2?userId=${userId}&userType=${userType}`,
      //   kyc/upgrade/2?userId=6d330f13-0881-4774-a4bc-f84724cc49d9&userType=business-user
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
