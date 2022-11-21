import React, { ReactNode } from 'react'
import { useAppContext } from '../context'
import { Action } from '../context/actions'
import { logOut } from '../utils/session-storage'
import { IdleTimer } from './HOC/idle-timer'

type TimeoutProps = {
  children: ReactNode
}

const SessionTimeout = ({ children }: TimeoutProps) => {
  const { dispatch } = useAppContext()

  let idleTimer = null
  const onIdle = () => {
    logOut(() => {
      dispatch({
        type: Action.LOGOUT,
      })
    })
  }

  return (
    <IdleTimer
      ref={(ref) => {
        idleTimer = ref
      }}
      timeout={10000 * 60}
      // promptTimeout={1000 * 30}
      onIdle={onIdle}
    >
      {children}
    </IdleTimer>
  )
}

export default SessionTimeout
