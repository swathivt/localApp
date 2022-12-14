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

    console.log(
      "Delete endpoint:" +
        "http://localhost:5000/deleteUserRequest/" +
        requestID
    );
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .delete("http://localhost:5000/deleteUserRequest/" + requestID)
      .then((response) => {
        console.log("RESPONSE from /user : " + JSON.stringify(response.data));

        apiMgr
          .get("http://localhost:5000/requests")
          .then((response) => {
            setRequests(response.data.requests);
          })
          .catch(function (error) {
            console.log("error", error);
          });
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  function handlePublish(requestID) {
    console.log("Publishing ID: " + requestID);

    console.log(
      "Publish Request endpoint:" +
        "http://localhost:5000/publishUserRequest/" +
        requestID
    );
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .patch("http://localhost:5000/publishUserRequest/" + requestID)
      .then((response) => {
        console.log("RESPONSE from /user : " + JSON.stringify(response.data));

        apiMgr
          .get("http://localhost:5000/requests")
          .then((response) => {
            setRequests(response.data.requests);
          })
          .catch(function (error) {
            console.log("error", error);
          });
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  return (
    <div>
      <NavBar />
      <Container fluid = "md">
        <div className="requestTable">
        <div className="pageTitle">
          <h1>My Requests</h1>
        </div>
        
          <div className="headerLink" >
            <div>
              <Button className="buttonLA" variant="flat" href="/user/createRequest" size="lg">
                Create Request
              </Button>
            </div>
           
          </div>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th className="TableHeading">Title</th>
                <th>Description</th>
                <th>Category</th>

                <th>Cost</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Location</th>

                <th colSpan={1}>Status</th>
                <th colSpan={1}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((userRequest) => (
                <tr>
                  <td>{userRequest.title}</td>
                  <td>{userRequest.description}</td>
                  <td>{userRequest.category}</td>
                  <td>{userRequest.cost}</td>
                  <td>{userRequest.startDate}</td>
                  <td>{userRequest.endDate}</td>
                  <td>{userRequest.locationAddress}</td>
                  <td>{userRequest.status}</td>
                  <td>
                  <div class="btn-toolbar" className="myRequestsButtons" >
                    <div>
                      {userRequest.status == "Draft" && (
                        <Button
                          className="publishButton"
                          variant="flat"
                          onClick={() => {
                            handlePublish(userRequest._id);
                          }}
                        >
                          Publish
                        </Button>
                      )}{" "}
                      </div>
                    <div>
                      <Link to={"/user/updateRequest/" + userRequest._id}>
                        <Button className="editButton" variant="flat">Update</Button>
                      </Link>{" "}
                    </div>
                    <div>
                      <Button
                        className="deleteButton"
                        variant="flat"
                        onClick={() => {
                          handleDeletReq(userRequest._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                    </div>
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
