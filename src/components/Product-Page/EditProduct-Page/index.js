// Internals
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "components/Base-Layout/Header";
// Dependencies
import "components/Product-Page/EditProduct-Page/index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      product_id: props.location.editProps.product_id,
      product_code: props.location.editProps.product_code,
      product_name: props.location.editProps.product_name,
      //   category_name: props.location.editProps.category_name,
      stock: props.location.editProps.stock,
      price: props.location.editProps.price,
      color: props.location.editProps.color,
    };
  }

  render() {
    const {
      product_id,
      product_code,
      product_name,
      //   category_name,
      stock,
      price,
      color,
    } = this.state;

    return (
      <div className="formEdit-product">
        <div className="container">
          <Header
            title="Edit Product"
            tag="Edit your product to the newest information."
          />
          <hr />
          <div className="row justify-content-center">
            <form onSubmit={this.postData}>
              <div className="col">
                <h3 className="text-center">
                  <b>
                    Product ID <span style={{ color: "red" }}>*</span>
                  </b>
                </h3>
                <input
                  type="text"
                  name="product_code"
                  defaultValue={product_code}
                  ref={(val) => (this.product_code = val)}
                  className="text-center form-control"
                  style={{
                    width: "220px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  disabled
                ></input>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col">
                  <h3 className="text-center">
                    <b>
                      Display Name <span style={{ color: "red" }}>*</span>
                    </b>
                  </h3>
                  <h4 className="text-center">How do you want to be called?</h4>
                  <input
                    type="text"
                    name="product_name"
                    defaultValue={product_name}
                    ref={(val) => (this.product_name = val)}
                    className="form-control"
                    style={{
                      width: "220px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    required
                  ></input>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col">
                  <h3>
                    <b>Category</b>
                  </h3>
                  <h4>Category of your product</h4>
                  {/* <input type="text" name="color" value={this.context.color} ref={(val) => this.color = val} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input> */}
                  <select
                    ref={(val) => (this.access = val)}
                    className="col form-control text-center"
                    required
                  >
                    <option name="" value="">
                      Choose
                    </option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div className="col">
                  <h3>
                    <b>
                      Price <span style={{ color: "red" }}>*</span>
                    </b>
                  </h3>
                  <h4>Visible to your customer</h4>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    ref={(val) => (this.price = val)}
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="col">
                  <h3>
                    <b>
                      Qty. <span style={{ color: "red" }}>*</span>
                    </b>
                  </h3>
                  <h4>How many items do you have?</h4>
                  <input
                    type="number"
                    name="stock"
                    defaultValue={stock}
                    ref={(val) => (this.stock = val)}
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="col">
                  <h3>
                    <b>
                      Color <span style={{ color: "red" }}>*</span>
                    </b>
                  </h3>
                  <h4>What is the color of your product?</h4>
                  <input
                    type="text"
                    name="color"
                    defaultValue={color}
                    ref={(val) => (this.color = val)}
                    className="form-control"
                    required
                  ></input>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <NavLink
                  className="btn align-self-center"
                  to={`/dProduct/${product_id}`}
                >
                  Back
                </NavLink>
                <input
                  type="submit"
                  value="Submit"
                  className="form-control my-4"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
