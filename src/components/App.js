import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        </nav>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about/*"element={<About/>} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;