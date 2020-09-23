import React from "react";
import "../Styles/Navbar.css";
import Navitem from "./Navitem";

function Navbar() {
  return (
    <div className="navbar">
      <Navitem title="Home"/>
      <Navitem title="About"/>
      <Navitem title="Contacts"/>
    </div>
  );
}

export default Navbar;
