// Dependencies
import React, { Component } from "react";
import Header from "components/Base-Layout/Header";
import ReactToPrint from "react-to-print";
// Internals
import "components/DetailOrder-Page/index.css";
import { DataContext } from "components/Context";

class ComponentToPrint extends Component {
  static contextType = DataContext;
  render() {
    const { result } = this.props;
    return (
      <div className="container">
        <div className="row mt-4 mb-3 justify-content-center">
          <div className="d-flex align-items-center">
            <div className="mr-4">
              {this.context.orderHeader.map((header) => (
                <h3>{header}</h3>
              ))}
            </div>
            {result.map((item) => (
              <div key={item.transaction_id}>
                {item.transaction_id ? (
                  <h4>{item.transaction_id}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.status_name ? (
                  <h4>{item.status_name}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.method ? (
                  <h4>{item.method}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.name ? (
                  <h4>{item.name}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.address ? (
                  <h4>{item.address}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.city ? (
                  <h4>{item.city}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.postal_code ? (
                  <h4>{item.postal_code}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
                {item.phone_number ? (
                  <h4>{item.phone_number}</h4>
                ) : (
                  <h4 className="orderDetail-value-null">NULL</h4>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="table-responsive text-center mb-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Size</th>
                  <th>Qty.</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item) => (
                  <tr key={item.transaction_id}>
                    <th>{item.product_code}</th>
                    <th>{item.product_name}</th>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                    <td>{item.price_per_product} IDR</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <h5 className="text-right">
              <span>Total</span>
              <span style={{ marginLeft: "115px", marginRight: "65px" }}>
                <b>1000 IDR</b>
              </span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default class index extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    this.state = {
      result: [],
      message: "",
      referrer: false,
    };
  }

  fetchData = () => {
    fetch(
      "http://localhost/BE-Baha/view_detail_order.php?transaction_id=" +
        this.props.match.params.id
    )
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
  }

  render() {
    const { result } = this.state;
    return (
      <div className="orderDetail">
        <div className="container">
          <Header
            title="Order Detail"
            tag="A detail of your ordering records."
          />
          <hr />
          <div className="row mb-3 justify-content-center">
            <ReactToPrint
              trigger={() => {
                return <button className="btn btn-outline-info">Print</button>;
              }}
              content={() => this.componentRef}
            />
          </div>
          <ComponentToPrint
            ref={(el) => (this.componentRef = el)}
            result={result}
          />
        </div>
      </div>
    );
  }
}
