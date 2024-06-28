import React, { useContext } from 'react'
import { NavLink, Navigate, useNavigate} from 'react-router-dom'
import { UserDataContext } from './context/userDataContext';


function NavBar() {
    const {isAuth, setIsAuth,setUser} = useContext(UserDataContext)
    const navigate = useNavigate()
    const backToLogIn = () => {
        setIsAuth(!isAuth)
        setUser(null)
        navigate('/',{replace:true})    
    }
    const handleLogin = () => {
        navigate('/login',{replace:true})
    }
    let btnSty = 'balign-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none' 

    const navLinks = ["Home", "Feature", "AboutUs"]
    const activeStyle = ({isActive}) => {
        return isActive ? {color : "#134e4a", fontWeight : 700} : {}
    }
    return (
        <nav className='w-screen  bg-teal-300 text-gray-900 p-5 text-center '>
            <div className='max-w-screen-xl m-auto flex justify-between items-center '>
                <div className='logo'>
                    <NavLink to='/'>
                        <h1 className='text-2xl font-semibold'>Router v6</h1>
                    </NavLink>
                </div>
                {isAuth ? 
                    <div className=' w-1/3 navlink flex justify-between items-center'>
                        {navLinks.map((item,index) => <NavLink to={item.toLowerCase()} style={activeStyle} key={`${item}${index}`}>{item}</NavLink>)}
                        {isAuth ? <button className={btnSty} onClick={backToLogIn}>Log Out</button> : null}      
                    </div>  
                    : <button className={btnSty} onClick={handleLogin}>Log in</button>
                }
                         
            </div>
        </nav>
    )   
}   

export default NavBar   