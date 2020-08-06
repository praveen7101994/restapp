import React from 'react';
import email from '../images/email.svg';
import password from '../images/lock.svg';
import './loginform.style.css';

export const LoginForm = () => {
  return (
    <form action="">
      <div className="formcontainer">
        <div className="inputcontainer">
          <img className="inputicon" src={email} alt="" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="inputcontainer">
          <img className="inputicon" src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="remem">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me</label>
        </div>
        <button className="center login">Login</button>
        <span className="center">Forgot Password?</span>
        <div className="last">
          <span className="center register">
            Don't have account? <a href>Create New Account</a>
          </span>
        </div>
      </div>
    </form>
  );
};
