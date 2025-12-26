import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuthOpen,
        openAuth: () => setIsAuthOpen(true),
        closeAuth: () => setIsAuthOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
