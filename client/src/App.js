import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from "./components/sections/footer.js";
import { Home } from "./pages/home.js";
import { Secured } from "./pages/secured.js";
import { SignUp } from "./pages/signup.js";
import { Login } from "./pages/login.js";
import { MyAccount } from "./pages/user/myAccount.js";

import { Logout } from "./pages/logout.js";
import { MyRequest}  from "./pages/user/myRequests.js";
import { UpdateRequest}  from "./pages/user/updateRequest";

import { ContactUs } from "./pages/contactus.js";
import { CreateRequest } from "./pages/request/create.js";


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
        <Route path="/user/myAccount" element={<MyAccount />} />
        <Route path="/user/myRequests" element={<MyRequest />} />
        <Route path="/user/updateRequest/:id" element={<UpdateRequest />} />
        


        <Route path="/logout" element={<Logout />} />
        <Route path="/request/create" element={<CreateRequest />} />

        <Route path="/contactus" element={<ContactUs />} />
       

        
      </Routes>

      {/* <Footer />  */}
    </>
  );
}

export default App;
