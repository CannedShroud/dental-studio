import React from "react";
import "../Styles/HomePage.css";
import Header from "../Components/Header";
import chairImage from "../Assets/Images/dentalChair.jpg";
import Body from "../Components/Body";

function HomePage() {
  return (
    <div className="homePage">
      <Header className="header" />
      <img src={chairImage} alt="" className="homePage__image" />
      <div className="homePage__container">
        <Body />
      </div>
    </div>
  );
}

export default HomePage;
