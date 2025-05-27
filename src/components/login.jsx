import React, { useState } from "react";
import { useLogin } from "../shared/hooks/useLogin";
import { Input } from "./input";

export const Login = () => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formState.email, formState.password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Input
        field="email"
        label="Correo electrónico"
        value={formState.email}
        onChangeHandler={(value) => handleInputChange({ target: { name: "email", value } })}
        type="email"
      />
      <Input
        field="password"
        label="Contraseña"
        value={formState.password}
        onChangeHandler={(value) => handleInputChange({ target: { name: "password", value } })}
        type="password"
      />
      <button type="submit" disabled={isLoading}>
        Iniciar sesión
      </button>
    </form>
  );
};