import { Component, ReactNode } from 'react'
import { withIdleTimer, IIdleTimer } from 'react-idle-timer'

interface IAppProps extends IIdleTimer {
  children: ReactNode
}

interface IAppState {
  bar: string
}

class AppComponent extends Component<IAppProps, IAppState> {
  render(): ReactNode {
    return <>{this.props.children}</>
  }
}

export const IdleTimer = withIdleTimer<IAppProps>(AppComponent)
