import Select, { components, PlaceholderProps } from 'react-select'
import { SelectProps } from './styles/type'
import { selectStyles } from './styles/select-input.styes'

const SelectInput = ({
  placeholder,
  options,
  value,
  styles,
  placeholderStyle,
  isClearable,
  hideValue,
  fullWidth,
  maxWidth,
  onChange,
  disabled,
  onInputChange,
}: SelectProps) => {
  const Placeholder = (props: PlaceholderProps) => {
    return <components.Placeholder {...props} />
  }

  return (
    <Select
      components={{ Placeholder, IndicatorSeparator: () => null }}
      classNamePrefix="react-select"
      id="long-value-select"
      instanceId="long-value-select"
      defaultValue={value}
      onChange={onChange}
      options={options}
      onInputChange={onInputChange}
      styles={styles ? styles : selectStyles(false, fullWidth, maxWidth)}
      isClearable={isClearable}
      controlShouldRenderValue={!hideValue}
      placeholder={
        <div className={placeholderStyle || 'select-placeholder'}>
          {placeholder}
        </div>
      }
      isDisabled={disabled}
    />
  )
}

export default SelectInput
