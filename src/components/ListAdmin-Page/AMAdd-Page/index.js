// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
// Internals
import 'components/ListAdmin-Page/AMAdd-Page/index.css'
import Header from 'components/Base-Layout/Header'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
        }
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/BE-Baha/add_member.php', {
            username: this.username.value,
            password: this.password.value,
            name: this.name.value,
            address: this.address.value,
            phone_number: this.phone_number.value,
            email: this.email.value,
            role_id: this.role_id.value,
        })
        .then(function ({data}) {
            if (data.success === 1) {
                this.setState({
                    message: data.message,
                })
                swal(this.state.message, {
                    icon: "success",
                });
                event.target.reset();
            }
            else {
                this.setState({
                    message: data.message,
                })
                swal(this.state.message, {
                    icon: "error",
                });
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="amadd">
                <div className="container">
                    <Header title="Add Member" />
                    <hr />
                    <div className="row mt-4">
                        <form onSubmit={this.postData}>
                            <div className="form-group row">
                                <label htmlFor="inputusername" className="col-sm-4 col-form-label">Username <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputusername" placeholder="Username" ref={(val) => this.username = val} required></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputpassword" className="col-sm-4 col-form-label">Password <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"  placeholder="Password" ref={(val) => this.password = val} required></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputname" className="col-sm-4 col-form-label">Name <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputname" placeholder="Name" ref={(val) => this.name = val} required></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputaddress" className="col-sm-4 col-form-label">Address <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputaddress" placeholder="Address" ref={(val) => this.address = val} required></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputphone" className="col-sm-4 col-form-label">Phone Number <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" id="inputphone" placeholder="08xxxxxxxxxx" ref={(val) => this.phone_number = val} required></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputemail" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputemail" placeholder="mail@mail.com" ref={(val) => this.email = val} ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputrole" className="col-sm-4 col-form-label">Role <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-8">
                                    <select ref={(val) => (this.role_id = val)} id="inputrole" className="form-select" required>
                                        <option name="" value="">Choose</option>
                                        <option value="1">Administrator</option>
                                        <option value="2">Warehouse</option>
                                        <option value="3">Production Control</option>
                                        <option value="4">Frontdesk</option>
                                    </select>
                                </div>
                            </div>
                            <input type="submit" value="Submit"  className="form-control my-5"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
