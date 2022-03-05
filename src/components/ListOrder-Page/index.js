// Dependencies
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Header from "components/Base-Layout/Header";
import swal from "sweetalert";
import Axios from "axios";
// Internals
import "components/ListOrder-Page/index.css";
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
    fetch("http://localhost/BE-Baha/view_order.php")
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

  postData = (id, status) => {
    Axios.post("http://localhost/BE-Baha/update_status.php", {
      transaction_id: id,
      status_id: status,
    })
      .then(function ({ data }) {
        if (data.success === 1) {
          swal(data.message, {
            icon: "success",
          });
        } else {
          swal(data.message, {
            icon: "error",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onConfirm(id, value) {
    if (value === "confirmed") {
      return swal({
        title: "Are you sure?",
        text: "Once confirmed, you will not be able to recover this order!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willAction) => {
        if (willAction) {
          this.postData(id, 2);
        } else {
          swal("Your order hasn't been changed yet!");
        }
      });
    }
    return swal({
      title: "Are you sure?",
      text: "Once canceled, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willAction) => {
      if (willAction) {
        this.postData(id, 3);
      } else {
        swal("Your order hasn't been changed yet!");
      }
    });
  }

  renderUpdateButton(id, value) {
    if (value === "Waiting for payment") {
      return (
        <td className="d-flex justify-content-center">
          <button
            className="btn btn-outline-success mr-2"
            onClick={() => this.onConfirm(id, "confirmed")}
          >
            &#10004; Confirmed
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => this.onConfirm(id, "canceled")}
          >
            &#10006; Canceled
          </button>
        </td>
      );
    }
    return <td className="d-flex justify-content-center">{value}</td>;
  }

  render() {
    const { result } = this.state;

    return (
      <div className="orderlist">
        <div className="container">
          <Header title="Order List" tag="A list of your ordering records." />
          <hr />
          <div className="row mt-4 mb-5 text-center">
            <div className="table-responsive">
              <table id="example" className="table table-borderless">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Price</th>
                    <th>Detail</th>
                    <th>Update Status</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item) => (
                    <tr key={item.transaction_id}>
                      <th>{item.transaction_id}</th>
                      <td>{item.price} IDR</td>
                      <td>
                        <NavLink
                          className="btn btn-outline-info"
                          to={`/dOrder/${item.transaction_id}`}
                        >
                          Detail
                        </NavLink>
                      </td>
                      {this.renderUpdateButton(
                        item.transaction_id,
                        item.status_name
                      )}
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
