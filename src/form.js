import React, { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoLockOpenSharp } from "react-icons/io5";
import data from "./data";
import { Link } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidCred, setIsValidCred] = useState(true);
  let userData = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(email);
    setPassword(password);
    validateCredentials(email, password);
  };

  const validateCredentials = (email, password) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsValidEmail(true);
      // console.log("valid email");
      const temp = data.filter((item) => {
        if (item.email === email) {
          return item;
        }
      });
      userData = [...temp];
      if (userData[0]) {
        validatePassword(password);
      } else {
        // console.log("email does not exist");
        setIsValidCred(false);
      }
    } else {
      // console.log("invalid email");
      setIsValidEmail(false);
    }
  };

  const validatePassword = (password) => {
    if (userData[0].password === password) {
      setIsValidCred(true);
      // console.log("valid details");
    } else {
      setIsValidCred(false);
      // console.log("invalid details");
    }
  };

  return (
    <div className="form-container">
      <h2>Lorem Ipsum</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <IoPersonCircleSharp className="icon"></IoPersonCircleSharp>
          <input
            type="text"
            value={email}
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-input">
          <IoLockOpenSharp className="icon"></IoLockOpenSharp>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className={!isValidEmail || !isValidCred ? "show" : "dont-show"}>
          {!isValidCred ? "invaid email id or password" : "invalid email id"}
        </p>
        {/* <Status isValidCred={isValidCred} isValidEmail={isValidEmail}></Status> */}
        <div className="form-control">
          <div className="flex-container">
            <input type="checkbox" />
            <p>Remeber me</p>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <div className="btn-container">
          <button type="submit" className="submit-btn">
            <Link to={isValidCred ? "/welcome" : ""}>Log In</Link>
          </button>
        </div>
        <div className="new-user">
          <a href="#"> New User</a>
        </div>
      </form>
    </div>
  );
};

export default Form;
