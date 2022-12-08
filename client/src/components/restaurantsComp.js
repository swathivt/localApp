import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantListItem = (props) => (
  <Col>
    <div className="restaurantItem">
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
    </div>
  </Col>
);

export class RestaurantsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [] };
  }

  render() {
    return (
      <div>
        <div className="componentTitle">
          <h4>Near By Restaurants</h4>
        </div>
        <Row xs={1} md={4}>
          {this.restaurantsList()}
          <Col>
            <Link to={"/restaurants"} title="more..">
              <FontAwesomeIcon icon="fa-solid fa-angles-right" size="2x" />
            </Link>
          </Col>
        </Row>
      </div>
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
      if (i < 3) {
        return <RestaurantListItem restaurant={currentRestaurant} key={i} />;
      }
    });
  }
}
