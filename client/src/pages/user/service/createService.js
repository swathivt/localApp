import axios from "axios";
import React, { useState, useEffect } from "react";
import { json, useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { Footer } from "../../../components/sections/footer";
import { NavBar } from "../../../components/sections/navBar";

export function CreateService(props) {
  const navigate = useNavigate();

  const initialState = {
    title: "",
    description: "",
    category: "",
    cost: "Contact",
    amount: "",
    startDate: "",
    endDate: "",
    locationAddress: "",
  };

  const [userService, setUserService] = useState(initialState);

  //useEffect();

  function handleChange(event) {
    console.log("*&*&*&*: " + [event.target.name]);
    setUserService({ ...userService, [event.target.name]: event.target.value });
  }

  function onChangeCost(event) {
    setUserService({ ...userService, cost: event.target.value });
  }

  function handleCancel() {
    navigate(`/user/myServices`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    async function createUserService() {
      
      const userPostService = {
        title: userService.title,
        description: userService.description,
        category: userService.category,
        cost: userService.cost,
        amount: this.state.amount,
        startDate: userService.startDate,
        endDate: userService.endDate,
        locationAddress: userService.locationAddress,
      };
      console.log("TEST:" + JSON.stringify(userPostService));

      axios
        .post("http://localhost:5000/createService", userPostService)
        .then((res) => {
          console.log("****" + res.data);
          
        });

        setUserService(initialState);
        handleCancel();
    }

    createUserService();
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Create Service</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              name="title"
              value={userService.title}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              name="description"
              value={userService.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Category</Form.Label>
            <Form.Select
              name="category"
              onChange={handleChange}
              value={userService.category}
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
              checked={userService.cost === "Free"}
            />
            <Form.Check
              inline
              onChange={onChangeCost}
              value="Contact"
              type="radio"
              label="Please Contact"
              name="cost"
              id="pleaseContact"
              checked={userService.cost === "Contact"}
            />
            <Form.Check
              inline
              onChange={onChangeCost}
              value="Price"
              type="radio"
              name="cost"
              label="Price"
              id="price"
              checked={userService.cost === "Price"}
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
          <Button variant="success"  type="submit">
            Update Service
          </Button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </Form>
      </Container>
    </div>
  );
}
