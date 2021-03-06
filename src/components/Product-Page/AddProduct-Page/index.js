// Dependencies
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import Axios from 'axios';
// import swal from "sweetalert";
import Header from "components/Base-Layout/Header";
// Internals
import "components/Product-Page/AddProduct-Page/index.css";
import { DataContext } from "components/Context";

export default class index extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  // postData = (event) => {
  //     event.preventDefault();
  //     event.persist();
  //     swal({
  //       title: "Are you sure?",
  //       text: "Once submitted, you will not be able to change your data!",
  //       icon: "warning",
  //       buttons: true,
  //       dangerMode: true,
  //     }).then((willDelete) => {
  //         if (willDelete) {
  //             Axios.post("https://103.135.5.242/receiveESP/create.php", {
  //                 nickName: this.nickName.value,
  //                 fullName: this.fullName.value,
  //                 productid: this.state.productid,
  //                 color: this.state.color,
  //                 price: this.state.price,
  //             })
  //             .then(function({data}) {
  //                 if(data.success === 1){
  //                     this.setState({
  //                         message: data.message,
  //                     });
  //                     event.target.reset();
  //                     // alert(data.message);
  //                     swal(this.state.message, {
  //                         icon: "success",
  //                     });
  //                 }
  //                 else {
  //                     // alert(data.message);
  //                     swal(this.state.message, {
  //                       icon: "error",
  //                     });
  //                 }
  //             }.bind(this))
  //             .catch(function (error) {
  //                 console.log(error);
  //             });
  //         } else {
  //             swal("Change your data!");
  //         }
  //     });
  // }

  render() {
    return (
      <div className="form-product">
        <div className="container">
          <Header
            title="Add Product"
            tag="Add product so that people can buy it."
          />
          <hr />
          <div className="row justify-content-center">
            <form onSubmit={this.postData}>
              <h3 className="text-center">
                <b>
                  Product ID <span style={{ color: "red" }}>*</span>
                </b>
              </h3>
              <h4 className="text-center">Scan Device to get the ID</h4>
              <input
                type="text"
                name="productid"
                value={this.context.productid}
                ref={(val) => (this.productid = val)}
                className="text-center form-control"
                style={{
                  width: "220px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                disabled
              ></input>
              <div className="row justify-content-center mt-3">
                <div className="col">
                  <h3>
                    <b>
                      Display Name <span style={{ color: "red" }}>*</span>
                    </b>
                  </h3>
                  <h4>How do you want to be called?</h4>
                  <input
                    type="text"
                    name="nickName"
                    value={this.context.nickname}
                    ref={(val) => (this.nickName = val)}
                    className="form-control"
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
                    <option value="User">Men</option>
                    <option value="Admin">Women</option>
                    <option value="Superuser">Accessories</option>
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
                    value={this.context.price}
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
                    name="qty"
                    value={this.context.qty}
                    ref={(val) => (this.qty = val)}
                    className="form-control"
                    required
                  ></input>
                </div>
              </div>
              {/* <div className="row mt-4 photo-product">
                <div className="d-flex bd-highlight">
                  <div className="p-2 w-100 bd-highlight mr-5">
                    <h3>
                      <b>Upload Photo</b>
                    </h3>
                    <h4>
                      By uploading photo of product your product will be seen by
                      your customer
                    </h4>
                  </div>
                  <div className="p-2 flex-shrink-0 bd-highlight d-flex align-items-center ml-5">
                    <h4 style={{ fontSize: "8pt", fontWeight: "600" }}>
                      Upload Photo..
                    </h4>
                  </div>
                </div>
              </div> */}
              <div className="row d-flex justify-content-center">
                <NavLink className="btn align-self-center" to="/product">
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
