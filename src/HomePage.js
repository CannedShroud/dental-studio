import React from "react";
import "./HomePage.css";
import Header from "./Header";
import chairImage from "./dentalChair.jpg";
import Body from "./Body";

function HomePage() {
  return (
    <div className="homePage">
      <Header className="header" />
      <div className="homePage__container">
        <img src={chairImage} alt="" className="homePage__image" />
      </div>
      <div className="homePage__body">
        <Body />
      </div>
    </div>
  );
}

export default HomePage;
