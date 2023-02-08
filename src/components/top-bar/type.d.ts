export type TopBarProps = {
  title: string
  showFilters: {
    search: { type: string; placeholder: string }
    tidSearch: { type: string; placeholder: string }
    refSearch: { type: string; placeholder: string }
    date: boolean
    selects: {
      searchQuery?: string
      shouldSetQuery?: boolean
      values: any[]
      placeholder: string
      onChange: () => void
      value: string
    }[]
    buttons: {
      label: string
      buttonClass?: string
      onClick: () => void
    }[]
  }

  isFetching?: boolean
  setFilterValues?: any
  routePath?: () => string | string
  whiteSpace?: string
  withParams?: boolean
}
