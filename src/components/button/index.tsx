import React from 'react'

import { ButtonContainer, Group } from './styles/button.style'
import { ButtonGroupProps, ButtonProps } from './type'

const Button = ({ children, ...restProps }: ButtonProps) => {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

export default Button

Button.Group = function ButtonGroup({
  children,
  ...restProps
}: ButtonGroupProps) {
  return <Group {...restProps}>{children}</Group>
}
