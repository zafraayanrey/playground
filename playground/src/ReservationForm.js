import React from "react";
import { Link } from "react-router-dom";

function ReservationForm() {
  return (
    <div className="reservationForm">
      <div className="homeButton">
        <Link to="/">Home</Link>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Middle Initial"></input>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="FB Name"></input>
        <input type="text" placeholder="Celebrant's Name"></input>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Party Venue"></input>
        <input type="text" placeholder="Barangay"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="Floor Type"></input>
        <input type="text" placeholder="Nearest Landmark"></input>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Contact Number"></input>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Chosen Package"></input>
      </div>
    </div>
  );
}

export default ReservationForm;
