import React from 'react';
import { Already } from './already.component.jsx';
import { Help } from './help.component';

export const SignuptwoRight = () => {
  return (
    <div className="right">
      <Help>
        <Already />
      </Help>
      <div className="rightcontent">
        <div className="welcome">
          <h3>Create Account</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="step_container">
          <div className="step">
            <div className="stepcount">1</div>
            <span className="step_para"> Bersonal Information</span>
          </div>
          <div className="horizontal" />
          <div className="step">
            <div className="stepcount ">2</div>
            <span className="step_para"> Business Information</span>
          </div>
        </div>
        <div className="formcontainer">
          <form action />
          <div className="containerinput">
            <input type="text" placeholder="Company Name" />
          </div>
          <div className="containerinput">
            <input type="text" placeholder="ABN Number" />
          </div>
          <div className="containerinput">
            <input type="text" placeholder="Address" />
          </div>
          <div className="divided">
            <div className="containerinput">
              <input type="text" placeholder="City" />
            </div>
            <div className="containerinput">
              <input type="select" placeholder="sd" />
            </div>
          </div>
          <div className="divided">
            <div className="containerinput">
              <input type="text" placeholder="Location" />
            </div>
            <div className="containerinput">
              <input type="text" placeholder="Postcode" />
            </div>
          </div>
          <button className="center login end">Register</button>
        </div>
      </div>
    </div>
  );
};
