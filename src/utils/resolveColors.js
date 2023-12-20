import { Color } from '../assets/theme'

export const resolveTableColor = (status) => {
  status = String(status)
  if (
    status?.toLowerCase() === 'verified' ||
    status?.toLowerCase() === 'set' ||
    status?.toLowerCase() === 'yes'
  ) {
    return {
      textColor: Color.alerzoGreen,
      bgColor: '',
    }
  }
  if (status?.toLowerCase() === 'unassigned') {
    return {
      textColor: Color.alerzoPureBlack,
      bgColor: Color.alerzoBlackishBlue,
    }
  }
  if (
    status?.toLowerCase() === 'not verified' ||
    status?.toLowerCase() === 'not set' ||
    status?.toLowerCase() === 'no'
  ) {
    return {
      textColor: Color.alerzoDanger,
      bgColor: '',
    }
  }
  if (
    status?.toLowerCase() === 'successful' ||
    status?.toLowerCase() === 'active' ||
    status?.toLowerCase() === 'enabled' ||
    status?.toLowerCase() === 'delivered' ||
    status?.toLowerCase() === 'approved'
  ) {
    return {
      textColor: Color.alerzoGreen,
      bgColor: Color.alerzoStatusSuccess,
    }
  } else if (
    status?.toLowerCase() === 'failed' ||
    status?.toLowerCase() === 'disabled' ||
    status?.toLowerCase() === 'false' ||
    status?.toLowerCase() === 'rejected'
  ) {
    return {
      textColor: Color.alerzoDanger,
      bgColor: Color.alerzoStatusFailed,
    }
  } else {
    return {
      textColor: Color.alerzoWarning,
      bgColor: Color.alerzoWarningBg,
    }
  }
}

export const resolveColor = (status) => {
  if (
    status?.toLowerCase() === 'successful' ||
    status?.toLowerCase() === 'delivered'
  ) {
    return {
      color: '',
      bg: Color.alerzoGreenBg,
    }
  } else if (
    status?.toLowerCase() === 'failed' ||
    status?.toLowerCase() === 'rejected'
  ) {
    return {
      color: Color.alerzoDanger,
      bg: Color.alerzoErrorBg,
    }
  } else {
    return {
      color: Color.alerzoWarning,
      bg: Color.alerzoWarningBg,
    }
  }
}

export const resolveStatus = (status) => {
  if (status === 'verified') {
    return 'success'
  } else if (status === 'rejected') {
    return 'failed'
  } else {
    return 'unassigned'
  }
}
