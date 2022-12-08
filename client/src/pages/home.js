import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";
import { RestaurantsComp } from "../components/restaurantsComp.js";
import { NearByServicesComp } from "../components/nearByServicesComp.js";
import { NearByRequestsComp } from "../components/nearByRequestsComp.js";

import { Banner } from "../components/banner.js";

export class Home extends React.Component {
  render() {
    return (
      <div id="pageContainer">
        <NavBar />

        <div className="container">
          <div className="pageTitle">
            <h1>Welcome to LocalApp</h1>
          </div>
          {/* <div style={{ marginTop: 50 }}>
            <RestaurantsComp />
          </div> */}
          <hr/>
          <div style={{ marginTop: 50 }}>
            <NearByRequestsComp />
          </div>
          <hr/>
          <div style={{ marginTop: 50 }}>
            <NearByServicesComp />
          </div>
          <hr/>
         
          {/* <div style={{ marginTop: 50 }}>
            <h4>Near by Deals</h4>
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}
