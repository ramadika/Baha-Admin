// Dependencies
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Header from "components/Base-Layout/Header";
// Internals
import "components/ListUser-Page/index.css";
import { DataContext } from "components/Context";

export default class index extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  fetchData = () => {
    fetch("http://localhost/BE-Baha/view_user.php")
      .then((response) => {
        response.json().then(
          function (data) {
            if (data.success === 1) {
              this.setState({
                result: data.result,
              });
            } else {
              console.log(data.message);
            }
          }.bind(this)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 1000);
  }

  componentDidUpdate() {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  render() {
    const { result } = this.state;

    return (
      <div className="userlist">
        <div className="container">
          <Header
            title="User List"
            tag="A list of all your customer and their records."
          />
          <hr />
          <div className="row mt-4 mb-5 text-center">
            <div className="table-responsive">
              <table id="example" className="table table-borderless">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>History</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item) => (
                    <tr key={item.user_id}>
                      <th>{item.user_code}</th>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>
                        <NavLink
                          className="btn btn-outline-info"
                          to={`/dUser/${item.user_id}`}
                        >
                          History
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
