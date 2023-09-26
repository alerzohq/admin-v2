import { FilterValueProps } from '../../../@types/global'
import { getNewFilterResource, getResource } from '../../../utils/apiRequest'


export const getTerminalsSpecs = () => {
  return getResource(`terminal/specifications`)
}
export const getTerminalStats = () => {
  return getResource(`terminals/statistics`)
}
export const getRequestTerminalStats = () => {
  return getResource(`terminal-request/statistics`)
}
export const getTerminalsHandler = (filterValue: FilterValueProps) => {
  return getNewFilterResource(`terminals`, filterValue)
}

export const getTerminalRequestHandler = (filterValue: FilterValueProps) => {
  return getNewFilterResource(`terminals/requests`, filterValue)
}
