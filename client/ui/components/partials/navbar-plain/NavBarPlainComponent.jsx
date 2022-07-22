import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export const NavBarPlainComponent = () => {
    
    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top pt-3 pb-3">
                        <a className="navbar-brand d-flex align-items-center fw-500" href="#">
                            <img src="dist/img/logo.png" className="d-inline-block align-top mr-2" alt="logo"/> Online Application
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}