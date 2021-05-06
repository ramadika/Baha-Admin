// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/ListAdmin-Page/index.css'
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
            <div className="adminlist">
                <div className="container">
                    <Header title="Admin List" tag="A list of all your administrator and the roles they have." />
                    <hr />
                    <div className="row mt-4 mb-5 text-center">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Admin ID</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>AD-123</th>
                                        <td>Dred</td>
                                        <td>Owner</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>AD-456</th>
                                        <td>Ryot</td>
                                        <td>Administrator</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>AD-126</th>
                                        <td>Buffy</td>
                                        <td>Staff Purchasing</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>AD-153</th>
                                        <td>Vacx</td>
                                        <td>Staff Finance</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th>AD-623</th>
                                        <td>Luyt</td>
                                        <td>Staff Production</td>
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
