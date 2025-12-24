import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isOpen,
        openAuth: () => setIsOpen(true),
        closeAuth: () => setIsOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
