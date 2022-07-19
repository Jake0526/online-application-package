import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarLoginComponent } from '../partials/navbar-login/NavbarLoginComponent';
import FooterComponent from '../partials/footer/FooterComponent';
import JobDetail from '../job-list/content/JobDetail';
import ApplicationForm from './content/ApplicationForm';
import css from './css/index.css';

export default class JobApplicationForm extends Component {

    render(){
        return(
            <div>
                <div className="row justify-content-center m-0 p-0">
                    <div className="col-sm-12 col-md-11">
                        <NavbarLoginComponent/>
                        <div className="card card-body mt-5" style={{backgroundColor: "#7f7b7b", height: "60%"}}>
                            <div className="row ml-1">
                                <div className="col-sm-12 col-md-12">
                                    <Link to="/job-careers">Return</Link>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-12 col-md-6">
                                    <JobDetail/>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <ApplicationForm/>
                                </div>
                            </div>
                        </div>
                        <FooterComponent/>
                    </div>
                </div>
            </div>
        )
    }
}