import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type contentStyleProps = {
  isCollapsed?: boolean
}

export const ContentWrapper = styled.div<contentStyleProps>`
  margin-left: ${({ isCollapsed }) => (isCollapsed ? '6.1rem' : '17rem')};
  transition: all 0.3s ease;
  background: ${Color.alerzoWhite};
  min-height: 100vh;
  @media (max-width: 992px) {
    margin-left: 0;
  }
`
