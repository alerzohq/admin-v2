export type SelectProps = {
  placeholder?: string
  placeholderStyle?: string
  isClearable?: boolean
  options?: {}[]
  onChange: (e: any, a: any) => void
  value: SelectInputProps
  styles?: StylesConfig<Coptions>
  hideValue?: boolean
  maxWidth?: string
  fullWidth?: boolean
  disabled?: boolean
  isSearchable?: boolean
  onInputChange?: (e: any, a: any) => void
}
