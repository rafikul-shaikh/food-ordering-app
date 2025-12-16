import "./App.css";
import Navbar from "./component/navbar";
import CategorySlider from "./component/CategorySlider";
import SearchBar from "./component/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <CategorySlider />
        <SearchBar />
      </Router>
    </>
  );
}

export default App;
