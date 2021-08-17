// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
// Internals
import 'components/About-Page/AEdit-Page/index.css'
import Header from 'components/Base-Layout/Header'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            tagline: props.location.aboutProps.tagline,
            description: props.location.aboutProps.description,
        }
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/BE-Baha/edit_about.php', {
            tagline: this.tagline.value,
            description: this.description.value,
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    message: data.message,
                    tagline: this.tagline.value,
                    description: this.description.value,
                })
                swal(this.state.message, {
                    icon: "success",
                });
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
        });
    }
    
    render() {
        const { description, tagline } = this.state;

        return (
            <div className="aedit">
                <div className="container text-center">
                    <Header title="Edit About" />
                    <hr />
                    <div className="row justify-content-center">
                        <form onSubmit={this.postData}>
                            <div className="form-group">
                                <label htmlFor="exampleInputtag1"><b>Tagline <span style={{color:'red'}}>*</span></b></label>
                                <input type="text" className="form-control" id="exampleInputtag1" aria-describedby="tagHelp" placeholder="Enter Tagline" defaultValue={tagline} ref={(val) => this.tagline = val} required></input>
                                <small id="tagHelp" className="form-text text-muted">Your Brand Spirit.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputDesc1"><b>Description <span style={{color:'red'}}>*</span></b></label>
                                <textarea rows="5" className="form-control" id="exampleInputDesc1" aria-describedby="descHelp" placeholder="Enter Description" defaultValue={description} ref={(val) => this.description = val} required></textarea>
                                <small id="descHelp" className="form-text text-muted">Tell the people who is you.</small>
                            </div>
                            <input type="submit" value="Submit"  className="form-control my-5"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
