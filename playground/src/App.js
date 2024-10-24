// import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

// import ReservationForm from "./ReservationForm";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import Home from "./Home";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reservation" element={<ReservationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
