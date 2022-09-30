export type FilterProps = {
  showFilters: {
    search: { type: string; placeholder: string }
    date: boolean
    selects: {
      values: options
      placeholder: string
      onChange: () => void
      value: string
    }[]
    buttons: {
      buttonClass: string
      label: string
      onClick: () => void
      buttonClass?: string
    }[]
  }
  isFetching?: boolean
  setFilterValues?: any
  routePath?: string
}
