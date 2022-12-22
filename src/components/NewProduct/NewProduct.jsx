import { Modal, TextField } from "@mui/material";
import React, { useState } from "react";

import "./NewProduct.css";

import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import useAddProduct from "../../hooks/useAddProduct";

const NewProduct = ({ open, setOpen }) => {
  const user = useSelector((state) => state.security.user);
  const [product, setProduct] = useState({
    productName: "",
    productDesc: "",
    productPrice: 0,
    addedBy: user.id,
    productQuantity: 0,
    productType: "",
    productColor: "",
    productSize: "",
  });
  const [addNEwProduct] = useAddProduct();

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callAddProduct();
  };

  const callAddProduct = async () => {
    try {
      const resp = await addNEwProduct(product);
      if (resp.status === 201) {
        setOpen(!open);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <div className="new__product__container">
          <div className="new__product__header">
            <h3>Add New Product</h3>
            <div className="close_btn" onClick={() => setOpen(!open)}>
              <ImCross />
            </div>
          </div>
          <div className="new__product__body">
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                value={product.productName}
                onChange={handleChange("productName")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Description"
                variant="outlined"
                value={product.productDesc}
                onChange={handleChange("productDesc")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Price"
                variant="outlined"
                value={product.productPrice}
                onChange={handleChange("productPrice")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Quantity"
                variant="outlined"
                value={product.productQuantity}
                onChange={handleChange("productQuantity")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Type"
                variant="outlined"
                value={product.productType}
                onChange={handleChange("productType")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Color"
                variant="outlined"
                value={product.productColor}
                onChange={handleChange("productColor")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Product Size"
                variant="outlined"
                value={product.productSize}
                onChange={handleChange("productSize")}
              />
            </div>
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewProduct;
