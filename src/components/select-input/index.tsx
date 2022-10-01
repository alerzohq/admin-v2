import React from 'react'
import Select from 'react-select'
import { styles } from './styles/select-input.styes'
import { SelectProps } from './styles/type'

const SelectInput = ({
  placeholder,
  options,
  value,
  styles,
  placeholderStyle,
  isClearable,
  hideValue,
  onChange,
}: SelectProps) => {
  console.log(options, hideValue, 'opt', 'cleae')
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
      styles={styles ? styles : styles()}
      isClearable={isClearable}
      controlShouldRenderValue={!hideValue}
      placeholder={
        <div className={placeholderStyle || 'select-placeholder'}>
          {placeholder}
        </div>
      }
    />
  )
}

export default SelectInput
