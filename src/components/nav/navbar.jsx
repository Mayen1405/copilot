import React from "react";
import { useNavigate } from "react-router-dom";

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <NavButton text="Settings" onClickHandler={() => navigate("/settings")} />
      <NavButton text="Profile" onClickHandler={() => navigate("/profile")} />
    </div>
  );
};