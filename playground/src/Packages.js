import React from "react";

function Packages() {
  return (
    <div className="packages">
      <div>
        <img className="packageImage" src="../packages/1.jpg" alt="glee" />
      </div>
      <div className="title"> GLEE PACKAGE </div>
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
        <button onClick={() => alert("PREVIOUS")} className="previous">
          PREVIOUS
        </button>
        <button onClick={() => alert("NEXT")} className="next">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Packages;
