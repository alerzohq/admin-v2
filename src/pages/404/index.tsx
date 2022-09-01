import React from 'react'
import { Navigate} from "react-router-dom"
import { Path } from '../../constants/route-path'


const NotFound = ({user}:{user:unknown}) => {
 if(!user){
  <Navigate to={Path.LOGIN} replace />  
 }

 return  <Navigate to={Path.DASHBOARD} replace />  

}

export default NotFound