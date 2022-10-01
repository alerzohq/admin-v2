import React, { useEffect, useState } from 'react'
import { FilterProps } from './type'
import DateRange from '../date-range'
import Stack from '../stack'
import { SelectInputProps } from '../../@types'
import SelectInput from '../select-input'
import { FilterInput, FilterItems, FilterWrapper } from './styles/filter.styles'

const Filter = ({ showFilters, setFilterValues }: FilterProps) => {
  const [status] = useState<SelectInputProps>(null)
  const [values, setValues] = useState({
    search: '',
    status: '',
    allPlatform: '',
  })

  const { search } = values

  useEffect(() => {
    if (showFilters) {
      setFilterValues?.((prev: any) => ({ ...prev, query: search }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status])

  return (
    <FilterWrapper>
      <Stack justifyContent={'space-between'} direction={'row'}>
        <FilterItems>
          {showFilters?.search && (
            <FilterInput
              value={search}
              onChange={(e: any) => {
                setValues({ ...values, search: e.target.value })
              }}
              placeholder={showFilters.search.placeholder}
            />
          )}
          {showFilters?.date && (
            <DateRange isTop filterDate={setFilterValues && setFilterValues} />
          )}
          {showFilters?.selects?.length >= 1 &&
            showFilters.selects.map((select, i) => (
              <SelectInput
                key={i}
                placeholder={select.placeholder}
                onChange={select.onChange}
                value={select.value}
                options={select.values}
                isClearable
              />
            ))}
          {showFilters?.buttons?.length >= 1 &&
            showFilters.buttons.map((button, i) => (
              <button
                key={i}
                onClick={button.onClick}
                className={button?.buttonClass || 'download-btn'}
              >
                {button.label}
              </button>
            ))}
        </FilterItems>
      </Stack>
    </FilterWrapper>
  )
}

export default Filter
