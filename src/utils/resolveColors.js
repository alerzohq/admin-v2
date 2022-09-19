import { Color } from '../assets/theme'

export const resolveTableColor = (status) => {
    if (status.toLowerCase() === "verified" || status.toLowerCase() === "set") {
        return {
            textColor: Color.alerzoTableSuccess,
            bgColor: '',
        }
    } 
    if (status.toLowerCase() === "not verified" || status.toLowerCase() === "not set") {
        return {
            textColor: Color.alerzoDanger,
            bgColor: '',
        }
    } 
    if (status === "successful" || status.toLowerCase() === "active") {
        return {
            textColor: Color.alerzoTableSuccess,
            bgColor: Color.alerzoStatusSuccess,
        }
    } else if (status === "failed" || status.toLowerCase() === "disabled") {
        return {
            textColor: Color.alerzoDanger,
            bgColor: Color.alerzoStatusFailed,
        }
    } else  {
        return {
            textColor: Color.alerzoWarningText,
            bgColor: Color.alerzoWarningBg,
        }
    }
}

export const resolveColor = (status) => {
  if (status === 'successful') {
    return {
      color: Color.alerzoTableSuccess,
      bg: Color.alerzoTableSuccessBg,
    }
  } else if (status === 'failed') {
    return {
      color: Color.alerzoDanger,
      bg: Color.alerzoErrorBg,
    }
  } else {
    return {
      color: Color.alerzoWarningText,
      bg: Color.alerzoWarningBg,
    }
  }
}
