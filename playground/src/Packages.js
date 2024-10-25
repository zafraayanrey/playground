import React, { useContext, useState } from "react";
import formatter from "./Helper";
import { Link, NavLink } from "react-router-dom";
import Buttons from "./Buttons";
import { MyContext } from "./MyContext";

function Packages() {
  const [number, setNumber] = useState(1);
  const packages = useContext(MyContext);
  // console.log(text);

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
        <Buttons>
          <NavLink to="/reservation">BOOK NOW!</NavLink>
        </Buttons>
      </div>
    </div>
  );
}

export default Packages;
