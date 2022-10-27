import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
} from 'react'
import { initialState } from './state'
import { ContextType, ProviderProps } from './types/type'
import { rootReducer } from './reducers'
import { Action } from './actions'
import { getStorageItem } from '../utils/session-storage'

export const Context = createContext<ContextType | null>(null)

const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const user = useMemo(() => {
    return getStorageItem('user')
  }, [])

  useEffect(() => {
    dispatch({ type: Action.LOGIN, payload: user })
  }, [user])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default Provider

export const useAppContext = () => {
  return useContext(Context) as ContextType
}
