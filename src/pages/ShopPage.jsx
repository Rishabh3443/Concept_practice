import React from 'react'
import axiosInstance from "../Api/AxiosInstance"
import axios from 'axios'
import UseProductHooks from '../hooks/ProductHooks'
import Product from '../component/Product'

const ShopPage = () => {

 let {products,productdata,setProductdata} = UseProductHooks();

 console.log(productdata);
 
 

  return (
    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     {productdata.map((product)=>(
      <Product key={product.id} product={product} />
     ))}
    </div>
  )
}

export default ShopPage
