import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from "./components/sections/footer.js";
import { Home } from "./pages/home.js";
import { Secured } from "./pages/secured.js";
import { SignUp } from "./pages/signup.js";
import { Login } from "./pages/login.js";
import { Logout } from "./pages/logout.js";
import { ContactUs } from "./pages/contactus.js";
import { PostRequest } from "./pages/postrequest.js";

import "./css/style.css";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/secured" element={<Secured />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/PostRequest" element={<PostRequest />} />
      </Routes>

      {/* <Footer />  */}
    </>
  );
}

export default App;
