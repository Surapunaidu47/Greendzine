import React, { useState } from "react";
import loginImg from "../assets/Group 3@2x.png";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      window.location.href = "/Home";
    } else {
      alert("Invalid Credentials");
      window.location.href = "/";
    }
  };

  return (
    <div className="Total_Login">
      <div className="Head">
        <img src={loginImg} alt="logimg" />
        <p>We are Electrict</p>
      </div>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link className="Button" to="/Home" onClick={handleLogin}>
        Login
      </Link>
      <a href="/">Forgot Passowrd?</a>
      <a href="/signup"> Signup</a>
    </div>
  );
}

export default Login;
