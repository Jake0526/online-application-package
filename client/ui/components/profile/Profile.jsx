import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarLoginComponent } from '../partials/navbar-login/NavbarLoginComponent';
import css from './css/index.css';

export default class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="row justify-content-center m-0 p-0">
                    <div className="col-sm-12 col-md-11">
                        <NavbarLoginComponent/>
                    </div>
                </div>
                <div className="row justify-content-center m-0 p-0">
                    <div className="col-sm-12 col-md-11">
                        <main id="js-page-content" role="main" className="page-content">
                            <div className="row">
                                <div className="col-lg-6 col-xl-3 order-lg-1 order-xl-1">
                                    <div className="card mb-g rounded-top">
                                        <div className="row no-gutters row-grid">
                                            <div className="col-12">
                                                <div className="d-flex flex-column align-items-center justify-content-center p-4">
                                                    <img src="dist/img/demo/avatars/avatar-admin-lg.png" className="rounded-circle shadow-2 img-thumbnail" alt=""/>
                                                    <h5 className="mb-0 fw-700 text-center mt-3">
                                                        Dr. Codex Lantern
                                                        <small className="text-muted mb-0">Toronto, Canada</small>
                                                    </h5>
                                                    <div className="mt-4 text-center demo">
                                                        <a href="" className="fs-xl" style={{color:"#3b5998"}}>
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                        <a href="" className="fs-xl" style={{color:"#38A1F3"}}>
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                        <a href="" className="fs-xl" style={{color:"#db3236"}}>
                                                            <i className="fab fa-google-plus"></i>
                                                        </a>
                                                        <a href="" className="fs-xl" style={{color:"#0077B5"}}>
                                                            <i className="fab fa-linkedin-in"></i>
                                                        </a>
                                                        <a href="" className="fs-xl" style={{color:"#000000"}}>
                                                            <i className="fab fa-reddit-alien"></i>
                                                        </a>
                                                        <a href="" className="fs-xl" style={{color:"#00AFF0"}}>
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                        <a href="" className="fs-xl" style={{color:"#0063DC"}}>
                                                            <i className="fab fa-flickr"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-center py-3">
                                                    <h5 className="mb-0 fw-700">
                                                        15
                                                        <small className="text-muted mb-0">Saved Jobs</small>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-center py-3">
                                                    <h5 className="mb-0 fw-700">
                                                        8
                                                        <small className="text-muted mb-0">Applications</small>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3 text-center">
                                                    <a href="" className="btn-link font-weight-bold">Follow</a> <span className="text-primary d-inline-block mx-3">&#9679;</span>
                                                    <a href="" className="btn-link font-weight-bold">Message</a> <span className="text-primary d-inline-block mx-3">&#9679;</span>
                                                    <a href="" className="btn-link font-weight-bold">Connect</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-g">
                                        <div className="row row-grid no-gutters">
                                            <div className="col-12">
                                                <div className="row align-items-center justify-content-between p-3">
                                                    <div className="col-6">
                                                        <span className="mb-0 fs-xl">
                                                            Personal Information
                                                        </span>
                                                    </div>
                                                    <div className="col-6 text-right">
                                                            <a href="" className="btn-link font-weight-bold">View all</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-3 order-lg-1 order-xl-1">
                                                <div className="col-12 mt-3 ml-2">
                                                    <strong>Name</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Dr. Codex Lantern</span>
                                                    </div>
                                                    <strong>Birthplace</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Davao</span>
                                                    </div>
                                                    <strong>Birthday</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>December 15, 1994</span>
                                                    </div>
                                                    <strong>Origin Province</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Davao</span>
                                                    </div>
                                                    <strong>Sex</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Male</span>
                                                    </div>
                                                    <strong>Civil Status</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Single</span>
                                                    </div>
                                                    <strong>Religion</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Roman Catholic</span>
                                                    </div>
                                                    <strong>Citizenship</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>Filipino</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-3 order-lg-2 order-xl-3">
                                                <div className="col-12 mt-3">
                                                    <strong>Email</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>DrCodexLantern@gmail.com</span>
                                                    </div>
                                                    <strong>Mobile Number</strong>
                                                    <div className="text-primary ml-3">
                                                        <span> +63 9212312322</span>
                                                    </div>
                                                    <strong>Telephone Number</strong>
                                                    <div className="text-primary ml-3">
                                                        <span> None</span>
                                                    </div>
                                                    <strong>Address</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>17th Avenue, Macy Stree, Ayala, Davao City</span>
                                                    </div>
                                                    <strong>Height</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>160 Cm</span>
                                                    </div>
                                                    <strong>Weight</strong>
                                                    <div className="text-primary ml-3">
                                                        <span>63 Kg</span>
                                                    </div>
                                                    <strong>Blood Type</strong>
                                                    <div className="text-primary ml-3">
                                                        <span> O+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-g">
                                        <div className="row row-grid no-gutters">
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h2 className="mb-0 fs-xl">
                                                        Work Experiences
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h5 className="text-danger">
                                                        Web Developer
                                                        <small className="mt-0 mb-3 text-muted">
                                                            VSI Solutions
                                                        </small>
                                                        <span className="badge badge-danger fw-n position-absolute pos-top pos-right mt-3 mr-3">Full-Time</span>
                                                    </h5>
                                                    <div className="row fs-b fw-300">
                                                        <div className="col text-left">
                                                            From
                                                        </div>
                                                        <div className="col text-right">
                                                            June, 2016
                                                        </div>
                                                    </div>
                                                    <div className="fw-300 mb-3">
                                                        <div className="row">
                                                            <div className="col">
                                                                To
                                                            </div>
                                                            <div className="col text-right">
                                                                April, 2018
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h5 className="text-danger">
                                                        Web Developer
                                                        <small className="mt-0 mb-3 text-muted">
                                                            Web Dev Global
                                                        </small>
                                                        <span className="badge badge-danger fw-n position-absolute pos-top pos-right mt-3 mr-3">Full-Time</span>
                                                    </h5>
                                                    <div className="row fs-b fw-300">
                                                        <div className="col text-left">
                                                            From
                                                        </div>
                                                        <div className="col text-right">
                                                            December, 2018
                                                        </div>
                                                    </div>
                                                    <div className="fw-300 mb-3">
                                                        <div className="row">
                                                            <div className="col">
                                                                To
                                                            </div>
                                                            <div className="col text-right">
                                                                Present
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-3 order-lg-2 order-xl-3">
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <a href="" className="d-flex flex-row align-items-center">
                                                <div className='icon-stack display-3 flex-shrink-0'>
                                                    <i className="fal fa-circle icon-stack-3x opacity-100 color-primary-400"></i>
                                                    <i className="fas fa-graduation-cap icon-stack-1x opacity-100 color-primary-500"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <strong>
                                                        Add Qualifications
                                                    </strong>
                                                    <br/>
                                                    Adding qualifications will help gain more clients
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <a href="" className="d-flex flex-row align-items-center">
                                                <div className='icon-stack display-3 flex-shrink-0'>
                                                    <i className="fal fa-circle icon-stack-3x opacity-100 color-success-400"></i>
                                                    <i className="fas fa-diagnoses icon-stack-1x opacity-100 color-success-500"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <strong>
                                                        Add Work Experience
                                                    </strong>
                                                    <br/>
                                                    More experience means more client
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card mb-g">
                                        <div className="card-body">
                                            <a href="" className="d-flex flex-row align-items-center">
                                                <div className='icon-stack display-3 flex-shrink-0'>
                                                    <i className="fal fa-circle icon-stack-3x opacity-100 color-warning-400"></i>
                                                    <i className="fas fa-handshake icon-stack-1x opacity-100 color-warning-500"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <strong>
                                                        Add Training and Seminar
                                                    </strong>
                                                    <br/>
                                                    Gain more potential clients by adding trainings and seminars
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card mb-g">
                                        <div className="row row-grid no-gutters">
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h2 className="mb-0 fs-xl">
                                                        Dr. Codex Lantern's Job Application Summary
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <div className="fw-500 fs-xs">Applications</div>
                                                        <div className="d-flex text-primary align-items-center fs-xl">
                                                            <span className="ml-auto">5 Applications</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <div className="fw-500 fs-xs">Accepted</div>
                                                        <div className="d-flex text-primary align-items-center fs-xl">
                                                            <span className="ml-auto">4/5 Applications</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <div className="fw-500 fs-xs">Hired</div>
                                                    <div className="d-flex text-success align-items-center fs-xl">
                                                        <span className="ml-auto">0/5 Applications</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <div className="fw-500 fs-xs">Returned</div>
                                                    <div className="d-flex text-warning align-items-center fs-xl">
                                                        <span className="ml-auto">1/5 Applications</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <div className="fw-500 fs-xs">Declined</div>
                                                    <div className="d-flex text-danger align-items-center fs-xl">
                                                        <span className="ml-auto">1/5 Applications</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3 text-center">
                                                    <a href="" className="btn-link font-weight-bold">View all</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-g">
                                        <div className="row row-grid no-gutters">
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h2 className="mb-0 fs-xl">
                                                        Qualifications
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h5 className="text-primary">
                                                            Bachelors of Science in Information Technology
                                                        <small className="mt-0 mb-3 text-muted">
                                                            Mindanao State University - Lanao Del Sur
                                                        </small>
                                                        <span className="badge badge-primary fw-n position-absolute pos-top pos-right mt-3 mr-3">Undergraduate</span>
                                                    </h5>
                                                    <div className="row fs-b fw-300">
                                                        <div className="col text-left">
                                                            From
                                                        </div>
                                                        <div className="col text-right">
                                                            June, 2011
                                                        </div>
                                                    </div>
                                                    <div className="fw-300 mb-0">
                                                        <div className="row">
                                                            <div className="col">
                                                                To
                                                            </div>
                                                            <div className="col text-right">
                                                                April, 2015
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h5 className="text-primary">
                                                            Masters in Information Technology
                                                        <small className="mt-0 mb-3 text-muted">
                                                            University of Ateneo De Davao University - Davao City
                                                        </small>
                                                        <span className="badge badge-primary fw-n position-absolute pos-top pos-right mt-3 mr-3">Graduate</span>
                                                    </h5>
                                                    <div className="row fs-b fw-300">
                                                        <div className="col text-left">
                                                            From
                                                        </div>
                                                        <div className="col text-right">
                                                            June, 2019
                                                        </div>
                                                    </div>
                                                    <div className="fw-300 mb-0">
                                                        <div className="row">
                                                            <div className="col">
                                                                To
                                                            </div>
                                                            <div className="col text-right">
                                                                Present
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-g">
                                        <div className="row row-grid no-gutters">
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h2 className="mb-0 fs-xl">
                                                        Trainings and Seminars
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="p-3">
                                                    <h5 className="text-warning">
                                                        Vue 2 Seminar
                                                        <small className="mt-0 mb-3 text-muted">
                                                            A training about Vue JS, one of the leading front-end technology currently in use.
                                                        </small>
                                                    </h5>
                                                    <div className="row fs-b fw-300">
                                                        <div className="col text-left">
                                                            From
                                                        </div>
                                                        <div className="col text-right">
                                                            June 25, 2018
                                                        </div>
                                                    </div>
                                                    <div className="fw-300 mb-3">
                                                        <div className="row">
                                                            <div className="col">
                                                                To
                                                            </div>
                                                            <div className="col text-right">
                                                                June 25, 2018
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}