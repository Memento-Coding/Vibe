import React, { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [decodedToken, setDecodedToken] = useState(null);

  const saveTokenToLocalStorage = (token) => {
    // Guardar el token en el almacenamiento local
    localStorage.setItem("token", token);

    // Decodificar el token
    const decoded = jwt_decode(token);

    // Guardar el token decodificado en el estado del contexto
    setDecodedToken(decoded);
  };

  return (
    <AuthContext.Provider value={{ decodedToken, saveTokenToLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};
