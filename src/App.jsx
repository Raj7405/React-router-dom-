import { createContext, useState , useContext, useEffect} from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet,useLocation, useNavigate } from 'react-router-dom'
import { UserDataContext } from './components/context/userDataContext'

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuthToken')) || false) //this was reason behind unexpected bhaviour of ternary operator
  const [user, setUser] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify({userName:'Rajendra', password:'raj123'}))
    if(location.pathname.includes('login') && isAuth){
      navigate('home')
    }
  },[location.pathname])

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
