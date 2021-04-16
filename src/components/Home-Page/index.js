// Dependencies
import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'
// Internals
import 'components/Home-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <h1>Overview</h1>
                    <hr />
                    <div className="row text-center">
                        <div className="col a-home">
                            <h3>Payment Confirm</h3>
                            <h5>10</h5>
                        </div>
                        <div className="col b-home">
                            <h3>Payment Cancel</h3>
                            <h5>5</h5>
                        </div>
                        <div className="col c-home">
                            <h3>Payment Pending</h3>
                            <h5>8</h5>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col order-home">
                            <div className="table-responsive">
                                <table id="example" className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Order List</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'yellow'}></GoPrimitiveDot></td>
                                        <td>Jonathan Red</td>
                                        <td>2</td>
                                        <td>SHR201</td>
                                        <td><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'yellow'}></GoPrimitiveDot></td>
                                        <td>Anthony Fuse</td>
                                        <td>1</td>
                                        <td>JKT301</td>
                                        <td><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'green'}></GoPrimitiveDot></td>
                                        <td>Kenin Jr.</td>
                                        <td>10</td>
                                        <td>SHR303</td>
                                        <td><b>Confirm</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'green'}></GoPrimitiveDot></td>
                                        <td>Kenin Jr.</td>
                                        <td>10</td>
                                        <td>JNS303</td>
                                        <td><b>Confirm</b></td>
                                    </tr>
                                    <tr className="cancel">
                                        <td className="text-center"><GoPrimitiveDot color={'red'}></GoPrimitiveDot></td>
                                        <td>Gery Issac</td>
                                        <td>3</td>
                                        <td>SHR203</td>
                                        <td><b>Cancel</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'green'}></GoPrimitiveDot></td>
                                        <td>Sun Tyson</td>
                                        <td>8</td>
                                        <td>JNS303</td>
                                        <td><b>Confirm</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'yellow'}></GoPrimitiveDot></td>
                                        <td>Yui Tse</td>
                                        <td>5</td>
                                        <td>SHR203</td>
                                        <td><b>Pending</b></td>
                                    </tr>
                                    <tr className="cancel">
                                        <td className="text-center"><GoPrimitiveDot color={'red'}></GoPrimitiveDot></td>
                                        <td>Reddick</td>
                                        <td>1</td>
                                        <td>SHR303</td>
                                        <td><b>Cancel</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'yellow'}></GoPrimitiveDot></td>
                                        <td>Michael Black</td>
                                        <td>1</td>
                                        <td>JKT103</td>
                                        <td><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><GoPrimitiveDot color={'green'}></GoPrimitiveDot></td>
                                        <td>Adam Hirs</td>
                                        <td>3</td>
                                        <td>SHR303</td>
                                        <td><b>Confirm</b></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        )
    }
}
