import styled, { css } from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type tabProps = {
  active?: boolean
  activeColor?: string
  flexDirection?: string
  hideStatus?: boolean
}

export const Tabs = styled.div<tabProps>`
  display: flex;
  align-items: center;
  padding: ${({ hideStatus }) => (hideStatus ? '1rem 1.25rem' : '1em 2rem')};
  margin-bottom: 0.8em;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: ${({ hideStatus }) => (hideStatus ? 'none' : '1px solid #E8EBEE')};
  border-top: none;
  border-radius: 10px;
  background-color: ${({ hideStatus }) =>
    hideStatus ? Color.alerzoGray3 : Color.alerzoWhite};
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: 12px;
  gap: 70px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    height: 2px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid ${Color.alerzoGray};
  }
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
`
export const transition = css`
  transition: transform 0.4s;
`
export const TabContent = styled.div<tabProps>`
  width: 100%;
  display: flex;
`
export const TabLink = styled.button<tabProps>`
  color: ${({ color, active, activeColor }) => (active ? activeColor : color)};
  font-weight: 600;
  background-color: transparent;
  font-size: 14px;
  border: none;
  font-family: Gilmer;
  /* margin: 0 3em 0 2em; */

  cursor: pointer;
  padding: 0 0 0.3em 0;
  border-bottom: ${({ active }) =>
    active ? `3px solid ${Color.alerzoBlueTint}` : 'none'};
`
