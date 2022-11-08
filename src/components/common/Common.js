import React from "react";
import "./common.css";

const Common = (props) => {
  return (
    <>
      <div className="main">
        <div className="first">
          <h1>{props.name}</h1>
          <p>Parragraph {props.p1}</p>
          <p>Parragraph {props.p2}</p>
        </div>
        <div className="second">
          <img src={props.url} alt="img" width="400px" height="250px" />
        </div>
      </div>
    </>
  );
};

export default Common;
