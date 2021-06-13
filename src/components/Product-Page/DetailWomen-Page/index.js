// Dependencies
import React, { Component } from 'react'
import Header from 'components/Base-Layout/Header'
import { NavLink } from 'react-router-dom'
// Internals
import 'components/Product-Page/DetailWomen-Page/index.css'
import img1 from 'assets/images/emma-matthews-digital-content-production-UsQyOSvhTrw-unsplash.jpg'
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
            <div className="womenDetail">
                <div className="container">
                    <Header title="Product Detail" tag="A detail of your product." />
                    <hr />
                    <div className="row mt-4 mb-3 justify-content-center">
                        <div className="row">
                            <div className="col">
                                <h3><b>Product ID</b></h3>
                                <h3><b>Name</b></h3>
                                <h3><b>Qty.</b></h3>
                                <h3><b>Price</b></h3>
                                <h3><b>Color</b></h3>
                            </div>
                            <div className="col align-self-center">
                                <h4>PWM-123</h4>
                                <h4>Dred</h4>
                                <h4>1</h4>
                                <h4>10000</h4>
                                <h4>Blue</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table-responsive text-center mb-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Description</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th><img src={img1} alt="img"></img></th>
                                        <td>Primary</td>
                                        <td><NavLink className="btn btn-outline-info" to="/eWomen">Edit</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th><img src={img1} alt="img"></img></th>
                                        <td>Secondary - 1</td>
                                        <td><NavLink className="btn btn-outline-info" to="/eWomen">Edit</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th><img src={img1} alt="img"></img></th>
                                        <td>Secondary - 2</td>
                                        <td><NavLink className="btn btn-outline-info" to="/eWomen">Edit</NavLink></td>
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
