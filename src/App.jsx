import { createContext, useState , useContext} from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet,useLocation } from 'react-router-dom'
import Login from './components/Login'
import { UserDataContext } from './components/context/userDataContext'

function App() {
  const [isAuth, setIsAuth] = useState(null)
  const [user, setUser] = useState(null)

  return (
    <div className='relative h-screen'>
        <UserDataContext.Provider value={{isAuth, setIsAuth, user, setUser}}>
          <NavBar /> 
          <main className='relative tesxt-center w-2/3 h-5/6  min-h-20 m-auto pt-5 bg-gray-100 '>
            {!isAuth && <h1 className="w-3/5 m-auto text-center h-fit text-5xl font-bold align-middle ">Welcome to React Route V6 Demo</h1>}
            <Outlet />
          </main>
          <Footer/>
        </UserDataContext.Provider>
    </div>
  )
}

export default App
// export { AuthContext, useAuth, useUserData };