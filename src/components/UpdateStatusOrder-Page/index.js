// Dependencies
import React, { Component } from "react";
import Header from "components/Base-Layout/Header";
// Internals
import "components/UpdateStatusOrder-Page/index.css";
import { DataContext } from "components/Context";

export default class index extends Component {
  static contextType = DataContext;
  render() {
    return (
      <div className="updateStatusOrder">
        <div className="container">
          <Header title="Update Status" tag="Updating status of your order." />
        </div>
      </div>
    );
  }
}
