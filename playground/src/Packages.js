import React, { useState } from "react";

const packages = [
  {
    id: 1,
    packageName: "Glee",
    price: "6500",
    image: "../packages/1.jpg",
    inclusions: "Glee",
  },
  {
    id: 2,
    packageName: "Happy w/ Balloon Dome",
    price: "9500",
    image: "../packages/2.jpg",
    inclusions: "Happy w/ Balloon Dome",
  },
  {
    id: 3,
    packageName: "Happy",
    price: "6500",
    image: "../packages/3.jpg",
    inclusions: "Happy",
  },
  {
    id: 4,
    packageName: "Jolly",
    price: "6500",
    image: "../packages/4.jpg",
    inclusions: "Jolly",
  },
  {
    id: 5,
    packageName: "Jumpy Bounce",
    price: "9500",
    image: "../packages/5.jpg",
    inclusions: "Jumpy Bounce",
  },
  {
    id: 6,
    packageName: "Merry",
    price: "6500",
    image: "../packages/6.jpg",
    inclusions: "Merry",
  },
  {
    id: 7,
    packageName: "Rainbow",
    price: "6500",
    image: "../packages/7.jpg",
    inclusions: "Rainbow",
  },
];

function Packages() {
  const [number, setNumber] = useState(0);

  function handlePrevious() {
    number > 1 && setNumber(() => number - 1);
    console.log(number);
  }

  function handleNext() {
    setNumber(() => number + 1);
    console.log(number);
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
      <div className="title"> GLEE PACKAGE {number}</div>
      <div className="inclusions">
        <span>INCLUSIONS</span>
        <ul className="inclusionList">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div>
        <button onClick={() => alert("Hello")} className="bookNow">
          BOOK NOW!
        </button>
      </div>
      <div className="navigator">
        <button onClick={handlePrevious} className="previous">
          PREVIOUS
        </button>
        <button onClick={handleNext} className="next">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Packages;
