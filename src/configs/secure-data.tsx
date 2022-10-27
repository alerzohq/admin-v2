import CryptoJS from 'crypto-js'

let encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY || ''

export const encrypt = (value: string) => {
  const encrypted = CryptoJS.AES.encrypt(value, encryptionKey).toString()
  return encrypted
}

export const decrypt = (value: string) => {
  var bytes = CryptoJS.AES.decrypt(value, encryptionKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}
