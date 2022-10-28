import React from "react";
import axios from "axios";
import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer.js";

export class Home extends React.Component {
  render() {
    return (
      <div id="pageContainer">
        <NavBar />
        <div className="container">
          <h3>Restaurants Listing</h3>
        </div>
        {/* <Footer />  */}
      </div>
    );
  }

  componentDidMount() {
    console.log("call");

    const apiMgr = axios.create({ responseType: "json" });
    apiMgr
      .get("http://localhost:5000/")
      .then((response) => {
        // this.setState({ todos: response.data });

        console.log("succccesssss : " + response.data);
      })
      .catch(function (error) {
        console.log("ooopppppppssssss");
        console.log(error.response.data);

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
