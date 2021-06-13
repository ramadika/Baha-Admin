// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/Product-Page/ListMen-Page/index.css'
import img1 from 'assets/images/maude-frederique-lavoie-EDSTj4kCUcw-unsplash.jpg'
import img2 from 'assets/images/nimble-made-2yJFGX0tB-U-unsplash.jpg'
import img3 from 'assets/images/brandon-erlinger-ford-2wSe9hhfpnM-unsplash.jpg'
import img4 from 'assets/images/creaslim-F7eJxHoR1lg-unsplash.jpg'
import img5 from 'assets/images/brandon-erlinger-ford-xmrL-yps7gI-unsplash.jpg'
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
            <div className="men">
                <div className="container">
                    <Header title="Men Product" />
                    <hr />
                    <div className="row mt-4 mb-5 text-center">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Pict.</th>
                                        <th>Product ID</th>
                                        <th>Name</th>
                                        <th>Qty.</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th><img src={img1} alt="img"></img></th>
                                        <th>PM-123</th>
                                        <td>Dred</td>
                                        <td>1</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dMen">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th><img src={img2} alt="img"></img></th>
                                        <th>PM-456</th>
                                        <td>Ryot</td>
                                        <td>2</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dMen">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th><img src={img3} alt="img"></img></th>
                                        <th>PM-126</th>
                                        <td>Buffy</td>
                                        <td>1</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dMen">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th><img src={img4} alt="img"></img></th>
                                        <th>PM-153</th>
                                        <td>Vacx</td>
                                        <td>3</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dMen">Detail</NavLink></td>
                                    </tr>
                                    <tr>
                                        <th><img src={img5} alt="img"></img></th>
                                        <th>PM-623</th>
                                        <td>Luyt</td>
                                        <td>5</td>
                                        <td><NavLink className="btn btn-outline-info" to="/dMen">Detail</NavLink></td>
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
