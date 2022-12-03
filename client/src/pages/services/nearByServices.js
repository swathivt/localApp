import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { NavBar } from "../../components/sections/navBar";
import { Footer } from "../../components/sections/footer";
//import Logo from '../Images/logo192.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export function NearByServices(props) {
  const { serviceType } = useParams(); // Parameters to this component

  useEffect(function () {
    console.log("Service Type:" + serviceType);
  });

  return (
    <div>
      <NavBar />
      <Container>
        <div>
          <h1>Near By Services</h1>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
