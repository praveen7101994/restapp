import React from 'react';
import './signuponeRignt.style.css';
import './SignupSuccessRight.style.css';
import check from '../images/check.png';
import { Help } from './help.component';

export const SignupSuccessRight = () => {
  return (
    <div className="right">
      <Help />
      <div className="rightcontent">
        <div className="example">
          <div className="success">
            <img className="check" src={check} alt="" />
            <h4>Thank you very much for your registration.</h4>
            <div className="success_para">
              <p>
                We have sent you an email to verify your email address. Please
                visit your email inbox and click to verify.
              </p>
              <p>
                Please check your spam folder incase you didn't received it in
                inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
