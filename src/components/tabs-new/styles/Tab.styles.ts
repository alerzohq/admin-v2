import styled from 'styled-components'
import { Color } from '../../../assets/theme'

export const TabButton = styled.button`
  margin-right: 1rem;
  color: ${Color.alerzoBlack};
  font-weight: 600;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &[data-active='true'] {
    border-bottom: 2px solid #0077ff;
    color: ${Color.alerzoBlueTint};
  }
`
export const TabLinksContainer = styled.div`
  background: ${Color.alerzoGray3};
  border-radius: 5px;
  box-shadow: 0px 6px 60px rgba(0, 0, 0, 0.04);
  border-radius: 9px;
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  cursor: pointer;
`
