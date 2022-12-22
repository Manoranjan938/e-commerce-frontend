import React, { useState } from "react";
import { FaUserAlt, FaUsersCog } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";
import useAddNewUser from "../../hooks/useAddNewUser";

const Signup = () => {
  const [user, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });
  const [addNewUser] = useAddNewUser();
  const nav = useNavigate();

  const handleChange = (prop) => (event) => {
    setUsers({ ...user, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callAddUser();
  };

  const callAddUser = async () => {
    const resp = await addNewUser(user);
    if (resp.status === 201) {
      nav("/login");
    }
  };

  return (
    <>
      <div className="login__container">
        <div className="login_fields">
          <h1>Welcome</h1>
          <div className="input__group">
            <FaUserAlt />
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="input__group">
            <MdEmail />
            <input
              type="text"
              name=""
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="input__group">
            <RiLockPasswordFill />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange("password")}
            />
          </div>
          <div className="input__group">
            <FaUsersCog />
            <select
              name=""
              id="type"
              className="option-group"
              value={user.userType}
              onChange={handleChange("userType")}
            >
              <option value="">-- Select --</option>
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <button className="btn btn-login" onClick={handleSubmit}>
            Submit
          </button>
          <Link to="/login">Already have account?</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
