import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";

export class PostRequest extends Component {
  render() {
    return (
      <>
        <NavBar />

        <h1>Post Request</h1>
        <Container>
          <Form>
            <Form.Group className="w-25 formInput" >
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="w-25 formInput">
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="w-25 formInput">
              <Form.Label>Select Category</Form.Label>
              <Form.Select>
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
              <Form.Label as="legend" className="formInput"></Form.Label>
              
              <Form.Check inline type="Radio"  aria-label="radio 2">Free</Form.Check>
              <Form.Check inline type="Radio"  aria-label="radio 2">Please Contact</Form.Check>
              <Form.Check inline type="Radio">$</Form.Check> 
              
              

            </Form.Group>
          </Form>
        </Container>
        <Footer />
      </>
    );
  }
}



