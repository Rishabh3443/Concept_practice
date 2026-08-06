import React from 'react'
import { useState } from 'react'
import icon from '../assets/icon.png'
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/authHooks'

const LoginPage = () => {

  let {handleSubmit,errors,register,LoginForm} = useAuth();
    
  const navigate  = useNavigate();
    

  return (
    <div className='h-screen flex flex-col justify-center items-center '>

      <div className="flex items-center  mr-10 ">
        <img src={icon} alt=""  className="h-27 w-35 "/> 
        <h1 className="text-4xl font-semibold ">NotesHub</h1>
      </div>
      <form onSubmit={handleSubmit(LoginForm)} className='flex flex-col justify-center gap-4 border border-black p-4 rounded-xl'>
        <h1 className='text-3xl font-semibold'>Welcome Back👋🏻</h1>
        <h1>Email</h1>
        <input {...register("email")} type="email" placeholder='Enter your email' className='w-90 border border-black p-2 rounded'  />
        <h1>Password</h1>
        <input {...register("password")} type="password" placeholder='Enter your password'className='w-90 border border-black p-2 rounded' />
        <button className='w-90 border border-black p-2 bg-purple-600 rounded-xl cursor-pointer text-xl'  >Login</button>
        <div className="flex justify-center" > <p>You have not an account?<span className="text-blue-600 cursor-pointer" onClick={()=>{navigate("register")}}>Register here</span></p></div>
      </form>
    </div>
  )
}

export default LoginPage
