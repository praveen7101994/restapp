import React from 'react';
import check from '../images/check.png';
import './left.style.css';

import { Logocomp } from './logocomp.component';
export const Left = () => {
  return (
    <div className="left">
      <div className="leftcontent">
        <Logocomp />
        <h3 className="heading">Join Thousands's of Restaurants &amp; Cafes</h3>
        <div className="para">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lore ipsum has been the industry's standard dummy test
            ever since the last 1500s, when an unknown printer took a.
          </p>
        </div>
        <div className="checklist">
          <div className="checks">
            <img src={check} alt="" className="checking" />
            <p>Lots of reasons to join us</p>
          </div>
          <div className="checks">
            <img src={check} alt="" className="checking" />
            <p>One more reason to join us</p>
          </div>
          <div className="checks">
            <img src={check} alt="" className="checking" />
            <p>Another reason to join us</p>
          </div>
        </div>
        <div className="join">
          <button className="joinbutton">
            Join The Force
            <span className="joinangle">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
