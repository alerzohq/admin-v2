

export const errorMessage = (err: ErrorType | string | unknown):string => {
  let error:string
 if (typeof err === 'string') {
    error = err;
  } else {
  const errorObj = err as ErrorType;
  if (errorObj.response.data?.message === 'Incorrect password') {
    error = 'Invalid credentials'
  } else if (errorObj.message === 'Network Error') {
    error = 'Please check your network connection'
  } else if (errorObj.response.data?.message) {
    error = errorObj.response.data?.message
  } else {
    error = 'Something went wrong, please try again'
  }
}
  return error
}

export const unauthorizedMessage = `You are not authorized to access this resource`
