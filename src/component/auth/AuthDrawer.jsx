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
        className="fixed top-0 right-0 h-full w-full sm:w-105 md:w-120
           bg-white z-50 transform transition-transform duration-300 flex flex-col"
      >
        {/* HEADER (FIXED) */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* <h2 className="text-xl font-semibold">
            {mode === "login" ? "Sign In" : "Sign Up"}
          </h2> */}

          <button onClick={closeAuth}>
            <X className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* FIXED DIVIDER */}
        <hr className="border-gray-300" />

        {/* BODY (SCROLLABLE, CHANGES) */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
          {mode === "login" && <LoginForm onSwitch={() => setMode("signup")} />}

          {mode === "signup" && <SignupForm onLogin={() => setMode("login")} />}
        </div>
      </div>
    </>
  );
};

export default AuthDrawer;
