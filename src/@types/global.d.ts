export type SelectOptions = {
  value: string
  label: string
}

export type SelectInputProps =
  | {
      value: string
      label: string
    }
  | null
  | undefined

export type FilterValueProps = {
  count: number
  pageNumber: number
  status?: string
  from?: string
  to?: string
  query?: string
  channel?: string
  userId?: string
  billerSlug?: string
  productSlug?: string
}

declare global {
  interface FilterProps {
    count: number
    pageNumber: number
    status?: string
    from?: string
    to?: string
    query?: string
    channel?: string
    userId?: string
    billerSlug?: string
    productSlug?: string
  }

  interface ResponseType {
    data: Record<string, string>
    status: number
  }
  interface ErrorType {
    message: string
    response: ResponseType
  }
}
