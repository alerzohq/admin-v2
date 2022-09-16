import { decrypt, encrypt } from '../configs/secure-data'

export const setStorage = (key: string, value: {}, next: () => void) => {
  if (typeof window !== 'undefined') {
    let user = JSON.stringify(value)
    sessionStorage.setItem(key, encrypt(user))
  }
  next()
}

export const getStorageItem = (key: string) => {
  try {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem(key) || ''
      return data && JSON.parse(decrypt(data))
    }
  } catch (error) {
    sessionStorage.removeItem('user')
  }
}

export const logOut = (next: () => void) => {
  sessionStorage.removeItem('user')
  next()
}
