import { Action } from '../actions'
import { State, ActionTypes } from '../types/type'

export const rootReducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case Action.LOGIN:
      return { ...state, user: action.payload, error: {} }
    case Action.VERIFY_OTP:
      return { ...state, userOtp: action.payload }
    case Action.LOGOUT:
      return { ...state, user: null, error: {} }
    case Action.ERROR:
      return { ...state, error: action.payload }
    case Action.IS_FETCHING:
      return { ...state, fetching: action.payload}
    case Action.COLLAPSED_SIDEBAR:
      return { ...state, isCollapsed: !state.isCollapsed }
    default:
      return state
  }
}
