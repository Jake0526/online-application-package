import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Application from './content/Application';
import List from './content/List';
import { NavbarLoginComponent } from '../partials/navbar-login/NavbarLoginComponent';
import FooterComponent from '../partials/footer/FooterComponent';
import css from './css/index.css';


export default class JobApplicationList extends Component {

    render(){
        return(
            <div>
                <div className="row justify-content-center m-0 p-0">
                    <div className="col-sm-12 col-md-11">
                        <NavbarLoginComponent/>
                        <div className="card card-body mt-5" style={{backgroundColor: "#7f7b7b"}}>
                            <div className="row mt-5">
                            <div className="col-sm-6 col-md-4">
                                    <List/>
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <Application/>
                                </div>
                            </div>
                        </div>
                    <FooterComponent/>
                    </div>
                </div>
            </div>
        );
    }
};