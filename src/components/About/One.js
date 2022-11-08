import React from "react";
import Common from "../common/Common";
import AboutOneData from "../data/AboutOne.json";

const One = () => {
  return (
    <div>
      One
      {AboutOneData.map((aboutone) => {
        return (
          <>
            <Common
              name={aboutone.heading}
              p1={aboutone.p1}
              p2={aboutone.p2}
              url={aboutone.url}
            />
          </>
        );
      })}
    </div>
  );
};

export default One;
