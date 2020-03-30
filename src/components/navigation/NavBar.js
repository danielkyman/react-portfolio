import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <span>Daniel Kyman</span>
      <span>About Me</span>
      <span>Articles</span>
      <span>Contact</span>
      <span>Toggle DarkMode</span>
    </div>
  );
};

export default NavBar;
