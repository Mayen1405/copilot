import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-background" />
      <div className="landing-content">
        <h1 className="landing-title">Bienvenido a Casa Mia</h1>
        <div className="landing-buttons">
          <button
            className="landing-button"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </button>
          <button
            className="landing-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};