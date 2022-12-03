import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import { UpdateRequest } from "./updateRequest";
import { NavBar } from "../../../components/sections/navBar";
import { Footer } from "../../../components/sections/footer";
import { Button, Container, Table } from "react-bootstrap";

export const myServices = () => {
  const [requests, setServices] = useState([]);

  useEffect(function () {
   

    getServicesList();
  }, []);

  async function getServicesList() {
    try {
      const response = await axios.get("http://localhost:5000/services");
      setServices(response.data.services);
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleDeletSvc(serviceID) {
    console.log("Delete ID: " + serviceID);

    console.log("Delete endpoint:" + "http://localhost:5000/deleteUserService/" + serviceID);
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .delete("http://localhost:5000/deleteUserService/" + serviceID)
      .then((response) => {
        console.log("RESPONSE from /user : " + JSON.stringify(response.data));

      apiMgr.get("http://localhost:5000/services").then((response) => {
          setServices(response.data.services); })
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
        <div className="serviceTable">
          <div className="headerLink">
            <div>
              <h3>My Services</h3>
            </div>

            <div>
              <Button variant="warning" href="/user/createService" size="lg">
                Create Service
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
                <th>Start Date</th>
                <th>End Date</th>
                <th>Location</th>

                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Services.map((userService) => (
                <tr>
                  <td>{userService.title}</td>
                  <td>{userService.description}</td>
                  <td>{userService.category}</td>
                  <td>{userService.cost}</td>
                  <td>{userService.startDate}</td>
                  <td>{userService.endDate}</td>
                  <td>{userService.status}</td>
                  <td>
                    <Link to={"/user/updateService/" + userService._id}>
                      <Button variant="warning">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeletSvc(userService._id);
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
