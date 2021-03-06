import { ContactMail, Facebook, Twitter } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "../Styles/Header.css";
import logo from "../Assets/Images/logo.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img src={logo} alt="" className="header__logo" />
          <div className="header__title">
            <h1>D'Art Dental Studio</h1>
          </div>
        </div>
      </Link>
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
