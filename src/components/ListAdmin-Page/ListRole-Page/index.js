// Dependencies
import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { NavLink } from 'react-router-dom';
// Internals
import 'components/ListAdmin-Page/ListRole-Page/index.css'
import Header from 'components/Base-Layout/Header'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            result: [],
        }
    }

    fetchData = () => {
        fetch('http://localhost/BE-Baha/view_role.php')
        .then(response => {
            response.json().then(function (data) {
                if (data.success === 1) {
                    this.setState({
                        result: data.result
                    })
                }
                else {
                    console.log(data.message);
                }
            }.bind(this));
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount() {
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
            <div className="rolelist">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Header title="Role List" tag="A list of all your roles you have." />
                        </div>
                        <div className="col align-self-end d-flex justify-content-end">
                            <NavLink to="/aRAdmin" className="btn btn-success">&#10010; Add new role</NavLink>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-4 mb-5 text-center">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Role Name</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map((item) => (
                                            <tr key={item.role_id}>
                                                <th>{item.role_name}</th>
                                                <td>{item.description}</td>
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
