import React from "react";
import Common from "../common/Common";
import HomeData from "../data/Home.json";

const Home = (props) => {
  return (
    <>
      Home
      {HomeData.map((home) => {
        return (
          <>
            <Common
              name={home.heading}
              p1={home.p1}
              p2={home.p2}
              url={home.url}
            />
          </>
        );
      })}
    </>
  );
};

export default Home;
