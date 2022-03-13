// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BiGridSmall } from 'react-icons/bi'
import { HiDuplicate } from 'react-icons/hi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/Product-Page/index.css'
import ProductList from 'components/Product-Page/ListProduct-Page'

export default class index extends Component {
    render() {
        return (
            <div className="product">
                <div className="container">
                    <Header title="Product" tag="Make changes with the products you have." />
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
                    <div className="addbtn-product d-flex justify-content-center">
                        <NavLink to="/addproduct">+</NavLink>
                    </div>
                </div>
                <ProductList />
            </div>
        )
    }
}
