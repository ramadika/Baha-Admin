// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
// Internals
import 'components/Contact-Page/index.css'
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
        fetch('http://localhost/BE-Baha/view_company.php')
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
    }

    render() {
        const { result } = this.state;

        return (
            <div className="contact">
                {
                    result.map((item) => (
                        <div key={item.company_id} className="container text-center">
                            <Header title="Contact" tag="Your brands Contact Information" />
                            <hr />
                            <GoLocation className="icon-contact"></GoLocation>
                            <h2>Our Office</h2>
                            <h5>{item.address}</h5>
                            <HiOutlineMailOpen className="icon-contact"></HiOutlineMailOpen>
                            <h2>Mail</h2>
                            <h5>{item.email}</h5>
                            <IoIosCall className="icon-contact"></IoIosCall>
                            <h2>Call Center</h2>
                            <h5>{item.phone_number}</h5>
                            <NavLink to={{
                                pathname: '/eContact',
                                aboutProps: {
                                    address: "Address",
                                    mail: "mail@mail.com",
                                    call: "5673813"
                                }
                            }} className="btn btn-outline-info mt-4">Edit</NavLink>
                        </div>
                    ))
                }
            </div>
        )
    }
}
