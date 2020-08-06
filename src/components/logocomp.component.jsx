import React from 'react';
import logo from '../images/logo.png';
import './logocomp.style.css';

export const Logocomp = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" className="brandlogo" />
    </div>
  );
};
