import { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const AuthDrawer = () => {
  const { isAuthOpen, closeAuth } = useAuth();

  return (
    <>
      <div
        className="fixed top-0 right-0 h-full w-[400px] bg-white z-50
                   transform transition-transform duration-300"
      >
        <button className="absolute top-4 right-4">
          <X />
        </button>

        <div className="p-6 mt-10"></div>
      </div>
    </>
  );
};

export default AuthDrawer;
