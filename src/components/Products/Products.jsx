import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGetProductList from "../../hooks/useGetProductList";

import image from "../../images/lenovo-legion.jpg";

import { BiRupee } from "react-icons/bi";

import "./Products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const Products = () => {
  const [products, getProducts] = useGetProductList();
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="product__container">
        <div className="products">
          {products
            ? products.map((item) => (
                <div className="product__card" key={item.productId}>
                  <Link to={`/product/details?product-id=${item.productId}`} className="product__link">
                    <div className="product__img">
                      <img src={image} alt="" />
                    </div>
                    <div className="product__details">
                      <h2>{item.productName}</h2>
                      <p className="desc">{item.productDesc}</p>
                      <p className="price">
                        <BiRupee />
                        {item.price}
                      </p>
                      <span>{item.isInStock}</span>
                    </div>
                  </Link>
                  <div className="cart__btn">
                    <button
                      className="btn"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            : "No data found"}
        </div>
      </div>
    </>
  );
};

export default Products;
