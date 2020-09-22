import React from "react";
import "./Header.css";
import logo from "./logo.jpg";
import Navitem from "./Navitem";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" className="header__logo" />
        <div className="header__title">
          <h1>The Goa Dental Studio</h1>
        </div>
        <div className="header__right">
          <Navbar />
          {/* icons */}
        </div>
      </div>
    </div>
  );
}

export default Header;
