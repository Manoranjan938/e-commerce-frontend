import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyProductLists from "../../components/Lists/MyProductLists";
import Navbar from "../../components/Navbar/Navbar";
import { setProductList } from "../../features/products/productSlice";
import useGetProductListByUserId from "../../hooks/useGetProductListByUserId";
import ErrorPage from "../Error/ErrorPage";

const ProductList = () => {
  const user = useSelector((state) => state.security.user);
  const [prod, getProductsByUser] = useGetProductListByUserId();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsByUser(user.id);
  }, []);

  useEffect(() => {
    if (prod.length > 0) {
      prod.map((it) => {
        dispatch(setProductList(it));
      })
    }
  }, [prod]);

  return (
    <>
      {user.rolename === "seller" ? (
        <>
          <Navbar />
          <MyProductLists products={prod} />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ProductList;
