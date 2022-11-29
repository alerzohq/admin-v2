import React, { ReactNode } from 'react'
import { IdleTimer } from './HOC/idle-timer'
import useLogout from '../hooks/useLogout'

type TimeoutProps = {
  children: ReactNode
}

const SessionTimeout = ({ children }: TimeoutProps) => {
  const { mutate } = useLogout()

  let idleTimer = null
  const onIdle = () => {
    mutate()
  }

  return (
    <IdleTimer
      ref={(ref) => {
        idleTimer = ref
      }}
      timeout={10000 * 60}
      promptTimeout={1000 * 30}
      onIdle={onIdle}
    >
      {children}
    </IdleTimer>
  )
}

export default SessionTimeout
