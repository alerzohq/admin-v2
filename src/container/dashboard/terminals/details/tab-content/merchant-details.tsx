import { merchantHelper } from '../../../../../data/terminal-data'
import DetailsContentWidget from '../../../widget/tabs/tab-content-details'

import { TerminalDetailWrapper } from './styles/tab-content.styles'
import { getResource } from '../../../../../utils/apiRequest'
import { useQuery } from 'react-query'
import { FallBack } from '../../../../../components'
import { errorMessage } from '../../../../../utils/message'

const MerchantDetails = ({ resolvedData }: any) => {
  const getMerchantDetails = () => {
    return getResource(`businesses?id=${resolvedData.user_id}`)
  }

  const {
    isError,
    data: merchantDetails,
    error,
    refetch,
  } = useQuery('merchant-details', getMerchantDetails, {
    enabled: resolvedData.user_id !== '',
  })

  return (
    <TerminalDetailWrapper>
      {merchantDetails?.data[0] && (
        <DetailsContentWidget
          resolvedData={merchantHelper(merchantDetails.data[0])!}
        />
      )}
      {isError && (
        <FallBack error refetch={refetch} title={`${errorMessage(error)}`} />
      )}
    </TerminalDetailWrapper>
  )
}

export default MerchantDetails
