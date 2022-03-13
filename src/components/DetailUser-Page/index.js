// Dependencies
import React, { Component } from "react";
import Header from "components/Base-Layout/Header";
// Internals
import "components/DetailUser-Page/index.css";
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
    fetch(
      "http://localhost/BE-Baha/view_detaiL_user.php?user_id=" +
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
    const { userHeader } = this.context;

    return (
      <div className="userDetail">
        <div className="container">
          <Header
            title="User Detail"
            tag="A detail of your customer records."
          />
          <hr />
          <div className="row mt-4 mb-3 justify-content-center">
            <div className="d-flex align-items-center">
              <div className="mr-4">
                {userHeader.map((header, index) => (
                  <h3 key={index}>{header}</h3>
                ))}
              </div>
              {result.slice(0, 1).map((item) => (
                <div key={item.user_id}>
                  <h4>{item.user_id}</h4>
                  <h4>{item.name}</h4>
                  <h4>{item.address}</h4>
                  <h4>
                    {item.phone_number} / {item.email}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="table-responsive text-center mb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item) => (
                    <tr key={item.transaction_id}>
                      <th>{item.transaction_id}</th>
                      <td>{item.qty}</td>
                      <td>{item.price} IDR</td>
                      <td>{item.status_name}</td>
                      <td>{item.time}</td>
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
