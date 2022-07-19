import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export const NavbarComponent = () => {
    
    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                        <a className="navbar-brand d-flex align-items-center fw-500" href="#">
                            <img src="dist/img/logo.png" className="d-inline-block align-top mr-2" alt="logo"/> Online Application
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/job-careers">Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/new/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/new/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}