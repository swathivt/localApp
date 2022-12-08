import { NavBar } from "../../components/sections/navBar";
import { Footer } from "../../components/sections/footer.js";

import { Container, Row } from "react-bootstrap";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MyAccount extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container fluid="md" >
          <Row>
          <div className="myAccountContent">
            <div className="btn-toolbar">
              <Link className="myAccountLink">My Preferences</Link>
              <Link className="myAccountLink" to="/user/myRequests">
                My Requests
              </Link>
            </div>
            <div className="btn-toolbar">
              <Link className="myAccountLink">My Events </Link>
              <Link className="myAccountLink" to="/user/myRequests">
                My Services
              </Link>
            </div>
          </div>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
