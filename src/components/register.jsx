import React, { useState } from "react";
import { useRegister } from "../shared/hooks/useRegister";
import { Input } from "./input";

export const Register = () => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formState.email, formState.password, formState.username);
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
        field="username"
        label="Nombre de usuario"
        value={formState.username}
        onChangeHandler={(value) => handleInputChange({ target: { name: "username", value } })}
        type="text"
      />
      <Input
        field="password"
        label="Contraseña"
        value={formState.password}
        onChangeHandler={(value) => handleInputChange({ target: { name: "password", value } })}
        type="password"
      />
      <Input
        field="confirmPassword"
        label="Confirmar contraseña"
        value={formState.confirmPassword}
        onChangeHandler={(value) => handleInputChange({ target: { name: "confirmPassword", value } })}
        type="password"
      />
      <button type="submit" disabled={isLoading}>
        Registrarse
      </button>
    </form>
  );
};