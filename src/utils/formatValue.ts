import moment from 'moment'

//Validate Alerzo email

export function validEmail(email: string) {
  let alerzo = '@alerzo.com'
  if (email.indexOf(alerzo) === -1) {
    return false
  } else {
    return true
  }
}
export const formatDate = (date: any, type?: string) => {
  return moment(date).format(type ?? 'YYYY-MM-DD, h:mm:ss a')
}

//Mask string
export const maskValue = (value: string) => {
  let maskValue = value.slice(4).replace(/\d(?=.* )/g, '*')
  return maskValue
}

//Valid form field are not empty
export const formIsValid = (payload: { [key: string]: any }) => {
  let isValid = false
  let result = Object.keys(payload).filter((key) => payload[key] === '')

  if (result?.length) {
    isValid = false
  } else {
    isValid = true
  }
  return isValid
}
export const capitalizeFirstLetter = (s: string) => {
  if (typeof s !== 'string') return ''

  return s?.charAt(0).toUpperCase() + s.slice(1)
}
export const removeHyphen = (s?: string) => {
  if (typeof s !== 'string') return ''
  if (s.includes('-')) {
    const str = s.replaceAll('-', ' ')
    console.log(
      's',
      s.replace(/-/g, ' '),
      capitalizeFirstLetterInSentence('wema bank')
    )
    return capitalizeFirstLetterInSentence(str)
  }

  return s?.charAt(0).toUpperCase() + s.slice(1)
}
export const numberWithCommas = (x: string | number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const amountConverter = (x: string | number) => {
  let amount = Number(x) / 100

  return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const generateCommission = (
  type: string,
  amount: string | number,
  cap?: string
) => {
  const amountToNaira = amountConverter(amount)

  if (type === 'percentage') {
    const capToNaira = amountConverter(cap!)
    return `${amountToNaira}% @ ₦${capToNaira}`
  }
  if (type === 'flat') {
    return `₦${amountToNaira} FLAT`
  }
}
export const capitalizeFirstLetterInSentence = (mySentence?: string) => {
  if (typeof mySentence !== 'string') return ''

  const words = mySentence.trim().split(' ')
  return words
    .map((word) =>
      word?.length === 0 ? word : word[0].toUpperCase() + word.substring(1)
    )
    .join(' ')
}

export const mapBillers = (arr: any) =>
  arr?.map((obj: any) => ({
    label: `${obj?.displayName}`,
    value: obj?.slug,
  }))
export const mapMerchants = (arr: any) =>
  arr?.map((obj: any) => ({
    label: `${obj?.first_name} ${obj?.last_name}`,
    value: obj?.business_id,
  }))
