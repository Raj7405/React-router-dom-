import { useContext, useState } from 'react';
import { UserDataContext } from './context/userDataContext';
import { useNavigate } from 'react-router-dom';


let btnStyle = 'balign-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
let inputFieldStyle = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

function Login() {
  const {setIsAuth, user, setUser} = useContext(UserDataContext)
  const [error, setError] = useState({
    flag: false,
    message : null,
  })
  const navigate = useNavigate()

  const userData = JSON.parse(localStorage.getItem('userData'))

  const handleAuth = () => {  
    if(Object.keys(user).length){
      if(user.userName === userData.userName && user.password === userData.password){
        setError({flag:false, message:null})
        setIsAuth(true)
        localStorage.setItem('isAuthToken',true)
        navigate('/home', { replace: true });
      }else{
        setError({flag:true, message:'Enter Valid deatail'})
      }
    }else{
      setError({flag:true, message:'input fields should not be empty'})
    }
  }

  return (
    <div className='w-2/3 h-2/3 m-auto mt-10 flex justify-center bg-slate-200 rounded-3xl'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-4xl font-bold'>Login page</h1>
        <input 
          type='text' 
          onChange={(e) => setUser({...user, userName:e.target.value})} 
          className= {inputFieldStyle}
          placeholder='User Name'
          required
        />
        <input 
          type='password' 
          onChange={(e) => setUser({...user, password :e.target.value})}
          className= {inputFieldStyle}
          placeholder='Password'
          required
        />
        {error.flag && <p className='text-red-600  '>{error.message}</p>}
        <button className={btnStyle} onClick={handleAuth}>Login</button>
      </div>
    </div>
  )
}

export default Login