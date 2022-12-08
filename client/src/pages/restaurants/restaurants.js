import React from "react";
import { Button, Container, Table, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavBar } from "../../components/sections/navBar";
import { Footer } from "../../components/sections/footer";

const RestaurantListItem = (props) => (
  <li className="restaurantItem">
    <div className="restaurantName">
      <Link>{props.restaurant.name}</Link>
    </div>
    <span className="restaurantRating">{props.restaurant.rating}</span>{" "}
    <FontAwesomeIcon className="ratingStar" icon="fas fa-star" size="1x" />
    <span className="rating">Rating</span>
    {/* <span>
      {" "}
      <img src={props.restaurant.icon} width="50px" height="40px" />{" "}
    </span> */}
  </li>
);

export class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [] };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container fluid="md">
          <div className="pageTitle">
            <h1>Near By Restaurants</h1>
          </div>
          <div className="headerLink">
            <Button className="buttonLA" variant="flat" href="/" size="lg">
              <FontAwesomeIcon icon="fa-solid fa-angles-left" /> Back
            </Button>
          </div>
          {this.restaurantsList()}
        </Container>
      </div>
      // { <div>
      //   <ul id="restaurants" className="restaurantList">{this.restaurantsList()}</ul>
      // </div> }
    );
  }

  componentDidMount() {
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .get("http://localhost:5000/user", {})
      .then((response) => {
        //this.setState({ restaurants: response.data.restaurants.results });
        console.log("RESPONSE from /user : " + JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    apiMgr
      .get("http://localhost:5000/restaurants", { withCredentials: true })
      .then((response) => {
        this.setState({ restaurants: response.data.restaurants.results });
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  restaurantsList() {
    return this.state.restaurants.map(function (currentRestaurant, i) {
      return <RestaurantListItem restaurant={currentRestaurant} key={i} />;
    });
  }
}
