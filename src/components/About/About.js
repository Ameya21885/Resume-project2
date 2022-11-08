import React from "react";
import { Link, Outlet } from "react-router-dom";
import Common from "../common/Common";
import AboutData from "../data/About.json";

const About = (props) => {
  return (
    <>
      About
      {AboutData.map((about) => {
        return (
          <>
            <Common
              name={about.heading}
              p1={about.p1}
              p2={about.p2}
              url={about.url}
            />
          </>
        );
      })}
      <div>
        <nav>
          <Link to="one">One</Link>
          <Link to="two">Two</Link>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default About;
