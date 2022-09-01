import React,{createContext,useReducer,useContext} from 'react'
import { initialState } from './state'
import { ContextType, ProviderProps } from './types/type';
import { rootReducer } from './reducers';


export const Context = createContext<ContextType | null>(null);

const Provider = ({children}:ProviderProps) => {

 const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  )
}

export default Provider

export const useAppContext=() => {
    return useContext(Context) as ContextType
}