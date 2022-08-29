export type State ={
    isCollapsed: any;
    user:{} | null
}

export type ActionTypes={
    type: string;
    payload:{}
}


export type ContextType = {
    state: any;
    dispatch: Dispatch<ActionTypes>;
  
  };

export type ProviderProps=React.ComponentProps<'div'>