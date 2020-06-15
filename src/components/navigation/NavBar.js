import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h3>Daniel Kyman</h3>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link to="/articles">
            <h3>Articles</h3>
          </Link>
          <Link to="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
      {/* <h3>Toggle DarkMode</h3> */}
    </div>
  );
};

export default NavBar;
