import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "../../pages/profile/profilePage";
import { Settings } from "../settings/settings";

export const Content = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};