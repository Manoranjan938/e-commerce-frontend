import { useState } from "react";
import axios from "../service/axios";

const useGetProductDetails = () => {
  const [product, setProduct] = useState({});

  const getProduct = async (id) => {
    try {
      const resp = await axios.get(`/product/get-products/${id}`);
      setProduct(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return [product, getProduct];
};

export default useGetProductDetails;

/*

, {
        headers: {
          'Authorization': token,
        },
      }
*/