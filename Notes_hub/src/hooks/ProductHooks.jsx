import React from 'react'
import axiosInstance from "../Api/AxiosInstance";

const ProductHooks = () => {

 let products = async()=>{

    console.log("1");
    
        try {
            let res = await axiosInstance.get("/products");

            console.log("2");
            console.log(res.data.products);
            console.log(axiosInstance);
            
            
            
        } catch (error) {
          
            console.log("errors",error)
        }
    }

    products();
  
}

export default ProductHooks;
