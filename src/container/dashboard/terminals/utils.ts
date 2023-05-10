import { getNewFilterResource, getResource } from '../../../utils/apiRequest'
import { filterProps } from '../../../@types'

export const getTerminalsSpecs = () => {
  return getResource(`terminal/specifications`)
}
export const getTerminalStats = () => {
  return getResource(`terminals/statistics`)
}
export const getRequestTerminalStats = () => {
  return getResource(`terminal-request/statistics`)
}
export const getTerminalsHandler = (filterValue: filterProps) => {
  return getNewFilterResource(`terminals`, filterValue)
}

export const getTerminalRequestHandler = (filterValue: filterProps) => {
  return getNewFilterResource(`terminals/requests`, filterValue)
}
