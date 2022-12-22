import { useState } from "react";
import axios from "../service/axios";

const useGetProductListByUserId = () => {
  const [prod, setProdcut] = useState([]);
  const getProductsByUser = async (id) => {
    try {
      const resp = await axios.get(`/product/get-products-by-user/${id}`);
      setProdcut(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  return [prod, getProductsByUser];
};

export default useGetProductListByUserId;
