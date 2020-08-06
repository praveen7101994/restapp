import React from 'react';
// import './index.style.css';
import { Left } from './left.component';
import { SignupSuccessRight } from './SignupSuccessRight.component';
export const SignUpSuccess = () => {
  return (
    <div className="container">
      <div className="main">
        <Left />
        <SignupSuccessRight />
      </div>
    </div>
  );
};
