import React, { useState } from "react";
import { Login } from "../../components/login";
import { Register } from "../../components/register";
import "./AuthPage.css";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <div className="auth-background" />
      <div className="auth-form">
        {isLogin ? <Login /> : <Register />}
        <p onClick={toggleAuthMode} className="auth-toggle">
          {isLogin
            ? "¿No tienes cuenta? Regístrate aquí"
            : "¿Ya tienes cuenta? Inicia sesión aquí"}
        </p>
      </div>
    </div>
  );
};