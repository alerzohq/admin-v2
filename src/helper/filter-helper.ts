type FilterOptions={ [key: string]: any}

export const platformFiltersOptions=(appfilters:FilterOptions) => {
    let transformFilters =appfilters?.filters?.[1]?.dropdown
    return transformFilters?.map((filter:FilterOptions)=> {
        let {label, value} = filter;
        return {label, value};
    })
}

export const statusFilterOptions=(appfilters:FilterOptions) => {
    let transformFilters =appfilters?.filters?.[0]?.dropdown
    return transformFilters?.map((filter:FilterOptions)=> {
        let {label, value} = filter;
        return {label, value};
    })
}


