import { ButtonContainer } from './styles/button.style'
export type ButtonProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  width?: string
  variant?: string
  height?: string
  weight?: string
  radius?: string
  fontSize?: string
  borderSize?: string
  color?: string
  backgroundColor?: string
  position?: string
  noborder?: boolean
  margin?: string
  fontWeight?: string
  default?: string
  padding?: string
  borderColor?: string
  loading?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type ButtonGroupProps = {
  children: React.ReactNode
  align?: string
  gap?: string
  width?: string
  margin?: string
}
