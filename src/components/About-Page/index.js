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
        setInterval(this.fetchData, 1000);
    }

    render() {
        const { result } = this.state;

        return (
            <div className="about">
                <div className="container">
                    <Header title="About" tag="Your brands Information that can be seen by anyone" />
                    <hr />
                    {
                        result.map((item) => (
                            <div key={item.company_id} className="row text-center mt-5 content-about">
                                <h2>{item.tagline}</h2>
                                <h5>{item.description}</h5>
                                <NavLink to="/eAbout" className="btn btn-outline-info mt-4">Edit</NavLink>
                            </div>
                        ))
                    }
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
