import { auditHeaderList } from '../../../data/table-headers'
import { formatDate } from '../../../utils/formatValue'

export const rowData = (state: any) => ({
  User: `${state?.detail.admin.firstName} ${state?.detail.admin.lastName}`,
  Role: `${state?.detail.admin.roleName}`,
  SessionStartedAt: `${formatDate(
    state?.detail.loginDate,
    'YYYY-MM-DD HH:mm:ss'
  )}`,
  SessionEndedAt: isNaN(state?.detail.logoutDate)
    ? formatDate(state?.detail.logoutDate, 'YYYY-MM-DD HH:mm:ss')
    : 'Session ongoing',
})
export const rowheaders = () =>
  [...auditHeaderList, '', ''].map((header, i) => ({
    label:
      header === 'Session Started At'
        ? 'Login Time'
        : header === 'Session Ended At'
        ? 'Logout Time'
        : header === ''
        ? 'noVisibility'
        : header,
    value:
      header === 'Session Started At'
        ? 'SessionStartedAt'
        : header === 'Session Ended At'
        ? 'SessionEndedAt'
        : header === ''
        ? 'empty'
        : header,
    columnWidth:
      i === 5 ||
      header === 'Session Started At' ||
      header === 'Session Ended At'
        ? 'medium'
        : 'small',
  }))
