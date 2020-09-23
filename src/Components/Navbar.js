import React from "react";
import "../Styles/Navbar.css";
import Navitem from "./Navitem";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <Navitem title="Home" />
      </Link>
      <Link to="/about">
        <Navitem title="About" />
      </Link>
      <Link to="/contact">
        <Navitem title="Contacts" />
      </Link>
    </div>
  );
}

export default Navbar;
