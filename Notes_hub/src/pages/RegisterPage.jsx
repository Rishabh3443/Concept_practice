import React from "react";
import {useAuth} from "../hooks/authHooks";
import icon from '../assets/icon.png'
import { useNavigate } from "react-router";

const RegisterPage = () => {

  const navigate = useNavigate();
  
const {handleSubmit,register,errors,registerForm,} = useAuth();




  return (

    <div className="h-screen flex flex-col justify-center items-center">

      <div className="flex items-center  mr-10 ">
        <img src={icon} alt=""  className="h-27 w-35 "/> 
        <h1 className="text-4xl font-semibold ">NotesHub</h1>
      </div>
      <form onSubmit={handleSubmit(registerForm)} className="  flex flex-col justify-center gap-3 p-4 border border-black rounded-xl">
        <h1 className="text-3xl font-semibold">Register here</h1>
        <p>Name</p>
        <input
        {...register("name", {required: "name is required"})}
          type="name"
          placeholder="Enter name"
          className=" w-90 border border-black px-4 py-2 rounded"
        />
        Email
        <input
        {...register("email", {required: "email is required"})}
          type="email"
          placeholder="Enter email"
          className=" w-90 border border-black px-4 py-2 rounded"
        />
        Password
        <input
        {...register("password", {required: "password is required"})}
          type="password"
          placeholder="Enter password"
          className=" w-90 border border-black px-4 py-2 rounded"
        />
        <button className=" w-90 border border-black text-white bg-purple-600 cursor-pointer p-2 rounded-xl text-xl">
          Register
        </button>

       <div className="flex justify-center" > <p>you have an account?<span className="text-blue-600 cursor-pointer" onClick={()=>{navigate("/")}}>Login here</span></p></div>
      </form>
    </div>
  );
};

export default RegisterPage;
