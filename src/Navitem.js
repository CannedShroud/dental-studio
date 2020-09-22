import React from "react";
import "./Navitem.css";

function Navitem({ title }) {
  return (
    <div className="navitem">
      <h3>
        <a href="#">{title}</a>
      </h3>
    </div>
  );
}

export default Navitem;
