import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react'

import './MyProduct.css'

import { GrEdit } from "react-icons/gr";
import NewProduct from '../NewProduct/NewProduct';

const MyProductLists = ({products}) => {
  const [open, setOpen] = useState(false);

  const openNewProduct = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="my__product__container">
        <div className="product__header">
          <button className="btn width-20 ml-auto" onClick={openNewProduct}>
            Add new product
          </button>
        </div>
        <div className="devider" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="left">Product Price</TableCell>
                <TableCell align="left">Color</TableCell>
                <TableCell align="left">Size</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((it, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {it.productName}
                  </TableCell>
                  <TableCell align="left">{it.productPrice}</TableCell>
                  <TableCell align="left">{it.productColor}</TableCell>
                  <TableCell align="left">{it.productSize}</TableCell>
                  <TableCell align="left">{it.productQuantity}</TableCell>
                  <TableCell align="left">{it.productTypq}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      style={{ background: "#5f9ea0" }}
                    >
                      <GrEdit />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {open && <NewProduct open={open} setOpen={setOpen} />}
    </>
  );
};

export default MyProductLists