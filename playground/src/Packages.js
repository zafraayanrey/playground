import React, { useState } from "react";
import formatter from "./Helper";
import { Link } from "react-router-dom";

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

function Packages() {
  const [number, setNumber] = useState(1);

  function handlePrevious() {
    if (number === 1) return;
    setNumber(() => number - 1);
  }

  function handleNext() {
    if (number === packages.length) return;
    setNumber(() => number + 1);
  }

  return (
    <div className="packages">
      <div>
        <img
          className="packageImage"
          src={`../packages/${number}.jpg`}
          alt="glee"
        />
      </div>
      <div className="navigator">
        <button onClick={handlePrevious} className="previous">
          PREVIOUS
        </button>
        <button onClick={handleNext} className="next">
          NEXT
        </button>
      </div>
      <div>
        <div className="title">{`${
          packages[number - 1].packageName
        } (PHP ${formatter.format(packages[number - 1].price)})`}</div>
        <div className="inclusions">
          <span>INCLUSIONS</span>
          <span style={{ textAlign: "justify" }}>
            <h4>{packages[number - 1].inclusions}</h4>
          </span>
        </div>
      </div>
      <div>
        <button
          // onClick={() => alert(packages[number - 1].id)}
          className="bookNow"
        >
          <Link to="/reservation">BOOK NOW!</Link>
        </button>
      </div>
    </div>
  );
}

export default Packages;
