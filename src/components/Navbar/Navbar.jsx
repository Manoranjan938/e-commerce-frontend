import { Badge } from "@mui/material";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const cartStore = useSelector((state) => state.cart);

  const token = localStorage.getItem("jwtToken");
  let isLogin = false;
  const navigate = useNavigate();
  if (token) {
    isLogin = true;
  }

  setTimeout(() => {
    if (token) {
      localStorage.removeItem("jwtToken");
    }
  }, 1800000);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar__container">
        <div className="nav__section__left">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="nav__section__middile">
          <div className="nav_links">
            <Link to="/">Home</Link>
          </div>
          {isLogin ? (
            <>
              <div className="nav_links">
                <Link to="/user/product-list">My Products</Link>
              </div>
              <div className="nav_links">
                <Link to="/user/order-list">My Orders</Link>
              </div>
            </>
          ) : (
            <>
              <div className="nav_links">
                <Link to="/">About us</Link>
              </div>
              <div className="nav_links">
                <Link to="/">Contact us</Link>
              </div>
            </>
          )}
        </div>
        <div className="nav__section__right">
          <div className="nav__side__links">
            <Link to="/my-cart">
              <Badge badgeContent={cartStore.amount} color="success">
                <FaShoppingCart />
              </Badge>
            </Link>
          </div>
          {isLogin ? (
            <div className="nav__side__links sign_up" onClick={handleLogout}>
              <Link to="#">Logout</Link>
            </div>
          ) : (
            <>
              <div className="nav__side__links">
                <Link to="/login">Sign In</Link>
              </div>
              <div className="nav__side__links sign_up">
                <Link to="/signup">Sign up</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
