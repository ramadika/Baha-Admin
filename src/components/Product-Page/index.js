// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BiGridSmall } from 'react-icons/bi'
import { HiDuplicate } from 'react-icons/hi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
// Internals
import 'components/Product-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="product">
                <div className="container">
                    <h1>Product</h1>
                    <hr />
                    <div className="row text-center">
                        <NavLink to="/" className="col info-product" id="a-product">
                            <HiDuplicate size={25} className="mb-2" />
                            <h3>Category</h3>
                            <h5>2</h5>
                        </NavLink>
                        <NavLink to="/" className="col info-product" id="b-product">
                            <BiGridSmall size={30} className="mb-2" />
                            <h3>All Stock</h3>
                            <h5>10</h5>
                        </NavLink>
                        <NavLink to="/" className="col info-product" id="c-product">
                            <FaRegMoneyBillAlt size={25} className="mb-2" />
                            <h3>Sold</h3>
                            <h5>5</h5>
                        </NavLink>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                    <div className="addbtn-product d-flex justify-content-center">
                        <NavLink to="/addproduct">+</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
