export const cleanPayload = (obj: { [key: string]: any }) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const propName in obj) {
    if (typeof obj[propName] === 'object' && obj[propName] !== null) {
      obj[propName] = obj[propName].value
    }
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      // obj[propName] = ''
      delete obj[propName]
    }
  }
  return obj
}
