import { Component, ReactNode } from 'react'
import { withIdleTimer, IIdleTimer } from 'react-idle-timer'

interface IAppProps extends IIdleTimer {
  children: ReactNode
}


class AppComponent extends Component<IAppProps> {
  render(): ReactNode {
    return <>{this.props.children}</>
  }
}

export const IdleTimer = withIdleTimer<IAppProps>(AppComponent)
