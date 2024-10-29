import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ReservationForm from "./ReservationForm";

function Linker() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reservation" element={<ReservationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Linker;
