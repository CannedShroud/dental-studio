import React from "react";
import "./Card.css";
import { Button } from "@material-ui/core";

function Card() {
  return (
    <div className="card">
      <div className="card__headline">
        <h1>1-234-567-890</h1>
      </div>
      <div className="card__title">
        <h3>EMERGENCY SERVICE</h3>
      </div>
      <div className="card__description">
        <p>
          In case of urgent oral medical attention ccontact our 24 hour hotline
        </p>
      </div>
      <Button variant="contained" className="card__action">See More </Button>
    </div>
  );
}

export default Card;
