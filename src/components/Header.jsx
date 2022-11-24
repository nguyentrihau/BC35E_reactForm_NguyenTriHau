import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                    {/* Brand */}
                    <a className="navbar-brand" href="#">
                        <img src="./img/MAX-OP1.png" width={160} height={50}  alt="..." />
                    </a>
                    {/* Toggler/collapsibe Button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-success mx-1 text-white':'nav-link bg-dark mx-1'} to="/home" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{borderRadius:'5px'}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-success mx-1 text-white':'nav-link bg-dark mx-1'} to="/form" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{borderRadius:'5px'}}>Form</NavLink>
                            </li>   
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-success mx-1 text-white':'nav-link bg-dark mx-1'} to="/about" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{borderRadius:'5px'}}>About</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='text-white'>
                        <button className='btn btn-success text-white'><i className="fa fa-user" aria-hidden="true"></i> Sign out</button>
                    </div>
                </nav>

            </div>
        )
    }
}
