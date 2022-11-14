import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";

const RestaurantListItem = (props) => (
  <li className="restaurantItem">
    <div className="restaurantName">{props.restaurant.name}</div>
    <span className="restaurantRating">{props.restaurant.rating}</span>
    <span>Rating</span>
  </li>
);

export class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [] };
  }

  render() {
    return (
      <>
        <h3>Restaurants </h3>
        <ul id="restaurants">{this.restaurantsList()}</ul>
      </>
    );
  }

  restaurantsList() {
    return this.state.restaurants.map(function (currentRestaurant, i) {
      return <RestaurantListItem restaurant={currentRestaurant} key={i} />;
    });
  }

  componentDidMount() {
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .get("http://localhost:5000/user", {  })
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
}
