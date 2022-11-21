import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import { UpdateRequest } from "./updateRequest";
import { NavBar } from "../../../components/sections/navBar";
import { Footer } from "../../../components/sections/footer";
import { Button, Container, Table } from "react-bootstrap";

export const MyRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(function () {
   

    getRequestsList();
  }, []);

  async function getRequestsList() {
    try {
      const response = await axios.get("http://localhost:5000/requests");
      setRequests(response.data.requests);
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleDeletReq(requestID) {
    console.log("Delete ID: " + requestID);

    console.log("Delete endpoint:" + "http://localhost:5000/deleteUserRequest/" + requestID);
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .delete("http://localhost:5000/deleteUserRequest/" + requestID)
      .then((response) => {
        console.log("RESPONSE from /user : " + JSON.stringify(response.data));

      apiMgr.get("http://localhost:5000/requests").then((response) => {
          setRequests(response.data.requests); })
        .catch (function (error) {
          console.log("error", error);
        })
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  return (
    <div>
      <NavBar />
      <Container>
        <div className="requestTable">
          <div className="headerLink">
            <div>
              <h3>My Requests</h3>
            </div>

            <div>
              <Button variant="warning" href="/user/createRequest" size="lg">
                Create Request
              </Button>
            </div>
          </div>
          <Table striped bordered hover  responsive="sm">
            <thead>
              <tr>
                <th className="TableHeading">Title</th>
                <th>Description</th>
                <th>Category</th>

                <th>Cost</th>
                {/* <th>Start Date</th>
                <th>End Date</th> */}
                {/* <th>Location</th> */}

                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((userRequest) => (
                <tr>
                  <td>{userRequest.title}</td>
                  <td>{userRequest.description}</td>
                  <td>{userRequest.category}</td>
                  <td>{userRequest.cost}</td>
                  {/* <td>{userRequest.startDate}</td>
                  <td>{userRequest.endDate}</td> */}
                  <td>{userRequest.status}</td>
                  <td>
                    <Link to={"/user/updateRequest/" + userRequest._id}>
                      <Button variant="warning">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeletReq(userRequest._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
