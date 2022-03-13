// Dependencies
import React, { Component } from "react";
import Header from "components/Base-Layout/Header";
import { NavLink } from "react-router-dom";
// Internals
import "components/Product-Page/DetailProduct-Page/index.css";
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
      "http://localhost/BE-Baha/view_detail_product.php?product_id=" +
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

  goBack = () => {
    window.history.back();
  };

  render() {
    const { result } = this.state;
    const { productDetailHeader } = this.context;

    return (
      <div className="productDetail">
        <div className="container">
          <Header title="Product Detail" tag="A detail of your product." />
          <hr />
          <div className="row mt-4 mb-3 justify-content-center">
            <div className="d-flex align-items-center">
              <div className="mr-4">
                {productDetailHeader.map((header, index) => (
                  <h3 key={index}>{header}</h3>
                ))}
              </div>
              {result.slice(0, 1).map((item) => (
                <div key={item.product_id}>
                  {item.product_code ? (
                    <h4>{item.product_code}</h4>
                  ) : (
                    <h4 className="null-value">NULL</h4>
                  )}
                  {item.product_name ? (
                    <h4>{item.product_name}</h4>
                  ) : (
                    <h4 className="null-value">NULL</h4>
                  )}
                  {item.category_name ? (
                    <h4>{item.category_name}</h4>
                  ) : (
                    <h4 className="null-value">NULL</h4>
                  )}
                  {item.stock ? <h4>{item.stock}</h4> : <h4 className="null-value">NULL</h4>}
                  {item.price ? <h4>{item.price}</h4> : <h4 className="null-value">NULL</h4>}
                  {item.color ? <h4>{item.color}</h4> : <h4 className="null-value">NULL</h4>}
                </div>
              ))}
            </div>
          </div>
          <div className="row justify-content-center">
            <button
              onClick={() => this.goBack()}
              className="btn btn-outline-danger mb-3"
            >
              Go Back
            </button>
          </div>
          <div className="row">
            <div className="table-responsive text-center mb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Description</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item) => (
                    <tr key={item.product_id}>
                      <th>
                        <img src={item.source} alt="img"></img>
                      </th>
                      <td>{item.description}</td>
                      <td>
                        <NavLink
                          className="btn btn-outline-info"
                          to={`/eMen/${item.product_id}`}
                        >
                          Edit
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
