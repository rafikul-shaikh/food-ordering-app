import { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Backdrop from "./Backdrop";

const AuthDrawer = () => {
  const { isAuthOpen, closeAuth } = useAuth();
  const [mode, setMode] = useState("login");

  if (!isAuthOpen) return null;

  return (
    <>
      <Backdrop onClose={closeAuth} />

      <div
        className="fixed top-0 right-0 h-full w-100 bg-white z-50
                   transform transition-transform duration-300"
      >
        <button onClick={closeAuth} className="absolute top-4 right-4">
          <X />
        </button>

        <div className="p-6 mt-10">
          {mode === "login" ? (
            <LoginForm onSwitch={() => setMode("signup")} />
          ) : (
            <SignupForm onSwitch={() => setMode("login")} />
          )}
        </div>
      </div>
    </>
  );
};

export default AuthDrawer;
