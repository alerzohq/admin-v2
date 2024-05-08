import { useQuery } from 'react-query'

import { getResource } from '../../../../utils/apiRequest'

const useGetRoles = () => {
  const getRoles = () => {
    return getResource('roles')
  }
  return useQuery('roles', getRoles)
}

export default useGetRoles
