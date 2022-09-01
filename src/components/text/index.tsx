import React from 'react'
import { TextStyle } from './styles/text.style'
import { TextProps } from './type'


const Text = <E extends React.ElementType='div'>({color,weight, width, align, margin, padding,bgColor, size, opacity, children,as} : TextProps<E>) => {
    let Component = as || 'div'
  return (
     <TextStyle margin={margin} opacity={opacity} color={color} width={width} align={align} size={size} bgColor={bgColor} weight={weight} padding={padding}>
          <Component>{children}</Component>
     </TextStyle>
  )
}

export default Text