import {
  faMapMarkedAlt, faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="left-container text-start">
                  <h1>Virtual Doctor</h1>
                  <p className="mt-4 ">
                    <small>
                    Virtual doctor is your personal health advisor. <br /> 
                      Get an appoinment anytime from anywhere. <br /> Chose your specialist and book now.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>VirtualDoctor<br /> ©All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-footer-container">
                  <h3>Sign up for the newsletter</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Your Email"
                  /><button className="btn btn-success">Submit</button>
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="foter-phone-icon">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div>
                      <h5>+0 2454 654656</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div className="foter-phone-icon">
                      <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </div>
                    <div>
                      <p>
                        160 Shewrapara, Mirpur, 1207,
                        <br /> Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;