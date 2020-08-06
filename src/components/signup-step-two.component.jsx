import React from 'react';
// import './index.style.css';
import { Left } from './left.component';
import { SignuptwoRight } from './SignuptwoRight.component';
export const Signuptwo = () => {
  return (
    <div className="container">
      <div className="main">
        <Left />
        <SignuptwoRight />
      </div>
    </div>
  );
};
