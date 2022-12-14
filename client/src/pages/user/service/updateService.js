import axios from "axios";
import React, { useState, useEffect } from "react";
import { json, useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { Footer } from "../../../components/sections/footer";
import { NavBar } from "../../../components/sections/navBar";

export function UpdateRequest(props) {
  const { id } = useParams(); // Parameters to this component
  const navigate = useNavigate();

  const initialState = {
    title: "",
    description: "",
    category: "",
    cost: "Contact",
    //amount: "",
    startDate: "",
    endDate: "",
    locationAddress: "",
  };

  const [userRequest, setUserRequest] = useState(initialState);

  useEffect(
    function () {
      async function updateUserRequest() {
        //console.log("before calling NODE: " + "http://localhost:5000/getUserRequest/" + id);

        axios
          .get("http://localhost:5000/getUserRequest/" + id)
          .then((res) => {
            setUserRequest(res.data.request[0]);
            console.log("***" + JSON.stringify(userRequest));
          })
          .catch((err) => {
            console.error(err);
          });
      }

      updateUserRequest();
    },
    [props]
  );

  function handleChange(event) {
    console.log("*&*&*&*: " + [event.target.name]);
    setUserRequest({ ...userRequest, [event.target.name]: event.target.value });
  }

  function onChangeCost(event) {
    setUserRequest({ ...userRequest, cost: event.target.value });
  }

  function handleCancel() {
    navigate(`/user/myRequests`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    async function updateUserRequest() {

        const userPostRequest = {
            title: userRequest.title,
            description: userRequest.description,
            category: userRequest.category,
            cost: userRequest.cost,
            //amount: this.state.amount,
            startDate: userRequest.startDate,
            endDate: userRequest.endDate,
            locationAddress: userRequest.locationAddress,      
          };

        axios
          .patch("http://localhost:5000/updateRequest/" + id, userPostRequest)
          .then((res) => {
           // setUserRequest(res.data.request[0]);
            console.log("***" + JSON.stringify(res.data));
            handleCancel();
          })
          .catch((err) => {
            console.error(err);
          });
      }


      
      updateUserRequest();
}

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Edit Request</h1>
        {/* <Form onSubmit={(e) => {
            submitHandler(e);
            updateHandler(e);
            closeHandler(e);
        }}> */}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              name="title"
              value={userRequest.title}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control name="description" value={userRequest.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
              <Form.Label>Select Category</Form.Label>
              <Form.Select name="category"
                onChange={handleChange}
                value={userRequest.category}
              >
                <option value="1">Electrician</option>
                <option value="2">Plumber</option>
                <option value="3">Carpenter</option>
                <option value="4">Hairs Stylist and Barbers</option>
                <option value="5">Beautician</option>
                <option value="6">Bakers</option>
                <option value="7">Nail Technician</option>
                <option value="8">Painter</option>
                <option value="9">Chef</option>
                <option value="10">Cleaner</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend" />
              <Form.Check
                inline
                onChange={onChangeCost}
                value="Free"
                type="radio"
                label="Free"
                name="cost"
                id="freeId"
                checked={userRequest.cost === "Free"}
              />
              <Form.Check
                inline
                onChange={onChangeCost}
                value="Contact"
                type="radio"
                label="Please Contact"
                name="cost"
                id="pleaseContact"
                checked={userRequest.cost === "Contact"}
              />
              <Form.Check
                inline
                onChange={onChangeCost}
                value="Price"
                type="radio"
                name="cost"
                label="Price"
                id="price"
                checked={userRequest.cost === "Price"}
              />
              </Form.Group>

              {/* <Form.Group>
              <Form.Label as="legend">Select date:</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend">Start date</Form.Label>
              <Form.Control
                type="date"
                value={userRequest.startDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend">End date</Form.Label>
              <Form.Control
                type="date"
                value={userRequest.endDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Add Location:</Form.Label>
              <Form.Control
                type="locationAddress"
                value={userRequest.locationAddress}
                onChange={handleChange}
              />
            </Form.Group> */}
          <Button variant="success" type="submit">Update Request</Button>

          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}
