import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {

    if(!JSON.parse(localStorage.getItem('isAuthToken'))){
        return <Navigate to='login' replace/>   
    }
    return <Outlet/>
}

export default ProtectedRoute