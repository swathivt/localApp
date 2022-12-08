import axios from "axios";
import React, { useState, useEffect } from "react";
import { json, useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Stack } from "react-bootstrap";

import { Footer } from "../../../components/sections/footer";
import { NavBar } from "../../../components/sections/navBar";

export function CreateRequest(props) {
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

  const [userRequest, setUserRequest] = useState(initialState);

  //  useEffect();

  function handleChange(event) {
    console.log("*&*&*&*: " + [event.target.name]);
    setUserRequest({ ...userRequest, [event.target.name]: event.target.value });
  }

  //   const dateFromDateString = (dateString) => {
  //     return(new Date(dateString)).format('YYYY-MM-DDT00:00:00.000');
  // };

  // const dateForPicker = (dateString) => {
  //   return (new Date(dateString)).format('YYYY-MM-DD')
  // };

  function onChangeCost(event) {
    setUserRequest({ ...userRequest, cost: event.target.value });
  }

  function handleCancel() {
    navigate(`/user/myRequests`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    async function createUserRequest() {
      const userPostRequest = {
        title: userRequest.title,
        description: userRequest.description,
        category: userRequest.category,
        cost: userRequest.cost,
        amount: userRequest.amount,
        startDate: userRequest.startDate,
        endDate: userRequest.endDate,
        locationAddress: userRequest.locationAddress,
      };
      console.log("TEST:" + JSON.stringify(userPostRequest));

      axios
        .post("http://localhost:5000/createRequest", userPostRequest)
        .then((res) => {
          console.log("****" + res.data);
        });

      setUserRequest(initialState);
      handleCancel();
    }

    createUserRequest();
  }

  return (
    <div>
      <NavBar />
      <Container fluid="md">
        {/* <h3 className="request">Create Request</h3> */}
        <div className="pageTitle">
          <h1>Create Request</h1>
        </div>
        <Form onSubmit={handleSubmit} className="w-50">
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
            <Form.Control
              name="description"
              value={userRequest.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Category</Form.Label>
            <Form.Select
              name="category"
              onChange={handleChange}
              value={userRequest.category}
            >
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="hairs stylist and barbers">
                Hairs Stylist and Barbers
              </option>
              <option value="beautician">Beautician</option>
              <option value="baker">Bakers</option>
              <option value="nail technician">Nail Technician</option>
              <option value="painter">Painter</option>
              <option value="chef">Chef</option>
              <option value="cleaner">Cleaner</option>
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

          <Form.Group>
            <Form.Label as="legend">Select date:</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label >Start date</Form.Label>
            <Form.Control
              name="startDate"
              type="date"
              value={userRequest.startDate}
              onChange={handleChange}
              // type="startDate"
              // value={startDate ? dateForPicker(startDate) : ''}
              // onfocus={dateForPicker(startDate)}
              // placeholder={startDate ? dateForPicker(startDate) : "dd/mm/yyyy"}
              // onChange={(e) => (dateFromDateString(e.target.value))}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label >End date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={userRequest.endDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{marginTop:20}}>
            <Form.Label>Add Location:</Form.Label>
            <Form.Control
              type="locationAddress"
              name="locationAddress"
              value={userRequest.locationAddress}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="headerLink" style={{margin:20 }}>
            <Stack direction="horizontal" gap={3}>
              <Button variant="flat" type="submit" className="buttonLA">
                Create
              </Button>
              <Button
                variant="flat"
                type="cancel"
                onClick={handleCancel}
                className="buttonLA"
              >
                Cancel
              </Button>
            </Stack>
          </div>
        </Form>
      </Container>
      <Footer/>
    </div>
  );
}
