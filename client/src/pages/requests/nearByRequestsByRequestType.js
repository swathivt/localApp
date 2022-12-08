import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { NavBar } from "../../components/sections/navBar";
import { Footer } from "../../components/sections/footer";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export function NearByRequestsByRequestType(props) {
  const { requestType } = useParams(); // Parameters to this component
  const [usrRequests, setUsrRequests] = useState([]);
  useEffect(function () {
    getUsrRequestsList();
    console.log("Service Type:" + requestType);
  }, []);

  async function getUsrRequestsList() {
    try {
      const response = await axios.get(
        "http://localhost:5000/getOtherPeopleRequestsByReqType/" + requestType
      );

      if (response.data.statusCode === "0") {
        setUsrRequests(response.data.reqResults);
      } else {
        console.log("Some thing went wrong.....Required error handling...");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <NavBar />
      <Container fluid="sm">
        <div className="pageTitle">
          <h1>Near By Requests - {requestType}</h1>
        </div>
        {usrRequests.map((usrRequest) => ( 
          
            
            <Row>
              <div className="listItem">
                <div className="listItemHeader">
                  {/* <strong>Title: </strong> */}
                  <strong>{usrRequest.title}</strong>
                </div>
                <div className="listItemContent">
                  <Row>
                    <Col md={4}>
                    <strong>category:</strong>

                      {usrRequest.category}
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                      <strong>cost: </strong>
                      {usrRequest.cost}
                    </Col>
                   
                  </Row>
                  <Row>
                    <Col md={4}>
                      <strong>Start Date: </strong>
                      {usrRequest.startDate}
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                      <strong>End Date: </strong>
                      {usrRequest.endDate}
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <strong>Description: </strong>
                    </Col>
                    <Col md={{ span: 8, offset: 1 }}>
                      {usrRequest.description}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <strong>Address: </strong>
                      {usrRequest.locationAddress}
                    </Col>
                  </Row>
                </div>
              </div>

             
            
            </Row>
          
        ))}

       
      </Container>
      <Footer />
    </div>
  );
}
