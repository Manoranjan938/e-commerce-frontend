import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useGetOrderList from "../../hooks/useGetOrderList";

import image from "../../images/lenovo-legion.jpg";
import "./Orders.css";

const Orders = () => {
  const user = useSelector((state) => state.security.user);
  const [orders, getOrders] = useGetOrderList();

  useEffect(() => {
    getOrders(user.id);
  }, []);

  console.log(orders);

  return (
    <>
      <div className="orders__container">
        <div className="orders">
          {orders.length > 0
            ? orders.map((item) => (
                <Link to="/user/order-details" className="order__card">
                  <img src={image} alt="" />
                  <div className="order_details">
                    <p>Ordered on</p>
                    <p>Delivery by</p>
                  </div>
                </Link>
              ))
            : "No Orders found"}
        </div>
      </div>
    </>
  );
};

export default Orders;
