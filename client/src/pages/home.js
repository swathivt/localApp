import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";

export class Home extends React.Component {
  render() {
    return (
      <div className="bodyTag">
        <NavBar />
        <div className="home">
          <h3>Restaurants Listing</h3>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("call");

    const apiMgr = axios.create({ responseType: "json" });
    apiMgr
      .get("http://localhost:5000/", { headers: {} })
      .then((response) => {
        // this.setState({ todos: response.data });
        console.log("succccesssss");
      })
      .catch(function (error) {
        console.log("ooopppppppssssss");
        console.log(error);
      });

    console.log("after call");
  }
}

// export function Header() {

// return (

//         axios.get('http://localhost:5000', {headers : {'content-type' : 'application/json'}})
//         .then(res => console.log(res))
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//           }),
