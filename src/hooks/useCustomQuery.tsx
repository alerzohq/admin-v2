
import { useQuery } from 'react-query'

type queryProps = {
  onSuccess?: () => void
  onError?: () => void
  func: () => void
  name?: string
}

export const useCustomQuery = ({
  name,
  onSuccess,
  onError,
  func,
}: queryProps) => {
  return useQuery(`${name}`, func, {
    onSuccess,
    onError,
  })
}
