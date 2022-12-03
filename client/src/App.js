import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Footer } from "./components/sections/footer.js";
import { Home } from "./pages/home.js";
import { Secured } from "./pages/secured.js";
import { SignUp } from "./pages/signup.js";
import { Login } from "./pages/login.js";
import { MyAccount } from "./pages/user/myAccount.js";

import { Logout } from "./pages/logout.js";
import { MyRequest } from "./pages/user/request/myRequests";
import { UpdateRequest } from "./pages/user/request/updateRequest";

import { ContactUs } from "./pages/contactus.js";
import { CreateRequest } from "./pages/user/request/createRequest.js";

import {NearByServicesByServiceType} from "./pages/services/nearByServicesByServiceType.js";
import {NearByServices} from "./pages/services/nearByServices.js";

import {NearByRequestsByRequestType} from "./pages/requests/nearByRequestsByRequestType.js";
import {NearByRequests} from "./pages/requests/nearByRequests.js";


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
        <Route path="/user/createRequest" element={<CreateRequest />} />
        <Route path="/user/updateRequest/:id" element={<UpdateRequest />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contactus" element={<ContactUs />} />
        
        <Route path="/services/nearByServicesByServiceType/:serviceType" element={<NearByServicesByServiceType />} />
        <Route path="/services/nearByServices" element={<NearByServices />} />

        <Route path="/requests/nearByRequestsByRequestType/:requestType" element={<NearByRequestsByRequestType />} />
        <Route path="/requests/nearByRequests" element={<NearByRequests />} />
      </Routes>

      {/* <Footer />  */}
    </>
  );
}

export default App;
