import React from 'react'
import Select from 'react-select'
import { colourStyles } from './styles/select-input.styes'
import { SelectProps } from './styles/type'

const SelectInput = ({
  placeholder,
  options,
  value,
  styles,
  placeholderStyle,
  isClearable,
  onChange,
}: SelectProps) => {
  console.log(isClearable, 'cleae')
  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      classNamePrefix="react-select"
      id="long-value-select"
      instanceId="long-value-select"
      defaultValue={value}
      onChange={onChange}
      options={options}
      styles={styles ? styles :colourStyles}
      isClearable={isClearable}
      placeholder={<div className={placeholderStyle || "select-placeholder"}>{placeholder}</div>}
    />
  )
}

export default SelectInput
