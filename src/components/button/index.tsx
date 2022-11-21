import React from 'react'
import { Color } from '../../assets/theme'
import Loader from '../loader'

import { ButtonContainer, Group } from './styles/button.style'
import { ButtonGroupProps, ButtonProps } from './type'

const Button = ({ loading, children, ...restProps }: ButtonProps) => {
  return (
    <ButtonContainer {...restProps}>
      {loading ? <Loader color={Color.alerzoWhite}/> : children}
    </ButtonContainer>
  )
}

export default Button

Button.Group = function ButtonGroup({
  children,
  ...restProps
}: ButtonGroupProps) {
  return <Group {...restProps}>{children}</Group>
}
