import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

import img from "../../images/lenovo-legion.jpg";

import "./CartList.css";

const CartList = () => {

  const store = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart__list__container">
        <div className="cart__items">
          {store.cartItems.length > 0 ? store.cartItems.map((item) => (
            <div className="items" key={item.productId}>
              <div className="item__img">
                <img src={img} alt="" />
              </div>
              <div className="item__details">
                <h3>{item.productName}</h3>
                <p className="price">{item.price}</p>
                <p className="in_stock">{item.isInStock}</p>
                <div className="extras">
                  <span>Quantity: 1 | </span>
                  <span className="remove">Remove from cart</span>
                </div>
              </div>
              <div className="buy-btn">
                <button className="btn mr-top-0">Increase Quantity</button>
                <button className="btn mr-top-10">Buy Now</button>
              </div>
            </div>
          )): "No Cart Items"}
          <div className="devider" />
          <div className="cart__extras">
            <p>Total Price: </p>
            <button
              className="btn width-20"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
