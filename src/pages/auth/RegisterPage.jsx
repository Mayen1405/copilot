import React from "react";
import { Register } from "../../components/register";
import "./AuthPage.css";

export const RegisterPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-background" />
      <Register />
    </div>
  );
};