import * as React from 'react'
import { TabsContext } from './Tabs'

export interface IPanelProps {
  label: string
  children: React.ReactNode
}

export const Panel: React.FC<IPanelProps> = (props) => {
  const { activeTab } = React.useContext(TabsContext)
  return activeTab === props.label ? <div>{props.children}</div> : null
}
