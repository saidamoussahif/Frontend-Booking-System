import {React, useState} from 'react'
import { useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  
  async function SignUpUser(event){
    event.preventDefault()
  const response = await  fetch('http://localhost:8000/api/users', {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        email,
        password
      }),
    })
    // const data = await response.json
    // if( response.ok){
    //   console.log( await response.json())
    //   navigate("/Login")
    // }
    // else{
    //   response.status();
    // }
    
    if(response.status==200){
      console.log( await response.json())
      toast.success('Register Successfully!')
      navigate("/Login")


    }
    else{
      toast.error('Register failed!');
    }
    

  }



  return (
    <div>
       <div><Toaster/></div>
       <div>
        {/* <img src='./wave.png' height='600' width='600' className='fixed lg-block inset-0 h-full' alt='image'  /> */}
<div className='w-screen h-screen flex fixed flex-col justify-center items-center lg:grid lg:grid-cols-2'>
<img src='/undraw_secure_login_pdn4 (2).png' className="pl-40 lg:block w-full h-auto
     transform mx-auto" alt='avatar'/>

<form onSubmit={SignUpUser} className="flex flex-col justify-center items-center w-1/2">
            <img src="./avatar.svg" alt="" className="w-32" />
            <h1 className="my-8 font-display font-bold text-3xl text-blue-900 text-center">
              Create your account !
            </h1>
            <div className="relative">
              <input
               onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="FirstName"
                className="border-b-2 font-display w-80 pl-2 capitalize text-lg focus:outline-none focus:border-blue-700 transition-all duration-500"
              />
            </div>
            <div className="relative mt-8">
              <input
               onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="LastName"
                className="border-b-2 font-display w-80 pl-2 capitalize text-lg focus:outline-none focus:border-blue-700 transition-all duration-500"
              />
            </div>
              <div className="relative mt-8">
              <input
               onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="border-b-2 font-display w-80 pl-2 capitalize text-lg focus:outline-none focus:border-blue-700 transition-all duration-500"
              />
            </div>
            <div className="relative mt-8">
              <input
               onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border-b-2 font-display w-80 pl-2 capitalize text-lg focus:outline-none focus:border-blue-700 transition-all duration-500 "
              />
            </div>
            <a href="/Login" className="self-end mt-4 text-gray-600 font-bold">
              Already have an account !
            </a>
            <button  type='submit' className="py-3 cursor-pointer px-16 text-xs mt-4 transform hover:translate-y-1 transition-all duration-500 bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-800 text-blue-800  font-bold rounded-full drop-shadow-lg ">
              Signup
            </button>
          </form>

</div>
    </div>
    </div>
  )
}

export default SignUp
