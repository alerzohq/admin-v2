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
export const formatDate = (date: any, type: string) => {
  return moment(date).format(type)
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

export const numberWithCommas = (x: string) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const capitalizeFirstLetterInSentence = (mySentence: string) => {
  if (typeof mySentence !== 'string') return ''
  const arr = mySentence?.split(' ')
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    return arr.join(' ')
  }
}
