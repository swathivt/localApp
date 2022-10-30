import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";
import { Restaurants } from "../components/restaurants.js";

export class Home extends React.Component {
  render() {
    return (
      <div id="pageContainer">
        <NavBar />
        <div className="container">
          <Restaurants />
        </div>
        <Footer />
      </div>
    );
  }
}
