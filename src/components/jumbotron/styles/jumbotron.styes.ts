import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
  direction: string
  bgColor?: string
  width?: string
  position?: string
  padding?: string
  justifyContent?: string
  socialPosition?: string
  minHeight?: string
  alignItems?: string
  margin?: string
  gap?: string
  flex?: string
  mt?: string
  responsiveDirection?: string
  overflow?: string
}

export const Container = styled.div<Props>`
  background: ${({ bgColor }) => (bgColor ? bgColor : Color.alerzoWhite)};
  width: 100%;
  border-radius: 20px;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  overflow: hidden;
  min-height: ${({ minHeight }) => minHeight};
  align-items: ${({ alignItems }) => alignItems};
`

export const JumbotronItem = styled.div<Props>`
  display: flex;
  background: ${({ bgColor }) => (bgColor ? bgColor : Color.alerzoWhite)};
  border-radius: 20px;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: ${({ padding }) => (padding ? padding : '2rem')};
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  margin-top: ${({ mt }) => mt || '2rem'};
  min-height: ${({ minHeight }) => minHeight || '300px'};
  border: 1px solid ${Color.alerzoGrayBorder};
  width: ${({ width }) => width ?? 'auto'};
  overflow: ${({ overflow }) => overflow};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Inner = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  width: 100%;
  margin: ${({ margin }) => margin};
  @media (max-width: 768px) {
    flex-direction: ${({ responsiveDirection }) => responsiveDirection  || "column"};
    justify-content: center;
  }
`

export const Pane = styled.div<Props>`
  width: ${({ width }) => (width ? width : '45%')};

  p {
    line-height: 1.7;
    padding-right: 2rem;
    padding-top: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    p {
      padding-right: 0;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`
