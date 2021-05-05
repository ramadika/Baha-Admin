// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BiGridSmall } from 'react-icons/bi'
import { HiDuplicate } from 'react-icons/hi'
import { FaRegMoneyBillAlt, FaTshirt } from 'react-icons/fa'
import { ImWoman } from 'react-icons/im'
import { GoWatch } from 'react-icons/go'
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
                        <div className="col info-product" id="a-product">
                            <HiDuplicate size={25} className="mb-2" />
                            <h3>Category</h3>
                            <h5>3</h5>
                        </div>
                        <div className="col info-product" id="b-product">
                            <BiGridSmall size={30} className="mb-2" />
                            <h3>All Stock</h3>
                            <h5>10</h5>
                        </div>
                        <div className="col info-product" id="c-product">
                            <FaRegMoneyBillAlt size={25} className="mb-2" />
                            <h3>Sold</h3>
                            <h5>5</h5>
                        </div>
                    </div>
                    <h2 className="text-center">Update Product</h2>
                    <div className="row mt-3 mb-5 justify-content-center">
                        <NavLink to="/men" className="col-6 col-sm-4 d-flex align-items-center justify-content-center category-product" id="d-product">
                            <FaTshirt size={25} className="mb-2 mr-2" />
                            <h3>Men</h3>
                        </NavLink>
                        <NavLink to="/women" className="col-6 col-sm-4 d-flex align-items-center justify-content-center category-product" id="e-product">
                            <ImWoman size={30} className="mb-2 mr-2" />
                            <h3>Women</h3>
                        </NavLink>
                        <NavLink to="/accessories" className="col-6 col-sm-4 d-flex align-items-center justify-content-center category-product" id="f-product">
                            <GoWatch size={25} className="mb-2 mr-2" />
                            <h3>Accessories</h3>
                        </NavLink>
                    </div>
                    <div className="addbtn-product d-flex justify-content-center">
                        <NavLink to="/addproduct">+</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
