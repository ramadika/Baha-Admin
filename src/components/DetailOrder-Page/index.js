// Dependencies
import React, { Component } from 'react'
import Header from 'components/Base-Layout/Header'
import ReactToPrint from 'react-to-print';
// Internals
import 'components/DetailOrder-Page/index.css'
import { DataContext } from 'components/Context'

class ComponentToPrint extends Component {
    render() {
      return (
          <div className="container">
            <div className="row mt-4 mb-3 justify-content-center">
                <div className="row">
                    <div className="col">
                        <h3><b>Order ID</b></h3>
                        <h3><b>Status</b></h3>
                        <h3><b>Payment Method</b></h3>
                        <h3><b>Name</b></h3>
                        <h3><b>Address</b></h3>
                        <h3><b>City</b></h3>
                        <h3><b>Postal Code</b></h3>
                        <h3><b>Phone Number</b></h3>
                    </div>
                    <div className="col align-self-center">
                        <h4>OD-123</h4>
                        <h4>Confirmed</h4>
                        <h4>Transfer</h4>
                        <h4>Fred</h4>
                        <h4>Dago Hill</h4>
                        <h4>Bandung</h4>
                        <h4>56901</h4>
                        <h4>+67 2394 12</h4>
                    </div>
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
                            <tr>
                                <th>WH-123</th>
                                <th>Whitesmoke</th>
                                <td>M</td>
                                <td>1</td>
                                <td>1000 IDR</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h5 className="text-right">
                        <span>Total</span>
                        <span style={{marginLeft:'115px', marginRight:'65px'}}><b>1000 IDR</b></span>
                    </h5>
                </div>
            </div>
          </div>
      );
    }
}

export default class index extends Component {
    static contextType = DataContext;
    constructor(){
        super();
        this.state = {
            message: '',
            referrer: false,
        };
    }

    render() {
        return (
            <div className="orderDetail">
                <div className="container">
                    <Header title="Order Detail" tag="A detail of your ordering records." />
                    <hr />
                    <div className="row mb-3 justify-content-center">
                        <ReactToPrint
                            trigger={() => {
                                return <button className="btn btn-outline-info">Print</button>
                            }}
                            content={() => this.componentRef}
                        />
                    </div>
                    <ComponentToPrint ref={el => (this.componentRef = el)} />
                </div>
            </div>
        )
    }
}
