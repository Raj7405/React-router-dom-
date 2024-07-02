import React, { createContext, useState , useContext, useEffect} from 'react'
import { UserDataContext } from './components/context/userDataContext'
import Root from './components/Root'
import { router } from './components/Router'
import BigSpinner from './components/utilities/BigSpinner'
import { RouterProvider, useLocation } from 'react-router-dom'
import { route2 } from './components/Routers'
// import { LocationProvider, useCustomLocation } from './components/context/LocationContext'


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuthToken') || false)
  const [user, setUser] = useState('')
  // const location = useCustomLocation();
  console.log(typeof localStorage.getItem('isAuthToken'))
  // console.log('location', location)
const logedIn = ['login','signup']
// useEffect(() => {
 
//   console.log('first', location?.pathname)
// }, [location?.pathname])


  return (
       <UserDataContext.Provider value={{isAuth, setIsAuth, user, setUser}}>
          {/* <LocationProvider> */}
          <RouterProvider router={router} fallbackElement={<BigSpinner />}/>
          {/* </LocationProvider> */}
       </UserDataContext.Provider>
  )
}

export default React  .memo(App)
// export { AuthContext, useAuth, useUserData };