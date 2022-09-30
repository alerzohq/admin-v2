import React from 'react'
import { TabButton, TabLinksContainer } from './styles/Tab.styles'
import { TabsContext } from './Tabs'

export interface ITabProps {
  label: string
  children: React.ReactNode
}

export const Tab: React.FC<ITabProps> = (props) => {
  const { setActiveTab, activeTab } = React.useContext(TabsContext)
  return (
    <div>
      <TabButton
        data-active={activeTab === props.label}
        onClick={() => setActiveTab(props.label)}
      >
        {props.children}
      </TabButton>
    </div>
  )
}

export const TabLinks: React.FC<{
  children: React.ReactNode
}> = (props) => {
  return <TabLinksContainer>{props.children}</TabLinksContainer>
}
