import React from "react";
import "../Styles/Appointment.css";
import ApForm from "./ApForm";
import Header from "../Components/Header";
import Particles from "react-particles-js";
import particleParams from "../Assets/Configs/line-particals.json";

function Appointment() {
  return (
    <div className="appointment">
      <Header />
      <Particles params={particleParams} className="appointment__bg" />
      <div className="appointment__body">
        <div className="appointment__heading">
          <h1>Request An Appointment</h1>
        </div>
        <div className="appointment__form">
          <ApForm />
        </div>
        <div className="appointment__info">
          <p>Terms or conditions or whatever doctors have</p>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
