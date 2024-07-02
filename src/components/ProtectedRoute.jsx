import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserDataContext } from './context/userDataContext'

function ProtectedRoute() {
    const {isAuth} = useContext(UserDataContext)

    if(!localStorage.getItem('isAuthToken')){
        return <Navigate to='/' replace/>   
    }
    return <Outlet/>
}

export default ProtectedRoute