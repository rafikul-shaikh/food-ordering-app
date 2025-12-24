import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import CartToast from "./component/CartToast";
import CartSummaryBar from "./component/CartSummaryBar";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <CartToast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="sign" element={<SignIn}/> */}
      </Routes>
      <CartSummaryBar />
    </>
  );
}
export default App;
