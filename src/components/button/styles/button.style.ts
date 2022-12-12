import styled from 'styled-components'
import { Color } from '../../../assets/theme'

type Props = {
  disabled?: boolean
  width?: string
  variant?: string
  height?: string
  color?: string
  borderColor?: string
  borderSize?: string
  weight?: string
  fontSize?: string
  noborder?: boolean
  align?: string
  gap?: string
  margin?: string
  radius?: string
  disabledColor?: string
  disabledBgColor?: string
}

export const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ disabled, disabledBgColor }) =>
    disabled
      ? disabledBgColor || Color.alerzoLightBlue
      : ({ variant }) => (variant ? variant : Color.alerzoBlue)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '3rem')};
  color: ${({ color, disabled, disabledColor }) =>
    disabled
      ? disabledColor || Color.alerzoWhite
      : color
      ? color
      : `${Color.alerzoWhite}`};
  border: ${({ borderColor, borderSize }) =>
    borderColor
      ? `${borderSize ? borderSize : '2px'} solid ${borderColor}`
      : '2px solid transparent'};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ radius }) => (radius ? radius : '.4rem')};
  font-weight: ${({ weight }) => weight};
  transition: background-color 0.5s linear;
  font-family: 'Gilmer';
  margin: ${({ margin }) => margin};
  gap: 0.2rem;
`

export const Group = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  width: ${({ width }) => (width ? width : '100%')};
  gap: ${({ gap }) => (gap ? gap : '.5rem')};
  flex-wrap: wrap;
  margin: ${({ margin }) => margin};
`
