
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/sections/navBar.js";
import { Footer } from "./components/sections/footer.js";
import { Header } from "./pages/home.js";
import { SignUp } from "./pages/signup.js";
import { Login } from "./pages/login.js";

import "./css/style.css";

function App() {
  return (
    <>
     
        <NavBar />
       
           <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logIn" element={<Login />} /> 
          </Routes>  
          
         
           {/* <Footer />  */}
        
    </>
  );
}

export default App;
