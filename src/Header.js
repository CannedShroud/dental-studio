import { ContactMail, Facebook, Twitter } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import logo from "./logo.jpg";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" className="header__logo" />
        <div className="header__title">
          <h1>D'Art Dental Studio</h1>
        </div>
      </div>
        <div className="header__right">
          <Navbar />
          <div className="header__icons">
            <IconButton>
              <Facebook className="header__icon" />
            </IconButton>
            <IconButton>
              <Twitter className="header__icon" />
            </IconButton>
            <IconButton>
              <ContactMail className="header__icon" />
            </IconButton>
          </div>
        </div>
    </div>
  );
}

export default Header;
