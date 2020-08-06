import React from 'react';
import './help.style.css';

export const Help = (props) => {
  return (
    <div className="help">
      <a href="#">Need Help?</a>
      {props.children}
    </div>
  );
};
