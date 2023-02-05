import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "white",
      fontSize: "50px"
    };
  };
  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/home"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        Contact
      </NavLink>
      <NavLink style={navLinkStyles} to={"/"}></NavLink>
    </div>
  );
};

export default Header;
