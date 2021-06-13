// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/Contact-Page/index.css'
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
            <div className="contact">
                <div className="container text-center">
                    <Header title="Contact" tag="Your brands Contact Information" />
                    <hr />
                    <GoLocation className="icon-contact"></GoLocation>
                    <h2>Our Office.</h2>
                    <h5>
                        Buah Batu JL. Terusan Buah Batu 102
                    </h5>
                    <HiOutlineMailOpen className="icon-contact"></HiOutlineMailOpen>
                    <h2>Mail</h2>
                    <h5>
                        product@baha.com
                    </h5>
                    <IoIosCall className="icon-contact"></IoIosCall>
                    <h2>Call Center</h2>
                    <h5>
                        +621 789 567
                    </h5>
                    <NavLink to="/eContact" className="btn btn-outline-info mt-4">Edit</NavLink>
                </div>
            </div>
        )
    }
}
