import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login submitted", formData);
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Welcome Back!</h2>
        <p>Login to access your account</p>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <p className="additional-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
