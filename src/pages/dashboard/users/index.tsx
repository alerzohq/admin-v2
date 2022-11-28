import React from 'react'
import { Navigate } from 'react-router-dom'
import AllPermissions from '../../../configs/access-control'
import { Path } from '../../../constants/route-path'
import { UsersContainer } from '../../../container/dashboard'

const Users = () => {

    const {rolesAccess } = AllPermissions();  
    if (!rolesAccess) {
      return <Navigate to={`/${Path.DASHBOARD}`} replace />
    }
    return <UsersContainer />
}




export default Users
