import { FormContainer } from './styles/form.style'

export type FormProps = React.ComponentProps<typeof FormContainer>

export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  Icon?: React.JSXElement
} & React.ComponentProps<'input'>

export type SelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options:
    | { value: string | number; label: string | number; disabled?: boolean }[]
    | []
} & React.ComponentProps<'select'>
