// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from 'sweetalert';
// Internals
import 'components/ListAdmin-Page/ARAdd-Page/index.css'
import Header from 'components/Base-Layout/Header'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            message: '',
        }
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/BE-Baha/add_role.php', {
            role_name: this.role_name.value,
            description: this.description.value,
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    message: data.message
                })
                swal(this.state.message, {
                    icon: "success",
                });
                event.target.reset();
            }
            else{
                this.setState({
                    message: data.message
                })
                swal(this.state.message, {
                    icon: "error",
                })
            }
        }.bind(this))
        .catch(function(error) {
            console.log(error);
        })
    }

    goBack = () => {
        window.history.back();
    }

    render() {
        return (
            <div className="aradd">
                <div className="container">
                    <Header title="Add Role" />
                    <hr />
                    <div className="row mt-4">
                        <div className="col">
                            <form onSubmit={this.postData}>
                                <div className="form-group row">
                                    <label htmlFor="inputrole" className="col-sm-2 col-form-label">Role Name <span style={{color:'red'}}>*</span></label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputrole" placeholder="Role Name" ref={(val) => this.role_name = val} required></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputdesc" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <textarea rows="5" className="form-control" id="inputdesc" placeholder="Enter Description" ref={(val) => this.description = val}></textarea>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <button onClick={() => this.goBack()} className="btn btn-outline-danger my-5">Go Back</button>
                                    <input type="submit" value="Submit"  className="form-control my-5"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
