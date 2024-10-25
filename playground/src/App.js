import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import Home from "./Home";
import { MyContext } from "./MyContext";
import { useState } from "react";

const packages = [
  {
    id: 1,
    packageName: "Glee",
    price: "6500",
    image: "../packages/1.jpg",
    inclusions:
      "Mushroom Inflatable, Caterpillar Tunnel, Blue Slide, Castel Playpen, Ocean Balls, Playhouse, Whale Shark Seesaw, Horse Rockers, Swing, Seesaw, Coaster Ride, Tables and Chairs, Mats, Fence, 2 Personnel",
  },
  {
    id: 2,
    packageName: "Happy w/ Balloon Dome",
    price: "9500",
    image: "../packages/2.jpg",
    inclusions:
      "Happy Inflatable, Balloon Dome, Caterpillar Tunnel, Eduplay Slide, Ocean Balls, Playhouse, Whale Shark Seesaw, Mini Trampoline, Horse and Fish Rocker, Mini Basketball Arcade, Seesaw, Tables and Chairs, Mats, Fence, 2 Personnel",
  },
  {
    id: 3,
    packageName: "Happy",
    price: "6500",
    image: "../packages/3.jpg",
    inclusions:
      "Happy Inflatable, Caterpillar Tunnel, Eduplay Slide, Ocean Balls, Playhouse, Whale Shark Seesaw, Mini Trampoline, Horse and Fish Rocker, Mini Basketball Arcade, Seesaw, Tables and Chairs, Mats, Fence, 2 Personnel",
  },
  {
    id: 4,
    packageName: "Jolly",
    price: "6500",
    image: "../packages/4.jpg",
    inclusions:
      "Jolly Inflatable, Slide and Swing, Pencil Playhouse, Blue Slide, Playpen, Ocean Balls, Basketball Arcade, Couzy Cope, Balancing Arc, Tables and Chairs, Horse Rocker, Seesaw, Mats, Fence, 2 Personnel",
  },
  {
    id: 5,
    packageName: "Jumpy Bounce",
    price: "9500",
    image: "../packages/5.jpg",
    inclusions:
      "Giant Trampoline, Mushroom Inflatable, Caterpillar Tunnel, Blue Slide, Castle Playpen, Ocean Balls, Playhouse, Seesaw, Horse Rockers, Swing, Coaster Ride, Tables and Chairs, Mats, 2 Personnel",
  },
  {
    id: 6,
    packageName: "Merry",
    price: "6500",
    image: "../packages/6.jpg",
    inclusions:
      "Pastel Mushroom Inflatable, Bus Slide, Coaster Ride, Slide and Swing, Basketball Arcade, Couzy Cope, Playpen, Ocean Balls, Ride on Car, Ride On Motorcycle, Tables and Chairs, Go Kart, Mats, Fence, 2 Personnel",
  },
  {
    id: 7,
    packageName: "Rainbow",
    price: "6500",
    image: "../packages/6.jpg",
    inclusions:
      "Rainbow Inflatable, Caterpillar Tunnel, Playhouse, Coaster Ride, Basketball Arcade, Playpen, Ocean Balls, Couzy Cope, Horse Rocker, Seesaw, Tables and Chairs, Fence, Mats, 2 Personnel",
  },
];

function App() {
  // const [zaf, setZaf] = useState("zafra");
  return (
    <div className="wrapper">
      <MyContext.Provider value={packages}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="reservation" element={<ReservationForm />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
