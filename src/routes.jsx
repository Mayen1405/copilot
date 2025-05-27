import { LandingPage } from "./pages/landing/LandingPage";
import { AuthPage } from "./pages/auth/authPage";
import { ProfilePage } from "./pages/profile/profilePage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { LoginPage } from "./pages/auth/LoginPage";

export const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/auth", element: <LoginPage /> }, // Cambiado para usar LoginPage
  { path: "/register", element: <RegisterPage /> }, // Cambiado para usar RegisterPage
  { path: "/profile", element: <ProfilePage /> },
];