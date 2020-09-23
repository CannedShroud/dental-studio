import React from "react";
import "../Styles/Card.css";
import { Button } from "@material-ui/core";

function Card({ headline, title, description, action, buttonTitle }) {
  return (
    <div className="card">
      <div className="card__headline">
        <h1>{headline}</h1>
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <Button variant="contained" className="card__action">
        {buttonTitle}
      </Button>
    </div>
  );
}

export default Card;
