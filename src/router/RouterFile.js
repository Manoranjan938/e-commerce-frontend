import jwtDecode from 'jwt-decode';
import React from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { logout, setCurrentUser } from '../features/login/loginSlice';
import Cart from '../screen/Cart/Cart';
import ErrorPage from '../screen/Error/ErrorPage';
import Home from '../screen/Home/Home'
import Login from '../screen/Login/Login';
import OrderDetails from '../screen/OrderDetails/OrderDetails';
import OrderList from '../screen/OrderList/OrderList';
import ProductDetails from '../screen/ProductDetails/ProductDetails';
import ProductList from '../screen/ProductList/ProductList';
import Signup from '../screen/Signup/Signup';
import setJWTToken from '../service/setJWTToken';

const RouterFile = () => {

  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useDispatch();

  if (jwtToken) {
    setJWTToken(jwtToken);
    const decode = jwtDecode(jwtToken);
    dispatch(setCurrentUser(decode))

    const currentTime = Date.now() / 1000;

    // console.log(decode.exp)
    // console.log(currentTime)
  
    if (decode.exp < currentTime) {
      dispatch(logout());
      localStorage.removeItem("jwtToken");
      window.location.href = "/login";
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/product/details" element={<ProductDetails />} />
        <Route path="/user/product-list" element={<ProductList />} />
        <Route path="/user/order-list" element={<OrderList />} />
        <Route path="/user/order-details" element={<OrderDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterFile