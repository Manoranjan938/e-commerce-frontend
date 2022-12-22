import React, { useEffect, useState } from "react";

import "./Login.css";

import { FaUserShield } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useGetLogin from "../../hooks/useGetLogin";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../features/login/loginSlice";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [tokens, getToken] = useGetLogin();
  const [loginRequests, setLoginRequest] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {}, [tokens]);

  const handleChange = (prop) => (event) => {
    setLoginRequest({ ...loginRequests, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callLoginUser();
  };

  const callLoginUser = async () => {
    try {
      const res = await getToken(loginRequests);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="login__container">
        <div className="login_fields">
          <h1>Welcome</h1>
          <div className="input__group">
            <FaUserShield />
            <input
              type="text"
              name=""
              id="username"
              placeholder="Enter your username"
              value={loginRequests.username}
              onChange={handleChange("username")}
            />
          </div>
          <div className="input__group">
            <RiLockPasswordFill />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your password"
              value={loginRequests.password}
              onChange={handleChange("password")}
            />
          </div>
          <button className="btn btn-login" onClick={handleSubmit}>
            Login
          </button>
          <Link to="/signup">Don't have account?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
