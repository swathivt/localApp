import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";
import { Restaurants } from "../components/restaurants.js";
import { Banner } from "../components/banner.js";




export class Home extends React.Component {
  render() {
    return (

      
      <div id="pageContainer">
        <NavBar />
        
        <div className="container">
          {}
          <h3 className="heading">Welcome to LocalApp</h3>
          {/* <Restaurants /> */}
         

          
        </div>
        <Footer />
      </div>
    );
  }
}
