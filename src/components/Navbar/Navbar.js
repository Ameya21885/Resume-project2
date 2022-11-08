import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
