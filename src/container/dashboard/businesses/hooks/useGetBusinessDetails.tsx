import { useQuery } from 'react-query'

import { getResource } from '../../../../utils/apiRequest'

const useGetBusinessDetails = (id: string) => {
  const getBusinessDetails = (id: string) => {
    return getResource(`businesses?id=${id}`)
  }

  return useQuery(['businesses-detail', id], () => getBusinessDetails(id))
}

export default useGetBusinessDetails
