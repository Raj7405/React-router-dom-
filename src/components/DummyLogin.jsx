import React, { useContext } from 'react'
import Login from './Login'
import { UserDataContext } from './context/userDataContext'

function DummyLogin() {
    const {isAuth} = useContext(UserDataContext)
    console.log("dummy", isAuth)
  return (
    <>
    <div>DummyLogin</div>
    </>
  )
}

export default DummyLogin