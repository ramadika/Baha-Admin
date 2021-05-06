// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/ListOrder-Page/index.css'
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

    componentDidMount(){
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }

    render() {
        return (
            <div className="orderlist">
                <div className="container">
                    <Header title="Order List" tag="A list of your ordering records." />
                    <hr />
                    <div className="row mt-4 mb-5 text-center">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Prices</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>OD-123</th>
                                        <td>2000 IDR</td>
                                        <td>Confirmed</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>OD-456</th>
                                        <td>21000 IDR</td>
                                        <td>Cancel</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>OD-126</th>
                                        <td>20000 IDR</td>
                                        <td>Confirmed</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>OD-153</th>
                                        <td>500 IDR</td>
                                        <td>Pending</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>OD-623</th>
                                        <td>5500 IDR</td>
                                        <td>Cancel</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
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
