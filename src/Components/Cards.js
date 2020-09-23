import React from "react";
import "../Styles/Cards.css";
import Card from "./Card";
import { CalendarToday, Schedule } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <Card
        headline="1-234-567-890"
        title="EMERGENCY SERVICE"
        description="In case of urgent oral-medical attention contact our 24 hour hotline"
        action=""
        button={
          <Link to="/conatact">
            <Button variant="contained" className="card__action">
              See More
            </Button>
          </Link>
        }
      />
      <Card
        headline={<CalendarToday />}
        title="BOOK AN APPOINTMENT"
        description="For all your smile needs, book an appointment with us today!"
        action=""
        button={
          <Link to="/appointment">
            <Button variant="contained" className="card__action">
              Book Now
            </Button>
          </Link>
        }
      />
      <Card
        headline={<Schedule />}
        title="OPEN HOURS"
        description={["Monday-Saturday ", <br />, "9:00AM to 5:00PM"]}
        action=""
        button={
          <Link to="/contact">
            <Button variant="contained" className="card__action">
              Contact Us
            </Button>
          </Link>
        }
      />
    </div>
  );
}

export default Cards;
