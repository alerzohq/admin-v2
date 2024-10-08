import { useState } from 'react'
import { AlerzoLogo, LogoutIcon } from '../../assets/icons'
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
import useLogout from '../../hooks/useLogout'

const Sidebar = ({
  isCollapsed,
  collapseBar,
  onMouseEnter,
  onMouseLeave,
}: sidebarProps) => {
  const location = useLocation()
  const [show, setShow] = useState<number | null>()
  const pathname = location?.pathname
  const { sideBarData } = SideBarMenus()
  const {
    state: { user },
  } = useAppContext()

  const { mutate } = useLogout()

  const handleToggle = (index: number) => {
    if (show === index) {
      return setShow(null)
    }
    setShow(index)
  }

  const handleLogout = () => {
    mutate()
  }

  return (
    <SidebarWrapper
      isCollapsed={isCollapsed}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Inner isCollapsed={isCollapsed}>
        <LogoBox>
          {isCollapsed ? (
            <img
              src="/favicon.png"
              alt="favicon"
              className="logo-fav"
              width="25px"
              onClick={collapseBar}
            />
          ) : (
            <AlerzoLogo
              className="logo"
              onClick={collapseBar}
              height="25"
              width="150"
              color={Color.alerzoBlue}
            />
            // <img
            //   src="/shago-logo.bmp"
            //   width="120px"
            //   height="50px"
            //   alt="logo"
            //   className="full-logo"
            //   onClick={collapseBar}
            // />
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
                    direction="row"
                    gap="10px"
                    alignItems="center"
                    onClick={() => {
                      handleToggle(i)
                    }}
                  >
                    <Stack
                      justifyContent="center"
                      width="auto"
                      alignItems="center"
                    >
                      {path === location.pathname ? (
                        <>{ActiveIcon && ActiveIcon}</>
                      ) : (
                        <>{InActiveIcon && <InActiveIcon />}</>
                      )}
                    </Stack>{' '}
                    {!isCollapsed && <Text as="p">{title}</Text>}
                  </Stack>
                </Link>
                {subMenu?.map(
                  ({ name, subPath }: { name: string; subPath: string }) => (
                    <SidebarDropdown key={name} isShown={show === i}>
                      <Link to={subPath}>
                        <DropdownItem>{name}</DropdownItem>
                      </Link>
                    </SidebarDropdown>
                  )
                )}
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
            <Stack>
              <Stack onClick={handleLogout} direction="row" alignItems="center">
                <Stack justifyContent="center" width="auto" alignItems="center">
                  <LogoutIcon />
                </Stack>
                {!isCollapsed && <Text as="p">Log out</Text>}
              </Stack>
            </Stack>
          </SidebarItem>
        </SidebarFooter>
      </Inner>
    </SidebarWrapper>
  )
}

export default Sidebar
