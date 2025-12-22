import React from "react";
import { Home, HelpCircle, ShoppingCart, CircleUser } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();

  //console.log(cartItems);

  return (
    <>
      <header className=" fixed top-0 left-0 w-full bg-white border-b border-gray-50 z-50 shadow-md ">
        <div className="max-w-7xl mx-auto px-35 shadow-cyan-900">
          <nav className="flex items-center justify-between h-24">
            <a href="/">
              <img
                src="https://caledonkababs.com/static/media/logo.dc18dac3a4d547f493ef.png"
                alt="logo"
                className="w-20 h-16"
              />
            </a>

            <ul className=" font-semibold  hidden md:flex gap-x-8 text-gray-600">
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                <Home size={18} />
                Home
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                <HelpCircle size={18} />
                Help
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                <ShoppingCart size={18} /> <Link to="/cart">Cart</Link>
              </li>
            </ul>

            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
              <CircleUser size={18} /> Sign In
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
