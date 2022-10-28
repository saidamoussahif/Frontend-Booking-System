import {React, useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); 
 
  async function loginUser(event){
    event.preventDefault()
  const response = await  fetch('http://localhost:8000/api/users/login', {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    // const data = await response.json
    // console.log("test",response.status);
    if(response.status==200){
      console.log( await response.json())
      toast.success('Login Successfully!')
      navigate("/")


    }
    else{
      toast.error('Login failed!');
    }
    

  }

  return (
    <div>
      <div><Toaster/></div>
        {/* <img src='./wave.png' height='600' width='600' className='fixed lg-block inset-0 h-full' alt='image'  /> */}
<div className='w-screen h-screen flex fixed flex-col justify-center items-center lg:grid lg:grid-cols-2'>
<img src='/undraw_secure_login_pdn4 (2).png' className="pl-40 lg:block w-full h-auto
     transform mx-auto" alt='avatar'/>

  <form onSubmit={loginUser} className="flex flex-col justify-center items-center w-full">
  {/* <img src='/ticket.png' className="w-32" height='90' width='90'  alt='avatar'/> */}
  
  <h2 className="my-8 font-display font-bold text-3xl text-blue-900 text-center">welcome back to your account</h2>

  <div className="relative">
    <input onChange={(e) => setEmail(e.target.value)} type="email" className="border-b-2 font-display w-80 pl-2 capitalize text-lg focus:outline-none focus:border-indigo-800 transition-all duration-500"  placeholder='username' />
  </div>

  <div className="relative mt-8">
    <input onChange={(e) => setPassword(e.target.value)} type="password" className="border-b-2 font-display w-80 pl-2 capitalize text-lg transition-all duration-500 " placeholder='password' />
  </div>

  <Link to="/Signup" className="self-center mt-4  text-gray-600 font-bold">Don't have an account!</Link>
  <button type='submit' className="py-3 cursor-pointer px-16 text-xs font-[Poppins] mt-4 transform hover:translate-y-1 transition-all duration-500 bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-800 text-blue-900  font-bold rounded-full drop-shadow-lg ">
             Login
            </button>
  </form>

</div>
    </div>
  )
}

export default LogIn
