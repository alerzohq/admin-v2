import CryptoJS from 'crypto-js';

let encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY || ''

export const encrypt = (value: string) => {
    const encrypted = CryptoJS.AES.encrypt(value, encryptionKey).toString();
    // console.log({encrypted})
    return encrypted
 }
 
 export const decrypt = (value: string) => {
     var bytes  = CryptoJS.AES.decrypt(value, encryptionKey);
    //  console.log({bytes: bytes.toString(CryptoJS.enc.Utf8)})
     return bytes.toString(CryptoJS.enc.Utf8);
}