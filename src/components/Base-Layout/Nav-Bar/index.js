// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiOutlineCash} from 'react-icons/hi'
import {FiInfo} from 'react-icons/fi'
import {RiAccountCircleLine,RiContactsBookLine} from 'react-icons/ri'
import {CgLogOut} from 'react-icons/cg'
import {MdSupervisorAccount} from 'react-icons/md'
// Internals
import 'components/Base-Layout/Nav-Bar/index.css'
import img1 from 'assets/images/brandon-erlinger-ford-2wSe9hhfpnM-unsplash-removebg-preview.png'

export default function index() {
    return (
        <div className="nav">
            <div id="sidenav" className="side-nav">
                <img src={img1} alt="img1" className="text-center"></img>
                <h2 className="text-center">Hello! James Stanford Jr.</h2>
                <button className="closebtn-nav btn" onClick={closeNav}>&times;</button>
                <NavLink className="btn btn-outline-danger mb-3" to="/update">Update  <AiFillPlusCircle/></NavLink>
                <NavLink to="/order"><HiOutlineCash /> Order List</NavLink>
                <NavLink to="/user"><MdSupervisorAccount /> User List</NavLink>
                <NavLink to="/admin"><RiAccountCircleLine /> Admin List</NavLink>
                <NavLink to="/about"><FiInfo /> About</NavLink>
                <NavLink to="/contact"><RiContactsBookLine /> Contact</NavLink>
                <NavLink to="/"><CgLogOut /> Sign out</NavLink>
            </div>
            <button className="openbtn-nav btn" onClick={openNav}>&#9776; Open</button>
        </div>
    )
}

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
