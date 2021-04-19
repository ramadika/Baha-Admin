// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
// Internals
import 'components/ListUser-Page/index.css'
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
            <div className="userlist">
                <div className="container">
                    <h1>User List</h1>
                    <hr />
                    <div className="row mt-4 mb-5 text-center">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Contact</th>
                                        <th>History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1D-123</th>
                                        <td>Hendra</td>
                                        <td>Padjajaran, Bandung</td>
                                        <td>+021 345 67</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dUser">History</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>1D-124</th>
                                        <td>Afred</td>
                                        <td>Buah Batu, Bandung</td>
                                        <td>+021 445 67</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dUser">History</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>1D-143</th>
                                        <td>Greg</td>
                                        <td>Padjajaran, Bandung</td>
                                        <td>+022 345 67</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dUser">History</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>1D-153</th>
                                        <td>Hendra</td>
                                        <td>Mekar mukti, Cikarang</td>
                                        <td>+023 345 67</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dUser">History</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>1D-129</th>
                                        <td>John</td>
                                        <td>Sako, Palembang</td>
                                        <td>+021 345 77</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dUser">History</NavLink></td>
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
