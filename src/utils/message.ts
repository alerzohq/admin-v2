
export const errorMessage=(err:any)=>{
    let error;
      if (err.response.data?.message === 'Incorrect password') {
        error='Invalid credentials'
      } else if (err.message === 'Network Error') {
        error='Please check your network connection'
      } else if (err.response.data?.message){
        error=err.response.data?.message
       
      }else{
        error='Something went wrong, please try again'
      }
    return error;
}

export const unauthorizedMessage=`You are not authorized to access this resource`
