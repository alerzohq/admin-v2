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
  onChange,
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
      styles={styles ? styles : selectStyles(false, fullWidth)}
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
