import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Footer } from "../../components/sections/footer.js";
import { NavBar } from "../../components/sections/navBar";



export class UpdateRequest extends Component {
  constructor(props) {
    super();
     // console.log("Print id: " + this.props.match.params.id);
    //console.log("*******###*****" + this.props._id);
    this.state = {
      title: "",
      description: "",
      category: "",
      cost: "Contact",
      //amount: "",
      startDate: "",
      endDate: "",
      location: "",
      
    };
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onLocation = this.onChangeLocation.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onChangeTitle(currObj) {
    console.log(currObj.target.value);
    this.setState({ title: currObj.target.value });
  }

  onChangeDescription(currObj) {
    console.log(currObj.target.value);
    this.setState({ description: currObj.target.value });
  }

  onChangeCategory(currObj) {
    console.log(currObj.target.value);
    this.setState({ category: currObj.target.value });
  }

  onChangeCost(currObj) {
    console.log(currObj.target.value);
    this.setState({ cost: currObj.target.value });
  }

  onChangeStartDate(currObj) {
    console.log(currObj.target.value);
    this.setState({ startDate: currObj.target.value });
  }
  onChangeEndDate(currObj) {
    console.log(currObj.target.value);
    this.setState({ endDate: currObj.target.value });
  }

  onChangeLocation(currObj) {
    console.log(currObj.target.value);
    this.setState({ location: currObj.target.value });
  }

  // onChangeAmount(currObj) {
  //   console.log(currObj.target.value);
  //   this.setState({ amount: currObj.target.value });
  // }

  handleSubmit(e) {
    e.preventDefault();

    console.log("## " + this.state.title);
    const userPostRequest = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      cost: this.state.cost,
      //amount: this.state.amount,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      location: this.state.location,
    };
    console.log("TEST:" + JSON.stringify(userPostRequest));

    // axios
    //   .post("http://localhost:5000/createRequest", userPostRequest)
    //   .then((res) => {
    //     console.log("****" + res.data);
    //     // console.log("****URL: " + JSON.res.data.id);
    //   });
    // this.setState({
    //   title: "",
    //   description: "",
    //   category: "",
    //   cost: "",
    //   //amount: "",
    //   startDate: "",
    //   endDate: "",
    //   location: "",
    // });
  }

  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>Edit Request</h1>
          <p>Update Request's Info</p>
          <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
          </Link>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Title:</Form.Label>

              <Form.Control
                type="title"
                value={this.state.title}
                onChange={this.onChangeTitle}
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description:</Form.Label>

              <Form.Control
                type="description"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Category</Form.Label>
              <Form.Select
                onChange={this.onChangeCategory}
                value={this.state.category}
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
                onChange={this.onChangeCost}
                value="Free"
                type="radio"
                label="Free"
                name="cost"
                id="freeId"
                checked={this.cost === "Free"}
              />
              <Form.Check
                inline
                onChange={this.onChangeCost}
                value="Contact"
                type="radio"
                label="Please Contact"
                name="cost"
                id="pleaseContact"
                checked={this.cost === "Contact"}
              />
              <Form.Check
                inline
                onChange={this.onChangeCost}
                value="Price"
                type="radio"
                name="cost"
                label="Price"
                id="price"
                checked={this.cost === "Price"}
              />
              {/* <Form.Control
                  type="amount"
                  value={this.state.amount}
                  onChange={this.onChangeAmount}
                 
                /> */}
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend">Select date:</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend">Start date</Form.Label>
              <Form.Control
                type="date"
                value={this.state.startDate}
                onChange={this.onChangeStartDate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label as="legend">End date</Form.Label>
              <Form.Control
                type="date"
                value={this.state.endDate}
                onChange={this.onChangeEndDate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Add Location:</Form.Label>
              <Form.Control
                type="location"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </Form.Group>
            <Button variant="success" >Update Request</Button>
          </Form>
        </Container>
        <Footer />
      </>
    );
  }
}
