import { useState } from "react";
import axios from "../service/axios";

const useGetProductList = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    try {
      const resp = await axios.get("/product/get-products");
      setProducts(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  return [products, getProducts];
};

export default useGetProductList;
