import React, { Component } from "react";
import Service from "../Services/Service";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("role");
};

class ListofPassengerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
    };
  }



  componentDidMount() {
    Service.getcheckinPassenger().then((res) => {
      this.setState({ flights: res.data });
    });
  }


  render() {
    return (
      <div style={{ color: "black" }}>
        <div className="mx-n3">
        </div>
        <div className="d-flex p-2 mx-n3 flight-table table-margin">
          <div className="mx-auto text-center">
            <h2 className="mx-auto">checkedIn Passenger List</h2>
          </div>
        </div>
        <div style={{marginLeft:20, marginRight:20, backgroundColor: "white"}} className="row flight-table">
          <Table hover striped bordered
            style={{ alignSelf: "center", color: "black" }}
          >
            <thead>
              <tr>
               
                <th>checkinId</th>
                <th>flightNumber</th>
                <th>seatNumber</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>flightDate</th>
                <th>checkInTime</th>
               </tr>
            </thead>

            <tbody>
              {this.state.flights.map((data) => (
                <tr>
                  <td>{data.checkinId}</td>
                  <td>{data.flightNumber}</td>
                  <td>{data.seatNumber}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.flightDate}</td>
                  <td>{data.checkInTime}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withRouter(ListofPassengerComponent);
