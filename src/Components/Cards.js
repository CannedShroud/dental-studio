import React from "react";
import "../Styles/Cards.css";
import Card from "./Card";
import { CalendarToday, Schedule } from "@material-ui/icons";

function Cards() {
  return (
    <div className="cards">
      <Card
        headline="1-234-567-890"
        title="EMERGENCY SERVICE"
        description="In case of urgent oral-medical attention contact our 24 hour hotline"
        action=""
        buttonTitle="See More"
      />
      <Card
        headline={<CalendarToday />}
        title="BOOK AN APPOINTMENT"
        description="For all your smile needs, book an appointment with us today!"
        action=""
        buttonTitle="Book Now"
      />
      <Card
        headline={<Schedule />}
        title="OPEN HOURS"
        description={["Monday-Saturday ", <br />, "9:00AM to 5:00PM"]}
        action=""
        buttonTitle="Contact Us"
      />
    </div>
  );
}

export default Cards;
