import React from "react";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/sections/footer.js";
import { Home } from "./pages/home.js";
import { SignUp } from "./pages/signup.js";
import { Login } from "./pages/login.js";
import { Logout } from "./pages/logout.js";
import { ContactUs } from "./pages/contactus.js";

import "./css/style.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      {/* <Footer />  */}
    </>
  );
}

export default App;
