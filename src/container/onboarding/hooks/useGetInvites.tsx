import { useQuery } from 'react-query'

import { getResource } from '../../../utils/apiRequest'

const useGetInvites = (id: string) => {
  const isValidInvite = (id?: string) => {
    return getResource(`members/invites/${id}`, true)
  }

  return useQuery('isValidId', () => isValidInvite(id), {
    enabled: !!id,
    retry: 1,
  })
}

export default useGetInvites
