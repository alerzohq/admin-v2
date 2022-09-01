import axios from 'axios';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode'; 
import { getStorageItem, logOut } from '../utils/session-storage';

// AxiosRequestConfig<any>

let baseURL=process.env.REACT_APP_API_BASE_URL
let getUser = getStorageItem('user') || null



export const axiosInstance = axios.create({ 
    baseURL,
    headers: {Authorization: `Bearer ${getUser?.data?.token}`},
  });


  axiosInstance.interceptors.request.use(async(req:any)=>{
 
    if(!getUser?.data?.token){

        getUser = getStorageItem('user')
        req.headers.Authorization =  `Bearer ${getUser?.data?.token}`;
    }
       const user:any = jwt_decode(getUser?.data?.token);
       const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

       if(!isExpired) return req

       logOut(()=>{  
         window.location.href='/'
       })

        // const {data} = await axios.post(`${baseURL}/user/token/refresh`,{refresh:token.refreshToken})
        //   localStorage.getItem('token',JSON.stringify(data.token)) 
        // req.headers.Authorization = data?.access_token;  
       
     return req
  },
   (error)=>{
    return Promise.reject(error)
    }
    
  )
