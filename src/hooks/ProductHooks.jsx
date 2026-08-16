import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/AxiosInstance";

const UseProductHooks = () => {

    let [productdata,setProductdata] = useState([])

  let products = async () => {

    console.log("chalu");
    
    try {
      let res = await axiosInstance.get("/products");
      

      
      
      
      setProductdata(res.data.products);
      
    } catch (error) {
      console.log("errors", error);
    }
  };



  
 
  useEffect(()=>{
     products();
  },[])

  return { products,productdata,setProductdata };
};

export default UseProductHooks;
