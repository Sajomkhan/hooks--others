import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App1.css"

//Pages
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const App1 = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <ul>
          <a href="/">Home</a> <br/>
          <a href="/blogs">Blogs</a> <br/>
          <a href="/contact">Contact</a> <br/>
        </ul>
      </div>
    </BrowserRouter>
  );
};

export default App1;
