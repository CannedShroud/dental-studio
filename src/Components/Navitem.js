import React from "react";
import "../Styles/Navitem.css";

function Navitem({ title }) {
  return (
    <div className="navitem">
      <h3>{title}</h3>
    </div>
  );
}

export default Navitem;
