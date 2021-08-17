// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
// Internals
import 'components/Contact-Page/CEdit-Page/index.css'
import Header from 'components/Base-Layout/Header'
import Img1 from 'assets/images/Arnawa-removebg-preview.png'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            address: props.location.aboutProps.address,
            email: props.location.aboutProps.mail,
            phone_number: props.location.aboutProps.call,
        };
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/BE-Baha/edit_contact.php', {
            address: this.address.value,
            email: this.email.value,
            phone_number: this.phone_number.value,
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    message: data.message,
                    address: this.address.value,
                    email: this.email.value,
                    phone_number: this.phone_number.value,
                });
                swal(this.state.message, {
                    icon: "success",
                });
            }
            else {
                this.setState({
                    message: data.message,
                });
                swal(this.state.message, {
                    icon: "error",
                });
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { address, email, phone_number } = this.state;

        return (
            <div className="cedit">
                <div className="container">
                    <Header title="Edit Contact" />
                    <hr />
                    <div className="row">
                        <div className="col">
                            <img src={Img1} alt="Logo"></img>
                        </div>
                        <div className="col align-self-center">
                            <form onSubmit={this.postData}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputAddress1"><b>Address <span style={{color:'red'}}>*</span></b></label>
                                    <input type="text" className="form-control" id="exampleInputAddress1" aria-describedby="addressHelp" placeholder="Enter Address" defaultValue={address} ref={(val) => this.address = val} required></input>
                                    <small id="addressHelp" className="form-text text-muted">Address will showing up to user.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"><b>Email address <span style={{color:'red'}}>*</span></b></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" defaultValue={email} ref={(val) => this.email = val} required></input>
                                    <small id="emailHelp" className="form-text text-muted">You'll received email by using this email.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputCall1"><b>Call Center <span style={{color:'red'}}>*</span></b></label>
                                    <input type="text" className="form-control" id="exampleInputCall1" aria-describedby="callHelp" placeholder="Enter Address" defaultValue={phone_number} ref={(val) => this.phone_number = val} required></input>
                                    <small id="callHelp" className="form-text text-muted">Someone will call you through this number.</small>
                                </div>
                                <input type="submit" value="Submit"  className="form-control my-5"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
