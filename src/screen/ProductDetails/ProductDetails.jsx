import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Details from '../../components/ProductDetails/ProductDetails'

const ProductDetails = () => {

  let { search } = useLocation();

  const query = new URLSearchParams(search);
  const id = query.get("product-id");

  return (
    <>
      <Navbar />
      <Details productId={id} />
    </>
  );
}

export default ProductDetails