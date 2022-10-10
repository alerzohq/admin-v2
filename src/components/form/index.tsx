import React from 'react'
import {
  FormContainer,
  Group,
  Control,
  Label,
  Tags,
  Error,
  Footer,
  Input,
} from './styles/form.style'
import { FormProps, InputProps } from './type'

const Form = ({ children, ...restProps }: FormProps) => {
  return <FormContainer {...restProps}>{children}</FormContainer>
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
