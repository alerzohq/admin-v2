import React from 'react'
import { Tab, ITabProps, TabLinks } from './Tab'
import { Panel, IPanelProps } from './Panel'
import { TabsContainer } from './styles/Tabs.styles'

interface ITabsComposition {
  Tab: React.FC<ITabProps>
  Panel: React.FC<IPanelProps>
  TabLinks: React.FC<{ children: React.ReactNode }>
}

interface ITabsContext {
  activeTab: string
  setActiveTab: (label: string) => void
}

export const TabsContext = React.createContext<ITabsContext>({} as ITabsContext)

const Tabs: React.FC<{
  children: React.ReactNode
  activeTab: string
}> &
  ITabsComposition = (props) => {
  const [activeTab, setActiveTab] = React.useState(props.activeTab)
  return (
    <TabsContainer>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {props.children}
      </TabsContext.Provider>
    </TabsContainer>
  )
}

Tabs.Tab = Tab
Tabs.Panel = Panel
Tabs.TabLinks = TabLinks

export { Tabs }
