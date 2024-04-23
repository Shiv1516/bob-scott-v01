import React from "react";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`hamburger-menu ${isOpen ? "open-nav" : ""}`}
      onClick={toggleMenu}
    >
      <div className="hamburger-line1 bg2"></div>
      <div className="hamburger-line2 bg2"></div>
    </div>
  );
};

export default HamburgerMenu;
