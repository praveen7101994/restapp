import React from 'react';
import email from '../images/email.svg';
import password from '../images/lock.svg';
import { Welcome } from './welcome.component';
import { LoginForm } from './loginform.component';

export const Right = () => {
  return (
    <div className="right">
      <div className="help">
        <a href="">Need Help?</a>
      </div>
      <div className="rightcontent">
        <Welcome />
        <LoginForm />
      </div>
    </div>
  );
};
