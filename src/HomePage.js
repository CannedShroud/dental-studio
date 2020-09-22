import React from "react";
import "./HomePage.css";
import Header from "./Header";
import chairImage from "./dentalChair.jpg";

function HomePage() {
  return (
    <div className="homePage">
      <Header className="header" />
      <div className="homePage__container">
        <img src={chairImage} alt="" className="homePage__image" />
        {/* Body */}
      </div>
    </div>
  );
}

export default HomePage;
