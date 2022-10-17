export type SelectProps = {
  placeholder?: string
  placeholderStyle?: string
  isClearable?: boolean
  options?: {}[]
  onChange: (e: any, a: any) => void
  value: SelectInputProps
  styles?: StylesConfig<Coptions>
  hideValue?: boolean
  fullWidth?: boolean
}
