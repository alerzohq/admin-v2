import styled from 'styled-components/macro'

type stackProps = {
  width: string
  padding: string
  bgColor: string
  pr: string
  pt: string
  pb: string
  pl: string
  direction: string
  alignItems: string
  justifyContent: string
  gap: string
  minDirection: string
  flexWrap?: string
  rowGap?: string
  columnGap?: string
  borderBottom?: string
  borderTop?: string
  borderLeft?: string
  borderRight?: string
  border?: string
  borderRadius?: string
  boxShadow?: string
  cursor?: string
  transition?: string
  overflow?: string
  height?: string
}

export const StackWrapper = styled.div<stackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  width: ${({ width }) => (width ? width : '100%')};
  padding: ${({ padding }) => padding};
  padding-top: ${({ pt }) => pt};
  padding-right: ${({ pr }) => pr};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-top: ${({ borderTop }) => borderTop};
  border-left: ${({ borderLeft }) => borderLeft};
  border-right: ${({ borderRight }) => borderRight};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ bgColor }) => bgColor};
  cursor: ${({ cursor }) => cursor};
  transition: ${({ transition }) => transition};
  overflow: ${({ overflow }) => overflow};
  height: ${({ height }) => height};
  @media (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
    }
    flex-direction: ${({ minDirection }) => minDirection};
  }
`
