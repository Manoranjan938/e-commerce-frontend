import React from 'react'

import image from '../../images/lenovo-legion.jpg'

import './Order.css'

const Order = () => {
  return (
    <>
    <div className="order__container">
        <div className="order__img">
            <img src={image} alt="" />
        </div>
        <div className="order__content">
            <h4>Order date: </h4>
            <p>Delivery date: </p>
            <p>Delivery Address: </p>
            <p>Total Price: </p>
            <p>User contact number: </p>
            <div className="order__items"></div>
        </div>
    </div>
    </>
  )
}

export default Order