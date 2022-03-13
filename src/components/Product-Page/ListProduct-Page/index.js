// Dependencies
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// Internals
import "components/Product-Page/ListProduct-Page/index.css";
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
    fetch("http://localhost/BE-Baha/view_product.php")
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
      <div className="listProduct">
        <div className="container">
          <div className="row mt-4 mb-5 text-center">
            <div className="table-responsive">
              <table id="example" className="table table-borderless">
                <thead>
                  <tr>
                    <th>Pict.</th>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item) => (
                    <tr key={item.product_id}>
                      <th>
                        <img src={item.source} alt="img"></img>
                      </th>
                      <th>{item.product_code}</th>
                      <td>{item.product_name}</td>
                      <td>{item.stock}</td>
                      <td>{item.price}</td>
                      <td>{item.category_name}</td>
                      <td>
                        <NavLink
                          className="btn btn-outline-info"
                          to={`/dProduct/${item.product_id}`}
                        >
                          Detail
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
