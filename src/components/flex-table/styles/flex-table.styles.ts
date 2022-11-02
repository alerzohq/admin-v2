import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type columnProps = {
  width?: string
  flex?: string
  selfAlign?: string
  rbColor?: string
  leftRadius?: string
  rightRadius?: string
  bgColor?: string
  topLeftRadius?: string
  topRightRadius?: string
  bottomLeftRadius?: string
  bottomRightRadius?: string
  padding?: string
  showBorder?: boolean
  margin?: string
  showLeftBorder?: boolean
  clickable?: boolean
}
export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1em;
  background-color: white;
  border-radius: 12px;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: 12px;
  backdrop-filter: blur(4px);
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    height: 2px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid ${Color.alerzoGray};
  }
`
export const CardBorderWrapper = styled.div<columnProps>`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 1)};
  border-bottom: 1px solid #e8ebee;
  border-left: ${({ showLeftBorder }) =>
    showLeftBorder ? `1px solid ${Color.alerzoGrayBorder}` : 'none'};
  border-right: ${({ showBorder }) =>
    showBorder ? `1px solid ${Color.alerzoGrayBorder}` : 'none'};
  border-top-left-radius: ${({ topLeftRadius }) => topLeftRadius || '0'};
  border-top-right-radius: ${({ topRightRadius }) => topRightRadius || '0'};
  border-bottom-left-radius: ${({ bottomLeftRadius }) =>
    bottomLeftRadius || '0'};
  border-bottom-right-radius: ${({ bottomRightRadius }) =>
    bottomRightRadius || '0'};
`
export const CardContainer = styled.div<columnProps>`
  flex: ${({ flex }) => (flex ? flex : 1)};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const CardItem = styled.div<columnProps>`
  flex: ${({ flex }) => (flex ? flex : 1)};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-right: ${({ showBorder }) =>
    showBorder ? `1px solid ${Color.alerzoGrayBorder}` : 'none'};
  align-self: ${({ selfAlign }) => selfAlign};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : Color.alerzoGray3)};
  button {
    border: none;
    background-color: transparent;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
  }
`
