import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { MyContext } from "./MyContext";

function ReservationForm() {
  const packages = useContext(MyContext);
  console.log(Date.now());
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
      <div className="inputContainer date">
        <input type="date"></input>
      </div>
      <div className="inputContainer time">
        <input type="time"></input>
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
      <div className="selectContainer">
        <select placeholder="Choose..">
          {packages.map((item) => (
            <option>{item.packageName}</option>
          ))}
        </select>
      </div>
      <div className="submitForm">
        <Buttons>SUBMIT</Buttons>
      </div>
    </div>
  );
}

export default ReservationForm;
