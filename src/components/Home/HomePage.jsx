import React, { useContext } from 'react'
import { UserDataContext } from '../context/userDataContext'

function HomePage() {
  const {isAuth, user} = useContext(UserDataContext)
  return (
    <div className='flex flex-col items-center gap-5'>
       { isAuth && <h2 className="text-5xl">Welcome back <b>{user?.userName}</b>!</h2>}
    </div>
  )
}

export default HomePage