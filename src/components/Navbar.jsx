import React from "react";
import "./navbar.css";
import CustomMenu from "./CustomMenu";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="/" className="title">Isla Mocha</a>
      <CustomMenu />
    </div>
  );
};

export default Navbar;
