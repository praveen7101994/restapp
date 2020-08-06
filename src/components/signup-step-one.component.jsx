import React from 'react';
// import './index.style.css';
import { Left } from './left.component';
import { SignuponeRight } from './SignuponeRight.component';
export const Signupone = () => {
  return (
    <div className="container">
      <div className="main">
        <Left />
        <SignuponeRight />
      </div>
    </div>
  );
};
