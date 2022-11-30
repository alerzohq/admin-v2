export type FilterProps = {
  showFilters: {
    search?: {
      type: string
      placeholder: string
      onChange?: (e?: string) => void
      customChange?: boolean
    }
    date?: boolean
    selects?: {
      values: options
      placeholder: string
      onChange?: () => void
      value: string
      query: 'search' | 'status' | 'allPlatform' | 'variant'
    }[]
    buttons?: {
      buttonClass: string
      label: string
      onClick: () => void
      buttonClass?: string
    }[]
  }
  isFetching?: boolean
  setFilterValues?: any
  routePath?: string
  justifyContent?: string
}
