import React from 'react';
// import './index.style.css';
import { Left } from './left.component';
import { Right } from './right.component';
export const Index = () => {
  return (
    <div className="container">
      <div className="main">
        <Left />
        <Right />
      </div>
    </div>
  );
};
