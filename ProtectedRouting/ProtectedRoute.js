import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
import NavBar from "./NavBar";
import Blog from "./Blog";
import Protected from "./Protected";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <BrowserRouter>
      <NavBar />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}>
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}>
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/blogs"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Blogs />
            </Protected>
          }
        />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoute;
