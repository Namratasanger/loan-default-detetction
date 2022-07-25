import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/home";
import Developers from "./components/developers/developers";
import Predict from "./components/predict/predict";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/developers" element={<Developers />}></Route>
        <Route path="/predict" element={<Predict />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
