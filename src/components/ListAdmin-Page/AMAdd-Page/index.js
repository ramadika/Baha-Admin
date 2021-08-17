// Dependencies
import React, { Component } from 'react'
import axios from 'axios';
// Internals
import 'components/ListAdmin-Page/AMAdd-Page/index.css'
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
        axios.post('http://localhost/BE-Baha/add_member.php', {

        })
    }

    render() {
        return (
            <div className="amadd">
                <div className="container">
                    <Header title="Add Member" />
                    <hr />
                    <div className="row">
                        <form onSubmit={this.postData}>
                            <div className="form-group row">
                                <label htmlFor="inputname" className="col-sm-2 col-form-label">Name <span style={{color:'red'}}>*</span></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputname" placeholder="Name" ref={(val) => this.name = val} required></input>
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
