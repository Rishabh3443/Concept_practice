import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {
  let {user} = useSelector((Store)=>Store.auth)
  console.log("route",user);
  

  if(user){
    return <Navigate to={"/main "} />
    console.log("main chalra hu");
    
  }
  return <Outlet/>
}

export default PublicRoutes
