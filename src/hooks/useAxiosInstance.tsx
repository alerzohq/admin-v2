import React from 'react'
import axios, { AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

import { useAppContext } from '../context';

const useAxios = () => {
let baseURL=process.env.REACT_APP_API_BASE_URL
let getToken = localStorage.getItem('token')
let token= "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwic3ViIjoiY2IyZjE5MmUtNzJmMC00MDdjLWEyODctNjU5YTQwODI1OTc5IiwiYXVkIjoiYWRtaW4iLCJleHAiOjE2NjI2MjUwMDUsImlhdCI6MTY2MjUzODYwNSwiaXNzIjoiaHR0cHM6Ly9pZC5kZXZlbG9wLmFsZXJ6by5jb20vYXV0aCJ9.v8SvMpVI7cC6B6J9CXP2upGmdgYe_DJLRGHCK0WOymnHGHzZQQKtLDAyi9PqMVDCNHdfXvLJRWl0WSNL65Eax9Fhh7uiC8O-2ZDR_VVWMqDIvQIBWyeO5x_5Q23pSI2sfXH4ywCBkOzWoTVxaYtNcX8jg27KgpV6XbhwadQkt9az0zF8yBMZJT7_O1kSV76kp50gzfGz5UNI91YwBclqI1Lw6qerVLtt-t6smuaHuAStEAjLi7bXxrrAx4g0IKHst2hCDV0A7mMd4vgFGCaKajJggka06fhnrDPDP9Yoo4PcuRRPB6uGRQT4KTG3fgf3shYXQg1BtegX_TnL_6K85yU1VplQV-_k5x3SMV6Mu_lLAWnTh9kJdl-txN6tQyFNB3-O9WjU9On-2FX0SQSXnJuw7yBVtWznULg8LXbL7z-_LV0IvuFkxSrRpUyZRryuTd8fXkr7GLuqP1FR4s6BXDdeP2N4Jj2gaUeOpkIsYxXHHBaL9BW_F2jTlKaxGflq";
// localStorage.getItem('token') ? JSON.parse(`${getToken}`):null;

 const axiosInstance = axios.create({
    baseURL,
    headers: {Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwic3ViIjoiY2IyZjE5MmUtNzJmMC00MDdjLWEyODctNjU5YTQwODI1OTc5IiwiYXVkIjoiYWRtaW4iLCJleHAiOjE2NjI2MjUwMDUsImlhdCI6MTY2MjUzODYwNSwiaXNzIjoiaHR0cHM6Ly9pZC5kZXZlbG9wLmFsZXJ6by5jb20vYXV0aCJ9.v8SvMpVI7cC6B6J9CXP2upGmdgYe_DJLRGHCK0WOymnHGHzZQQKtLDAyi9PqMVDCNHdfXvLJRWl0WSNL65Eax9Fhh7uiC8O-2ZDR_VVWMqDIvQIBWyeO5x_5Q23pSI2sfXH4ywCBkOzWoTVxaYtNcX8jg27KgpV6XbhwadQkt9az0zF8yBMZJT7_O1kSV76kp50gzfGz5UNI91YwBclqI1Lw6qerVLtt-t6smuaHuAStEAjLi7bXxrrAx4g0IKHst2hCDV0A7mMd4vgFGCaKajJggka06fhnrDPDP9Yoo4PcuRRPB6uGRQT4KTG3fgf3shYXQg1BtegX_TnL_6K85yU1VplQV-_k5x3SMV6Mu_lLAWnTh9kJdl-txN6tQyFNB3-O9WjU9On-2FX0SQSXnJuw7yBVtWznULg8LXbL7z-_LV0IvuFkxSrRpUyZRryuTd8fXkr7GLuqP1FR4s6BXDdeP2N4Jj2gaUeOpkIsYxXHHBaL9BW_F2jTlKaxGflq"}
  });

   const {state, dispatch} = useAppContext()

   axiosInstance.interceptors.request.use(async(req:any)=>{
 
    if(!token){
        //token= localStorage.getItem('token') ? JSON.parse(`${getToken}`):null;
        req.headers.Authorization =  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwic3ViIjoiY2IyZjE5MmUtNzJmMC00MDdjLWEyODctNjU5YTQwODI1OTc5IiwiYXVkIjoiYWRtaW4iLCJleHAiOjE2NjI2MjUwMDUsImlhdCI6MTY2MjUzODYwNSwiaXNzIjoiaHR0cHM6Ly9pZC5kZXZlbG9wLmFsZXJ6by5jb20vYXV0aCJ9.v8SvMpVI7cC6B6J9CXP2upGmdgYe_DJLRGHCK0WOymnHGHzZQQKtLDAyi9PqMVDCNHdfXvLJRWl0WSNL65Eax9Fhh7uiC8O-2ZDR_VVWMqDIvQIBWyeO5x_5Q23pSI2sfXH4ywCBkOzWoTVxaYtNcX8jg27KgpV6XbhwadQkt9az0zF8yBMZJT7_O1kSV76kp50gzfGz5UNI91YwBclqI1Lw6qerVLtt-t6smuaHuAStEAjLi7bXxrrAx4g0IKHst2hCDV0A7mMd4vgFGCaKajJggka06fhnrDPDP9Yoo4PcuRRPB6uGRQT4KTG3fgf3shYXQg1BtegX_TnL_6K85yU1VplQV-_k5x3SMV6Mu_lLAWnTh9kJdl-txN6tQyFNB3-O9WjU9On-2FX0SQSXnJuw7yBVtWznULg8LXbL7z-_LV0IvuFkxSrRpUyZRryuTd8fXkr7GLuqP1FR4s6BXDdeP2N4Jj2gaUeOpkIsYxXHHBaL9BW_F2jTlKaxGflq";
    }
       const user:any = jwt_decode(token);
       const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

       if(!isExpired) return req

       // const {data} = await axios.post(`${baseURL}/user/token/refresh`,{refresh:token.refreshToken})
        //   localStorage.getItem('token',JSON.stringify(data.token)) 
        // req.headers.Authorization = data?.access_token;  
       
     return req
  },
   (error)=>{
    return Promise.reject(error)
    })
  return axiosInstance;

}

export default useAxios