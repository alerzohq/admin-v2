import React from 'react'
// import { options } from '../../data/select-data'
import {
  FormContainer,
  Group,
  Control,
  Label,
  Tags,
  Error,
  Footer,
  Input,
  Select,
} from './styles/form.style'
import { FormProps, InputProps, SelectProps } from './type'

const Form = ({ children, ...restProps }: FormProps) => {
  return <FormContainer {...restProps}>
    {children}
    </FormContainer>
}

export default Form

Form.Group = function FormGroup({ children, ...restProps }: FormProps) {
  return <Group {...restProps}>{children}</Group>
}
Form.Control = function FormControl({ children, ...restProps }: FormProps) {
  return <Control {...restProps}>{children}</Control>
}

Form.Input = function FormInput({
  Icon,
  inputPadding,
  onChange,
  ...restProps
}: InputProps) { 
  return (
    <Input inputPadding={inputPadding}>
      {Icon && <Icon />} <input onChange={onChange} {...restProps} />
    </Input>
  )
}

Form.Label = function FormLabel({ children, ...restProps }: FormProps) {
  return <Label {...restProps}>{children}</Label>
}

Form.Error = function FormError({ children, ...restProps }: FormProps) {
  return <Error {...restProps}>{children}</Error>
}

Form.Footer = function FormFooter({ children, ...restProps }: FormProps) {
  return <Footer {...restProps}>{children}</Footer>
}

Form.Tags = function FormTags({ children, ...restProps }: FormProps) {
  return <Tags {...restProps}>{children}</Tags>
}
Form.Select = function FormSelect({
  children,
  onChange,
  options,
  ...restProps
}: SelectProps) {
  return (
    <Select>
      <select onChange={onChange} {...restProps}>
        {options?.map((option, i) => (
          <option key={i} disabled={option?.disabled} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </Select>
  )
}
