// Dependencies
import React, { Component } from "react";
import { DataContext } from "components/Context";
// Internals
import "components/Home-Page/index.css";
import Header from "components/Base-Layout/Header";
import Chart1 from "components/Home-Page/Chart1";
import Chart2 from "components/Home-Page/Chart2";
import Chart3 from "components/Home-Page/Chart3";

export default class index extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      confirm: [],
      cancel: [],
      pending: [],
    };
  }

  fetchData = () => {
    fetch("http://localhost/BE-Baha/count_status.php")
      .then((response) => {
        response.json().then(
          function (data) {
            if (data.success === 1) {
              this.setState({
                confirm: data.result_confirm,
                cancel: data.result_cancel,
                pending: data.result_pending,
              });
            } else {
              console.log(data.message);
            }
          }.bind(this)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 1000);
  }

  render() {
    const { confirm, cancel, pending } = this.state;
    const { result, fetchStatus } = this.context;

    return (
      <div className="home">
        <div className="container">
          <Header
            title="Overview"
            tag="An overview of your interesting sales journey."
          />
          <hr />
          <div className="row text-center">
            <div className="col a-home">
              <h3>Payment Confirm</h3>
              <h5>{confirm}</h5>
            </div>
            <div className="col b-home">
              <h3>Payment Cancel</h3>
              <h5>{cancel}</h5>
            </div>
            <div className="col c-home">
              <h3>Payment Pending</h3>
              <h5>{pending}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col order-home">
              <div className="table-responsive">
                <table id="example" className="table table-borderless">
                  <thead>
                    <tr>
                      <th>Order List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((item) => (
                      <tr key={item.transaction_id}>
                        <td className="text-center">
                          {fetchStatus(item.status_name)}
                        </td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.product_code}</td>
                        <td>
                          <b>{item.status_name}</b>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col align-self-center" id="pie-categories">
              <h3>Sales by Categories</h3>
              <Chart1 />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>Product Sales by Month</h3>
              <Chart2 />
            </div>
            <div className="col">
              <h3>Product Sales by Region</h3>
              <Chart3 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
