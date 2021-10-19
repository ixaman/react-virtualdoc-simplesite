import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-text">
              <Link to="/home"><h3>Virtual Doctor</h3></Link>
            </div>
          </div>
          <div className="col-md-10 ">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <NavLink to="/home"
                 className="items"
                 activeStyle={{
                  fontWeight: "600",
                  color: "aqua"
                }}
                 >
                  <li>Home</li>
                </NavLink>
                <NavLink to="/services" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "aqua"
                }}
                >
                  <li>Services</li>
                </NavLink>
                <NavLink to="/packages" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "aqua"
                }}
                >
                  <li>Packages</li>
                </NavLink>
                <NavLink to="/about" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "aqua"
                }}
                >
                  <li>About</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;