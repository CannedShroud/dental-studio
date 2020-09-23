import React from "react";
import "./Body.css";
import Landing from "./Landing";
import Cards from "./Cards";

function Body() {
  return (
    <div className="body">
      <div className="body__landing">
        <Landing />
      </div>
      <div className="body__cards">
        <Cards />
      </div>
    </div>
  );
}

export default Body;
