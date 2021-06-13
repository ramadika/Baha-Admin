// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Header from 'components/Base-Layout/Header'
// Internals
import 'components/About-Page/index.css'
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
            <div className="about">
                <div className="container">
                    <Header title="About" tag="Your brands Information that can be seen by anyone" />
                    <hr />
                    <div className="row text-center mt-5 content-about">
                        <h2>Because We Love What We Do.</h2>
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h5>
                        <NavLink to="/eAbout" className="btn btn-outline-info mt-4">Edit</NavLink>
                    </div>
                    <h4 className="text-center"><span><b>Our </b>Team Leads <b>.</b></span></h4>
                    <div className="row mb-3 justify-content-center">
                        <NavLink to="/men" className="col d-flex align-items-center justify-content-center teams-about" id="a-about">
                            <h3>Founder</h3>
                        </NavLink>
                        <NavLink to="/women" className="col d-flex align-items-center justify-content-center teams-about" id="b-about">
                            <h3>Co-Founder</h3>
                        </NavLink>
                        <NavLink to="/accessories" className="col d-flex align-items-center justify-content-center teams-about" id="c-about">
                            <h3>El Presidente</h3>
                        </NavLink>
                        <NavLink to="/accessories" className="col d-flex align-items-center justify-content-center teams-about" id="d-about">
                            <h3>Money Man</h3>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
