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
            result: [],
        };
    }

    fetchData = () => {
        fetch('http://localhost/BE-Baha/view_order.php')
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
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map((item) => (
                                            <tr key={item.transaction_id}>
                                                <th>{item.transaction_id}</th>
                                                <td>{item.price} IDR</td>
                                                <td>{item.status_name}</td>
                                                <td><NavLink className="btn btn-outline-info" to="/dOrder">Detail</NavLink></td>
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
