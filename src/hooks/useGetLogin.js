import { useState } from "react";
import axios from "../service/axios";
import setJWTToken from "../service/setJWTToken";

const useGetLogin = () => {
  const [tokens, setToken] = useState("");
  const getToken = async (logreq) => {
    try {
      const resp = await axios.post("/users/login", logreq);

      const token = resp.data.token;
      setToken(token);
      localStorage.setItem("jwtToken", token);
      setJWTToken(token);
      return resp;
    } catch (err) {
      console.error(err);
    }
  };

  return [tokens, getToken];
};

export default useGetLogin;
