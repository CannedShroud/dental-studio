import React from "react";
import "./Styles/App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./Appointment";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">{/* About */}</Route>
          <Route path="/contact">{/* Contact */}</Route>
          <Route path="/appointment">{<Appointment />}</Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
