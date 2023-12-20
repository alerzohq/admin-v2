import { formatDate } from "../../../utils/formatValue";


export function getClassNames(data: string, item?: any, i?: number, hideActive?: boolean): string {
  if (
    data === 'successful' ||
    data === 'Active' ||
    data === 'approved' ||
    data === 'shipping' ||
    data === 'verified' ||
    data === 'delivered'
  ) {
    return 'success';
  } else if (data === 'Unassigned') {
    return 'unassigned';
  } else if (data === 'pending' || data === 'processing') {
    return 'pending';
  } else if (
    data === 'failed' ||
    data === 'Inactive' ||
    data === 'rejected'
  ) {
    return 'failed';
  } else if (
    formatDate(item?.loginDate, 'YYYY-MM-DD HH:mm:ss') === data
  ) {
    return 'successText';
  } else if (
    formatDate(item?.logoutDate, 'YYYY-MM-DD HH:mm:ss') === data
  ) {
    return 'dangerText';
  } else if (data === 'Session ongoing') {
    return 'pendingText';
  } else if (i === 0 && !hideActive) {
    return 'tableLink';
  } else {
    return '';
  }
}

