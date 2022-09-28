export type SelectInputProps =
  | {
      value: string
      label: string
    }
  | null
  | undefined

export type filterProps = {
  count: number
  pageNumber: number
  status?: string
  from?: string
  to?: string
  query?: string
  channel?: string
}
