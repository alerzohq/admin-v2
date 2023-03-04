import React, { ReactNode, useRef } from 'react'
import { IdleTimer } from './HOC/idle-timer'
import useLogout from '../hooks/useLogout'

type TimeoutProps = {
  children: ReactNode
}

const SessionTimeout = ({ children }: TimeoutProps) => {
  const { mutate } = useLogout()

  const idleTimerRef = useRef<null>(null)

  const handleOnIdle = () => {
    if (idleTimerRef.current) {
      mutate()
    }
  }

  return (
    <IdleTimer ref={idleTimerRef} timeout={15000 * 60} onIdle={handleOnIdle}>
      {children}
    </IdleTimer>
  )
}
export default SessionTimeout
