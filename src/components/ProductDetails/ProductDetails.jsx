import React, { useEffect } from "react";
import useGetProductDetails from "../../hooks/useGetProductDetails";

import image from "../../images/lenovo-legion.jpg";

import "./ProductDetails.css";

const Details = ({ productId }) => {
  const [product, getProduct] = useGetProductDetails();

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  console.log(product);

  return (
    <>
      <div className="product__details__container">
        <div className="product__details__img">
          <img src={image} alt="" />
        </div>
        <div className="product__details__content">
          <h2>{product.productName}</h2>
          <p>{product.productDesc}</p>
          <p className="price">{product.price}</p>
          <p className="price">{product.productColor}</p>
          <p className="price">{product.productType}</p>
          <span>Selling by: {product.addedByName}</span>
          <div className="btns-groups">
            <button className="btn">Add to Cart</button>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
