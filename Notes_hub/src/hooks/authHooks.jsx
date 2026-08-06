import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import {addUser} from "../features/AuthSlice"
import { useNavigate } from 'react-router';

export const useAuth = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
 
  let {handleSubmit,register,errors,reset} = useForm();

  const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser"))|| []);

  const registerForm = (data)=>{


     let arr = [...registerUser,data];
    setRegisterUser(arr);

    localStorage.setItem("registerUser",JSON.stringify(arr));
    toast.success("Registered Successfully")

   };

   const LoginForm = (data)=>{
    let user = registerUser.find((val)=>{
      return val.email === data.email && val.password === data.password
      
    });
     console.log(user);
    

    if(!user){
      toast.error("invalid something")
    }
    else{
       dispatch(addUser(user));
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      toast.success("user logged in");
      
      reset();
    }

   }

    
  return {handleSubmit,register,errors,reset,registerForm,LoginForm};
}


