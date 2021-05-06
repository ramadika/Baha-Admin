// Dependencies
import React from 'react'
// Internals
import 'components/Base-Layout/Header/index.css'
import img1 from 'assets/images/Arnawa-removebg-preview.png'

export default function index(props) {
    const { title, tag } = props;
    
    return (
        <div className="header">
            <h6><img src={img1} alt="img"></img><b>Arn</b>awa.</h6>
            <h1>{title}</h1>
            <h5>{tag}</h5>
        </div>
    )
}
