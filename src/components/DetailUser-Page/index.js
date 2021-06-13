// Dependencies
import React, { Component } from 'react'
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/DetailUser-Page/index.css'
import { DataContext } from 'components/Context'

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
            <div className="userDetail">
                <div className="container">
                    <Header title="User Detail" tag="A detail of your customer records." />
                    <hr />
                    <div className="row mt-4 mb-3 justify-content-center">
                        <div className="row">
                            <div className="col">
                                <h3><b>User ID</b></h3>
                                <h3><b>Name</b></h3>
                                <h3><b>Address</b></h3>
                                <h3><b>Contact</b></h3>
                            </div>
                            <div className="col align-self-center">
                                <h4>OD-123</h4>
                                <h4>Hendra</h4>
                                <h4>Padjajaran, Bandung</h4>
                                <h4>+021 345 67</h4>
                            </div>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>WH-123</th>
                                        <td>1</td>
                                        <td>1000 IDR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
