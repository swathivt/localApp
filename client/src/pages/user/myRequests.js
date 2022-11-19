import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UpdateRequest } from "./updateRequest";
import { NavBar } from "../../components/sections/navBar";
import { Footer } from "../../components/sections/footer";
import { Button, Container, Table } from "react-bootstrap";

const RequestListItem = (props) => (
  <tr>
    <td>{props.request.title}</td>
    <td>{props.request.description}</td>
    <td>{props.request.category}</td>
    <td>{props.request.cost}</td>
    <td>{props.request.startDate}</td>
    <td>{props.request.endDate}</td>
    {/* <td>{props.request.startDate.$date.$numberLong}</td>
    <td>{props.request.endDate.$date.$numberLong}</td> */}
    <td>{props.request.userName}</td>
    <td>{props.request.status}</td>
    <td>
      {/* <Link to="/updateRequest">
        <Button variant="warning" >update</Button>
      </Link> */}

               {/* <Link to="/user/updateRequest">
                    My Requests
                </Link> */}
      <Button variant="warning" href="/user/updateRequest">
        update
      </Button>
    </td>
    <td>
      {/* onClick={onDelete(props.request._id)} */}
      <Button variant="danger" onClick={() => this.onDelete(props.request._id)}>
        delete
      </Button>
    </td>
  </tr>
);

export class MyRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { requests: [] };

    //this.onDelete = this.onDelete.bind(this);
  }
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <div className="requestTable">
            <div className="headerLink">
              <div>
                <h3>My Requests</h3>
              </div>
              <div>
                <Button variant="warning" href="/request/create" size="lg">
                  Create Request
                </Button>
              </div>
            </div>
            <div>
              <Table striped bordered hover id="requests">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Cost</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>User Name</th>
                    <th>Status</th>
                    <th colSpan={2}>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.requestsList()}</tbody>
              </Table>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .get("http://localhost:5000/requests", { withCredentials: true })
      .then((response) => {
        this.setState({ requests: response.data.requests });
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  onDelete(id) {
    // const id = "";
    console.log("gflsgfklsjglks");
    console.log("Delete endpoint:" + "http://localhost:5000/requests?id=" + id);
    const apiMgr = axios.create({ responseType: "json" });

    apiMgr
      .delete("http://localhost:5000/requests?id=" + id)
      .then((response) => {
        //this.setState({ restaurants: response.data.restaurants.results });
        console.log("RESPONSE from /user : " + JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  requestsList() {
    console.log("***************************:" + this.state.requests.length);
    if (this.state.requests.length === 0) {
      return (
        <tr>
          <td colSpan={9}>No Requests.</td>
        </tr>
      );
    }
    return this.state.requests.map(function (currentRequest, i) {
      return <RequestListItem request={currentRequest} key={i} />;
    });
  }
}
