import axios from "../service/axios";

const useAddProduct = () => {
  const addNEwProduct = async (pro) => {
    const resp = await axios.post("/product/new-product", pro);
    return resp;
  };

  return [addNEwProduct];
};

export default useAddProduct;
