import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type sidebarStyleProps = {
  isCollapsed?: boolean
  padding?: string
  color?: string
  isShown?: boolean
  isActive?: boolean
}

export const SidebarWrapper = styled.div<sidebarStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${({ isCollapsed }) => (isCollapsed ? '6rem' : '15rem')};
  transition: all 0.3s ease;
  position: fixed;
  height: 100vh;
  z-index: 1;
  box-shadow: ${({ isCollapsed }) =>
    !isCollapsed ? Color.alerzoLightGray : 'none'};
  border-right: ${({ isCollapsed }) =>
    isCollapsed ? `0.8px solid ${Color.alerzoGrayBorder}` : 'none'};
  overflow: hidden;
  @media (max-width: 992px) {
    transform: translateX(-17rem);
  }
`
export const Inner = styled.div<sidebarStyleProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ isCollapsed }) => (isCollapsed ? '2rem 1rem' : '2rem ')};
  height: 100%;
  svg {
    cursor: pointer;
    margin: ${({ isCollapsed }) => (isCollapsed ? '0 auto' : '0')};
  }
  .logo {
    padding-left: 1rem;
  }
`

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  p {
    white-space: nowrap;
  }
`
export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  p {
    white-space: nowrap;
  }
`

export const SidebarItem = styled.div<sidebarStyleProps>`
  padding: ${({ padding }) => padding};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
  padding: 0.5rem;
  margin-bottom: 1rem;
  /* svg{
    padding-left:${({ isActive, isCollapsed }) =>
    isActive && isCollapsed ? `0` : '0rem'};
} */

  p {
    font-size: ${({ isActive }) => isActive && `1rem`};
    font-weight: ${({ isActive }) => isActive && `600`};
  }
  ${({ isActive }) =>
    isActive &&
    `
    display: flex;
    justify-content: center;
    color: ${Color.alerzoBlue};
    background: ${Color.alerzoBlue4};
    border-radius: 10px;
    flex-direction: column;
   
`}
`
export const SidebarDropdown = styled.div<sidebarStyleProps>`
  display: flex;
  flex-direction: column;
  max-height: ${({ isShown }) => (isShown ? '80px' : '0')};
  transition: max-height 0.2s ease;
  overflow: hidden;
`

export const DropdownItem = styled.div<sidebarStyleProps>`
  padding: 0.5rem;
  color: ${({ color }) => (color ? color : Color.alerzoLight)};
  padding-left: 2.5rem;
`

export const Profile = styled.div`
  background: ${Color.alerzoBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color.alerzoWhite};
  font-size: 0.8rem;
  font-weight: 600;
  margin: 1rem 0;
  cursor: pointer;
  text-transform: uppercase;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`
