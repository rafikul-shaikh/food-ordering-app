import React from "react";
import { Home, HelpCircle, ShoppingCart, CircleUser } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="w-full  bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-24">
            <a href="/">
              <img
                src="https://caledonkababs.com/static/media/logo.dc18dac3a4d547f493ef.png"
                alt="logo"
                className="w-16"
              />
            </a>

            <ul className="hidden md:flex gap-x-8 text-gray-600">
              <li className="flex items-center gap-1">
                {/* <span>🏠</span> Home */}
                <Home />
                Home
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle />
                Help
              </li>
              <li className="flex items-center gap-1">
                <ShoppingCart /> Cart
              </li>
            </ul>

            <div className="flex items-center gap-1">
              <CircleUser /> Sign In
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
