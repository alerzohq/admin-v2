export type SelectProps = {
  placeholder?: string
  placeholderStyle?: string
  isClearable?:boolean
  options?: {}[]
  onChange: React.Dispatch<SetStateAction<any>>
  value: SelectInputProps
  styles?:StylesConfig<Coptions>
}
