import { merchantHelper } from '../../../../../data/terminal-data'
import DetailsContentWidget from '../../../widget/tabs/tab-content-details'

import { TerminalDetailWrapper } from './styles/tab-content.styles'
import { getResource } from '../../../../../utils/apiRequest'
import { useQuery } from 'react-query'
import { FallBack } from '../../../../../components'

const MerchantDetails = ({ resolvedData }: any) => {
  console.log(resolvedData)
  const getMerchantDetails = () => {
    return getResource(`businesses?id=${resolvedData.user_id}`)
  }

  const { isError, data: merchantDetails } = useQuery(
    'merchant-details',
    getMerchantDetails,
    {
      enabled: resolvedData.user_id !== '',
    }
  )

  return (
    <TerminalDetailWrapper>
      {merchantDetails?.data[0] && (
        <DetailsContentWidget
          resolvedData={merchantHelper(merchantDetails.data[0])!}
        />
      )}
      {isError && <FallBack title="Something went wrong" />}
    </TerminalDetailWrapper>
  )
}

export default MerchantDetails
