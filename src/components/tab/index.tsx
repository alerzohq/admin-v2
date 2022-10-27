import { useSearchParams } from 'react-router-dom'
import { Color } from '../../assets/theme'
import { TabLink, Tabs } from './styles/tab.styles'
import { TabsProps, TabsTitleProps, TabsPageProps } from './type.d'
const TabPage = ({ children }: TabsPageProps) => {
  return <Tabs>{children}</Tabs>
}

export default TabPage

TabPage.Link = function TabsLink({
  active,
  item,
  color,
  onClick,
}: TabsTitleProps) {
  return (
    <TabLink
      activeColor={Color.alerzoBlueTint}
      active={active}
      color={color}
      onClick={() => onClick()}
    >
      {item.label}
    </TabLink>
  )
}

TabPage.Tabs = function TabList({
  tabs,
  color,
  currentValue,
  hideStatus,
}: TabsProps) {
  const [queryParam, setQueryParams] = useSearchParams()
  return (
    <>
      <Tabs hideStatus={hideStatus}>
        {tabs.map((item, index) => {
          return (
            <TabPage.Link
              key={index}
              item={item}
              color={color}
              active={item?.value === currentValue}
              onClick={() => {
                setQueryParams({ status: item.value })
              }}
            />
          )
        })}
      </Tabs>
    </>
  )
}
