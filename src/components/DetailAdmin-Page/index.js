// Dependencies
import React, { Component } from 'react'
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/DetailAdmin-Page/index.css'
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
            <div className="adminDetail">
                <div className="container">
                    <Header title="Admin Detail" tag="A detail of your partner." />
                    <hr />
                    <div className="row mt-4 mb-3 justify-content-center">
                        <div className="row">
                            <div className="col">
                                <h3><b>Admin ID</b></h3>
                                <h3><b>Full Name</b></h3>
                                <h3><b>Nick Name</b></h3>
                                <h3><b>Status</b></h3>
                                <h3><b>Contact</b></h3>
                            </div>
                            <div className="col align-self-center">
                                <h4>AD-123</h4>
                                <h4>Hendrawan</h4>
                                <h4>Hendra</h4>
                                <h4>Administrator</h4>
                                <h4>+021 345 67</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
