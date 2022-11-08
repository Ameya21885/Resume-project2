import React from "react";
import Common from "../common/Common";
import AboutTwoData from "../data/AboutTwo.json";

const Two = () => {
  return (
    <div>
      Two
      {AboutTwoData.map((abouttwo) => {
        return (
          <>
            <Common
              name={abouttwo.heading}
              p1={abouttwo.p1}
              p2={abouttwo.p2}
              url={abouttwo.url}
            />
          </>
        );
      })}
    </div>
  );
};

export default Two;
