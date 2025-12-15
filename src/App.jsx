import "./App.css";
import Navbar from "./component/navbar";
import Catagories from "./component/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Catagories />
      </Router>
    </>
  );
}

export default App;
