export type sidebarProps = {
  isCollapsed?: boolean
  collapseBar?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

type subMenuData = {
  name: string
  subPath: string
}

export type sidebarMenuProp =
  | {
      id: number
      title: string
      ActiveIcon?: JSX.Element
      InActiveIcon?: JSX.Element
      activeIconColor: string
      path: string
      subMenu?: subMenuData[]
    }
  | any
