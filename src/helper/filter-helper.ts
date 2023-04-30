type FilterOptions = { [key: string]: any }

export const platformFiltersOptions = (appfilters: FilterOptions) => {
  let transformFilters = appfilters?.filters?.[1]?.dropdown
  return transformFilters?.map((filter: FilterOptions) => {
    let { label, value } = filter
    return { label, value }
  })
}

export const statusFilterOptions = (appfilters: FilterOptions) => {
  let transformFilters = appfilters?.filters?.[0]?.dropdown
  return transformFilters?.map((filter: FilterOptions) => {
    let { label, value } = filter
    return { label, value }
  })
}
export const billerFilterOptions = (appfilters: FilterOptions) => {
  let transformFilters = appfilters?.filters?.[2]?.dropdown
  return transformFilters?.map((filter: FilterOptions) => {
    let { label, value } = filter
    return { label, value }
  })
}

export const productFilterOptions = (appfilters: FilterOptions) => {
  let transformFilters = appfilters?.filters?.[3]?.dropdown
  return transformFilters?.map((filter: FilterOptions) => {
    let { label, value } = filter
    return { label, value }
  })
}

export const employeFilterOptions = (appfilters: FilterOptions) => {
  let transformFilters = appfilters?.filters?.[0]?.dropdown
  return transformFilters?.map((filter: FilterOptions) => {
    let { label, value } = filter
    return { label, value }
  })
}

export const terminalReqFilterOptions = (appfilters: FilterOptions) => {
  let transformFilters = appfilters?.filters?.[0]?.dropdown
  return transformFilters?.map((filter: FilterOptions) => {
    let { label, value } = filter
    return { label, value }
  })
}
