import React from "react";
import "./Appointment.css";
import Form from "./Form";
import Header from "./Components/Header";
import Particles from "react-particles-js";
import particleParams from "./Assets/Configs/bubble-particals.json";

function Appointment() {
  return (
    <div className="appointment">
      <Header />
      <Particles params={particleParams} className="appointment__bg" />
      <div className="appointment__body">
        <Form />
      </div>
    </div>
  );
}

export default Appointment;
