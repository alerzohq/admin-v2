import { decrypt, encrypt } from '../configs/secure-data'

/**
 * @param key
 * @param value
 * @param next
 * @description
 * The setStorage function encrypt data and save to window localstorage
 */
export const setStorage = (key: string, value: {}, next: () => void) => {
  if (typeof window !== 'undefined') {
    let user = JSON.stringify(value)
    localStorage.setItem(key, encrypt(user))
  }
  next()
}

/**
 * @param key
 * @description
 * The getStorageItem function retrieve and decrypt data from localstorage
 */
export const getStorageItem = (key: string) => {
  try {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(key) || ''
      return data && JSON.parse(decrypt(data))
    }
  } catch (error) {
    localStorage.removeItem('user')
  }
}

/**
 * @param next
 * @description
 * The logOut function remove data with key user from window localstorage
 */
export const logOut = (next: () => void) => {
  localStorage.removeItem('user')
  next()
}
