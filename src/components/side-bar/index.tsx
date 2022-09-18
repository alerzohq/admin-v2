import React, { useState } from 'react'
import { AlerzoLogo, FavIcon } from '../../assets/icons'
import { Color } from '../../assets/theme'
import { sideBarData } from '../../data/sidebar-data'
import {
  SidebarWrapper,
  Inner,
  SidebarDropdown,
  DropdownItem,
  SidebarItem,
  SidebarList,
} from './styles/sidebar.styles'
import { sidebarMenuProp, sidebarProps } from './type'
import Text from '../text'
import { Link, useLocation } from 'react-router-dom'
import Stack from '../stack'

const Sidebar = ({ isCollapsed, collapseBar }: sidebarProps) => {
  const location = useLocation()
  const [show, setShow] = useState<number | null>()

  const handleToggle = (index: number) => {
    if (show === index) {
      return setShow(null)
    }

    setShow(index)
  }

  return (
    <SidebarWrapper isCollapsed={isCollapsed}>
      <Inner isCollapsed={isCollapsed}>
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
        <SidebarList>
          {sideBarData.map(
            (
              { title, Icon, path, activeIconColor, subMenu }: sidebarMenuProp,
              i
            ) => (
              <SidebarItem
                isActive={path === location.pathname}
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
                    <Stack justifyContent={'center'} alignItems={'center'}>
                      {Icon && (
                        <Icon
                          color={
                            path === location.pathname ? activeIconColor : ''
                          }
                          height={path === location.pathname ? '20' : ''}
                        />
                      )}
                    </Stack>{' '}
                    {!isCollapsed && <Text as={'p'}>{title}</Text>}
                  </Stack>
                </Link>

                {subMenu?.map(({ name, subPath }) => (
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
      </Inner>
    </SidebarWrapper>
  )
}

export default Sidebar
