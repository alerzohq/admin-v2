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
  return moment(date)
    .add(60, 'minutes')
    .format(type ?? 'YYYY-MM-DD, h:mm:ss a')
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
    return capitalizeFirstLetterInSentence(str)
  }

  return s?.charAt(0).toUpperCase() + s.slice(1)
}

export const amountConverter = (x: string | number) => {
  if (!x) {
    return '0'
  }
  let amount = Number(x) / 100
  return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const thousandSeparator = (x: string | number) => {
  if (x === 0) {
    return '0'
  }
  if (x !== null && x !== undefined) {
    let amount = Number(x)
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return x
}

export const amountHelper = (x: string | number) => {
  const value: number | string = amountConverter(x)
  return `₦${value}`
}
export const generateCommission = (
  type: string,
  percentage: string | number,
  cap?: string
) => {
  const commission = percentage ?? '0'

  if (type === 'percentage') {
    const capToNaira = amountConverter(cap!)
    return `${commission}% @ ₦${capToNaira}`
  }
  if (type === 'flat') {
    return `₦${amountConverter(commission)} FLAT`
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
export const mapBusinesses = (arr: any) =>
  arr?.map((business: any) => ({
    label: `${business.name} - ${business.phone_number}`,
    value: business?.id,
  }))

export const sumOfValue = (
  arr: { [key: string]: any }[],
  param: string,
  param2: string
) => {
  return arr?.reduce((accumulator, object) => {
    return accumulator + object[param] * object[param2]
  }, 0)
}

export const capitalize = (value?: string) => {
  if (typeof value !== 'string') return ''
  const words = value?.toLocaleLowerCase().trim().split(' ')
  return words
    .map((word) =>
      word?.length === 0 ? word : word[0].toUpperCase() + word.substring(1)
    )
    .join(' ')
}

export const formatUnderScore = (value?: string | number): string => {
  let data = value?.toString()
  let newvalue = data!?.replaceAll('_', ' ')
  return capitalize(newvalue)
}

export const convertPhoneNumber = (number: string) => {
  if (number?.startsWith('+234')) {
    return '0' + number.slice(4)
  } else {
    return number
  }
}
export const checkPdfUrl=(url:string):boolean => {
if (url.endsWith('.pdf')) {
 return true
} else {
 return false
}
}

 // check email validity
    export const isEmailValid = (value:string) => {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(value)
    }

    // check website validity
    export const isWebsiteValid = (value:string) => {
      const websiteRegex =
        /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-.]+)$/
      return websiteRegex.test(value)
    }

 // check if fields in inputValues are not empty strings
export const formValidator =(values:Object)=>{
 let hasValues = false
    for (const value of Object.values(values)) {
      if (value.trim() !== '') {
        hasValues = true
        break
      }
    }

    return hasValues
}

export const convertToKobo=(value='0'):number=>{
return Number(value)*100
}

export const convertToNaira=(value='0'):number=>{
  if(value==='0'){
    return 0
  }
  return Number(value)/100
  }