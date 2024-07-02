import React, { Suspense, useContext, useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { UserDataContext } from './context/userDataContext'
import BigSpinner from './utilities/BigSpinner'

export default function Root() {
    const {isAuth} = useContext(UserDataContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log('root', location)
    useEffect(() => {
        if(localStorage.getItem('isAuthToken')){
            // navigate('home',{replace:true})
        }
    },[location])
    return (
        <div className='relative h-screen'>
            <Suspense fallback={<BigSpinner/>}>
            <NavBar /> 
            <main className='relative tesxt-center w-2/3 h-5/6  min-h-20 m-auto pt-5 bg-gray-100 '>
                {!isAuth && <h1 className="w-3/5 m-auto text-center h-fit text-5xl font-bold align-middle ">Welcome to React Route V6 Demo</h1>}
                <Outlet />
            </main>
            <Footer/>
            </Suspense>
        </div>
    )
}

//here is problem