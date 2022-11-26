
export const errorMessage=(err:any)=>{
    let error;
      if (err.response.data?.message === 'Incorrect password') {
        error='Invalid credentials'
      } else if (err.message === 'Network Error') {
        error='Please check your network connection'
      } else {
        error='Something went wrong, please try again'
       
      }
    return error;
}