export type FallbackProps = {
  title: string
  error?: boolean
  hideBtn?: boolean
  routeLink?: string | undefined
  btnText?: string
  description?: string
  refetch?: () => void
}
