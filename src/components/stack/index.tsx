import React from 'react'
import { StackWrapper } from './styles/stack.styles'
import { StackProps } from './type'

const Stack = ({ children, ...restProps }: StackProps) => {
  return <StackWrapper {...restProps}>{children}</StackWrapper>
}

export default Stack
