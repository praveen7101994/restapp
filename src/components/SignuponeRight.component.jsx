import React from 'react';
import './signuponeRignt.style.css';

export const SignuponeRight = () => {
  return (
    <div className="right">
      <div className="help">
        <a href="#">Need Help?</a>
        <div>
          Already have account?{' '}
          <a href>
            <span className="loginhere">Login here</span>
          </a>
        </div>
      </div>
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
          <hr className="horizontal" />
          <div className="step">
            <div className="stepcount active">2</div>
            <span className="step_para"> Business Information</span>
          </div>
        </div>
        <div className="formcontainer">
          <form action />
          <div className="divided">
            <div className="containerinput">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="containerinput">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="containerinput">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="divided">
            <div className="containerinput">
              <input type="number" placeholder="Mobile Number" />
            </div>
            <div className="containerinput">
              <input type="password" placeholder="password" />
            </div>
          </div>
          <div className="terms">
            By creating this account, I agree to the{' '}
            <span className="blue">term and conditions</span>
          </div>
          <button className=" login end">Continue</button>
        </div>
      </div>
    </div>
  );
};
