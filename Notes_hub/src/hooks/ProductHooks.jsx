import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/AxiosInstance";

const UseProductHooks = () => {
  let [productdata, setProductdata] = useState([]);
  let [filterdata, setFilterdata] = useState([]);


  let products = async () => {

    try {
      let res = await axiosInstance.get("/products");

      setProductdata(res.data.products);
    } catch (error) {
      console.log("errors", error);
    }
  };

  useEffect(() => {
    products();
  }, []);

  let filter = async () => {
    console.log("chalu");
    try {
      let res = await axiosInstance.get("/products/search?q=essence");
      
      setFilterdata(res.data.products);
      console.log(res.data.products);
      

    } catch (error) {
      console.log("errors", error);
    }
  };

  return { products, productdata, setProductdata };
};

export default UseProductHooks;
