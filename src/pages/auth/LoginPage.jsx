import React from "react";
import { Login } from "../../components/login";
import "./AuthPage.css";

export const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-background" />
      <Login />
    </div>
  );
};