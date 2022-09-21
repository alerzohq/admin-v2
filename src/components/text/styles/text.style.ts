import styled from 'styled-components'

type textProps = {
  color?: string
  size?: string
  weight?: string
  padding?: string
  margin?: string
  align?: string
  width?: string
  opacity?: string
  bgColor?: string
  cursor?: string
  radius?: string
  textAlign?: string
  whiteSpace?: string
  justifyContent?: string
  visibility?: string;
}

export const TextStyle = styled.div<textProps>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  text-align: ${({ align }) => align};
  max-width: ${({ width }) => width};
  opacity: ${({ opacity }) => opacity};
  background: ${({ bgColor }) => bgColor};
  visibility: ${({ visibility}) => visibility};
  border-radius: ${({ radius }) => radius || '5px'};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ textAlign }) => textAlign};
  justify-content: ${({ justifyContent }) => justifyContent};
`
