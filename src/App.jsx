import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import CartToast from "./component/CartToast";
import CartSummaryBar from "./component/CartSummaryBar";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Team from "./pages/Team";
import ForgotPassword from "./pages/ForgotPassword";
import AuthDrawer from "./component/auth/AuthDrawer";
import LegalPolicies from "./pages/LegalPolicies";

function App() {
  return (
    <>
      <Navbar />
      <AuthDrawer />
      <CartToast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/policies/:type" element={<LegalPolicies />} />
      </Routes>
      <CartSummaryBar />
    </>
  );
}
export default App;
