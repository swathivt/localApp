import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";
import { Restaurants } from "../components/restaurants.js";
import { NearByServicesComp } from "../components/nearByServicesComp.js";
import { NearByRequestsComp } from "../components/nearByRequestsComp.js";

import { Banner } from "../components/banner.js";

export class Home extends React.Component {
  render() {
    return (
      <div id="pageContainer">
        <NavBar />

        <div className="container">
          <h3 className="heading">Welcome to LocalApp</h3>
          <h4>Near by Restaurants</h4>
          {/* <Restaurants /> */}

          <h4>Near by Deals</h4>

          {/* <h4>Near by Services</h4> */}
          <NearByServicesComp />

          <h4>Near By Requests</h4>
          <NearByRequestsComp />
        </div>
        <Footer />
      </div>
    );
  }
}
