import {
  Home,
  HelpCircle,
  ShoppingCart,
  CircleUser,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  // const { cartItems } = useCart();
  //console.log(cartItems);
  const { openAuth } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className=" fixed top-0 left-0 w-full bg-white border-b border-gray-50 z-40 shadow-md ">
        <div className="max-w-7xl mx-auto px-4 shadow-cyan-900">
          <nav className="flex items-center justify-between h-20">
            <a href="/">
              <img
                src="https://caledonkababs.com/static/media/logo.dc18dac3a4d547f493ef.png"
                alt="logo"
                className="w-20 h-16"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-8 text-gray-600 font-semibold">
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                <Home size={18} /> <Link to="/"> Home</Link>
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                <HelpCircle size={18} />
                <Link to="/help"> Help</Link>
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
                <ShoppingCart size={18} />
                <Link to="/cart"> Cart </Link>
              </li>
            </ul>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
              <CircleUser size={18} />{" "}
              <button onClick={openAuth}>Sign In</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t">
              <ul className="flex flex-col p-4 gap-4 text-gray-600 font-semibold">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/help" onClick={() => setMenuOpen(false)}>
                  Help
                </Link>
                <Link to="/cart" onClick={() => setMenuOpen(false)}>
                  Cart
                </Link>
                <button
                  onClick={() => {
                    openAuth();
                    setMenuOpen(false);
                  }}
                  className="text-left font-semibold text-gray-600 hover:text-blue-500"
                >
                  Sign In
                </button>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
