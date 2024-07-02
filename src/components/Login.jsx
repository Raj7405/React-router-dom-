import { useContext } from 'react';
import { UserDataContext } from './context/userDataContext';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

let btnStyle = 'balign-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
let inputFieldStyle = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

function Login() {
  const {isAuth, setIsAuth, user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()
  const handlInputChange = (e) => {
    setUser(e.target.value)
  }
  const handleAuth = () => {
    if(user){
      console.log('handle Auth is calling from login')
      setIsAuth(true)
      localStorage.setItem('isAuthToken',true)

      navigate('/home', { replace: true });
    }else{
      alert('Enter Valid deatail')
    }
  }

  return (
    <div className='w-2/3 h-2/3 m-auto mt-10 flex justify-center bg-slate-200 rounded-3xl'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-4xl font-bold'>Login page</h1>
        <input 
          type='text' 
          onChange={handlInputChange} 
          className= {inputFieldStyle}
          placeholder='User Name'
          required
        />

        <button className={btnStyle} onClick={handleAuth}>Login</button>
      </div>
    </div>
  )
}

export default Login