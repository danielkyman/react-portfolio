import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <span>Daniel Kyman</span>
      </Link>
      <Link to="/about">
        <span>About Me</span>
      </Link>
      <Link to="/articles">
        <span>Articles</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
      <span>Toggle DarkMode</span>
    </div>
  );
};

export default NavBar;
