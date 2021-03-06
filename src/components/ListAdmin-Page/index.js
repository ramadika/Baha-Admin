// Dependencies
import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { NavLink } from 'react-router-dom';
// Internals
import 'components/ListAdmin-Page/index.css'
import Header from 'components/Base-Layout/Header'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext;
    constructor(){
        super();
        this.state = {
            result: [],
        };
    }

    fetchData = () => {
        fetch('http://localhost/BE-Baha/view_admin.php')
        .then(response => {
            response.json().then(function (data) {
                if (data.success === 1){
                    this.setState({
                        result: data.result
                    })
                }
                else {
                    console.log(data.message);
                }
            }.bind(this));
        })
        .catch(error => {
            console.error(error);
        })
    }

    componentDidMount(){
        this.fetchData();
        setInterval(this.fetchData, 1000);
    }

    componentDidUpdate() {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }

    render() {
        const { result } = this.state;

        return (
            <div className="adminlist">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Header title="Admin List" tag="A list of all your administrator and the roles they have." />
                        </div>
                        <div className="col align-self-end d-flex justify-content-end">
                            <NavLink to="/aMAdmin" className="btn btn-success">&#10010; Add new member</NavLink>
                            <NavLink to="/role" className="btn btn-outline-success ml-3">&#128065; Role</NavLink>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-4 mb-5 text-center">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Admin ID</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map((item) => (
                                            <tr key={item.admin_id}>
                                                <th>{item.admin_code}</th>
                                                <td>{item.name}</td>
                                                <td>{item.role_name}</td>
                                                <td>{item.phone_number}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
