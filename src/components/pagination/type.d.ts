// import { filterProps } from '../../@types'

export type PaginationProps = {
  data: { [key: string]: any }
  initialPageCount?: number
  setPageNumber: React.Dispatch<
    React.SetStateAction<{
      count: number
      pageNumber: number
      status: string
      query: string
      biller: string
      product: string
      from: string
      to: string
    }>
  >
}
