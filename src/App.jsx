import "./Assets/CSS/All.css";
import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/transactions" element={Home} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
