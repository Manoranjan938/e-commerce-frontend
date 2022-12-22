import { useState } from "react";
import axios from "../service/axios";

const useGetOrderList = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async (userId) => {
    try {
      const resp = await axios.get(`/order/get-orders/${userId}`);

      setOrders(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  return [orders, getOrders];
};

export default useGetOrderList;
