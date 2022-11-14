import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";
import { Restaurants } from "../components/restaurants.js";
import { Banner } from "../components/banner.js";
import { Login } from "./login.js";


export class Secured extends React.Component {
  render() {
    if(true) {
      // Forward to Login page if user session is not available
      return <Navigate replace to="/logIn" />;
    }
    return (
      
      <div id="pageContainer">
        <NavBar />
        {/* <Banner /> */}
        <div className="container">
          <h1>Admin</h1>
          
        </div>
        <Footer />
      </div>
    );
  }
}
