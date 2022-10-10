import { FormContainer } from './styles/form.style'

export type FormProps = React.ComponentProps<typeof FormContainer>

export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputPadding?: string
  Icon?: React.JSXElement
} & React.ComponentProps<'input'>
