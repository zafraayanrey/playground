import React from "react";
import { Link, NavLink } from "react-router-dom";

function Zaf() {
  return (
    <div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/reservation">
        <button>Reservation</button>
      </NavLink>
    </div>
  );
}

export default Zaf;
