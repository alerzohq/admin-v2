import React, { useState } from 'react'
import {
  AlerzoLogo,
  FavIcon,
  LogoutIcon,
  SettingsIcon,
} from '../../assets/icons'
import { Color } from '../../assets/theme'
import { SideBarMenus } from '../../data/sidebar-data'
import {
  SidebarWrapper,
  Inner,
  LogoBox,
  SidebarDropdown,
  DropdownItem,
  SidebarItem,
  SidebarList,
  SidebarFooter,
  Profile,
} from './styles/sidebar.styles'
import { sidebarMenuProp, sidebarProps } from './type'
import Text from '../text'
import { Link, useLocation } from 'react-router-dom'
import Stack from '../stack'
import { useAppContext } from '../../context'
import { logOut } from '../../utils/session-storage'
import { Action } from '../../context/actions'

const Sidebar = ({ isCollapsed, collapseBar }: sidebarProps) => {
  const location = useLocation()
  const [show, setShow] = useState<number | null>()
  const pathname = location?.pathname
  const {sideBarData} = SideBarMenus();


  const {
    state: { user },
    dispatch,
  } = useAppContext()

  const handleToggle = (index: number) => {
    if (show === index) {
      return setShow(null)
    }

    setShow(index)
  }
  const handleLogout = () => {
    logOut(() => {
      dispatch({ type: Action.LOGOUT })
    })
  }

  return (
    <SidebarWrapper isCollapsed={isCollapsed}>
      <Inner isCollapsed={isCollapsed}>
        <LogoBox>
          {isCollapsed ? (
            <FavIcon onClick={collapseBar} />
          ) : (
            <AlerzoLogo
              className={'logo'}
              onClick={collapseBar}
              height={'25'}
              width={'150'}
              color={Color.alerzoBlue}
            />
          )}
        </LogoBox>
        <SidebarList>
          {sideBarData.map(
            (
              {
                title,
                ActiveIcon,
                path,
                InActiveIcon,
                subMenu,
              }: sidebarMenuProp,
              i
            ) => (
              <SidebarItem
                isActive={path === pathname}
                isCollapsed={isCollapsed}
                key={i}
              >
                <Link to={path}>
                  <Stack
                    direction={'row'}
                    gap={'10px'}
                    alignItems={'center'}
                    onClick={() => {
                      handleToggle(i)
                    }}
                  >
                    <Stack
                      justifyContent={'center'}
                      width={'auto'}
                      alignItems={'center'}
                    >
                      {path === location.pathname ? (
                        <>{ActiveIcon && <ActiveIcon />}</>
                      ) : (
                        <>{InActiveIcon && <InActiveIcon />}</>
                      )}
                    </Stack>{' '}
                    {!isCollapsed && <Text as={'p'}>{title}</Text>}
                  </Stack>
                </Link>
                {subMenu?.map(({ name, subPath }:{name: string;subPath: string}) => (
                  <SidebarDropdown key={name} isShown={show === i}>
                    <Link to={subPath}>
                      <DropdownItem>{name}</DropdownItem>
                    </Link>
                  </SidebarDropdown>
                ))}
              </SidebarItem>
            )
          )}
        </SidebarList>
        <SidebarFooter>
          <SidebarItem>
            <Profile>
              {user?.data?.firstName?.charAt(0)}
              {user?.data?.lastName?.charAt(0)}
            </Profile>
            <Link to={''}>
              <Stack
                direction={'row'}
                padding={'0 0 1rem 0'}
                alignItems={'center'}
              >
                <Stack
                  justifyContent={'center'}
                  width={'auto'}
                  alignItems={'center'}
                >
                  <SettingsIcon />
                </Stack>{' '}
                {!isCollapsed && <Text as={'p'}>Settings</Text>}
              </Stack>
            </Link>

            <Stack
              onClick={handleLogout}
              direction={'row'}
              alignItems={'center'}
            >
              <Stack
                justifyContent={'center'}
                width={'auto'}
                alignItems={'center'}
              >
                <LogoutIcon />
              </Stack>{' '}
              {!isCollapsed && <Text as={'p'}>Log out</Text>}
            </Stack>
          </SidebarItem>
        </SidebarFooter>
      </Inner>
    </SidebarWrapper>
  )
}

export default Sidebar
