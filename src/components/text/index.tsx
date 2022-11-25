import React from 'react'
import { TextStyle } from './styles/text.style'
import { TextProps } from './type'

const Text = <E extends React.ElementType = 'div'>({
  color,
  justifyContent,
  weight,
  width,
  align,
  margin,
  textAlign,
  padding,
  bgColor,
  size,
  radius,
  opacity,
  children,
  whiteSpace,
  visibility,
  as,
  lineHeight,
  alignSelf,
  height,
  className,
}: TextProps<E>) => {
  let Component = as || 'div'
  return (
    <TextStyle
      justifyContent={justifyContent}
      whiteSpace={whiteSpace}
      margin={margin}
      radius={radius}
      opacity={opacity}
      textAlign={textAlign}
      visibility={visibility}
      color={color}
      width={width}
      align={align}
      size={size}
      bgColor={bgColor}
      weight={weight}
      padding={padding}
      alignSelf={alignSelf}
      height={height}
      className={className}
    >
      <Component>{children}</Component>
    </TextStyle>
  )
}

export default Text
