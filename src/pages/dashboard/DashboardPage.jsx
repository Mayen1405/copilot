import React from "react";
import { Navbar } from "../../components/nav/navbar";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import "./DashboardPage.css";

export const DashboardPage = () => {
  const { isLogged, username } = useUserDetails();

  if (!isLogged) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-background" />
        <Navbar />
        <div className="content-container">
          <h1>Por favor, inicia sesión para acceder al contenido.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-background" />
      <Navbar />
      <div className="content-container">
        <h1>Bienvenido, {username}</h1>
      </div>
    </div>
  );
};