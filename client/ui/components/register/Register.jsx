import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './css/index.css';

export default class Register extends Component {

    render(){
        return(
            <div className="page-wrapper auth">
                <div className="page-inner bg-brand-gradient">
                    <div className="page-content-wrapper bg-transparent m-0">
                        <div className="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                            <div className="d-flex align-items-center container p-0">
                                <div className="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9 border-0">
                                    <Link to="/" className="page-logo-link press-scale-down d-flex align-items-center">
                                        <img src="img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo"/>
                                        <span className="page-logo-text mr-1">NHA Online Application</span>
                                    </Link>
                                </div>
                                <span className="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
                                    Already a member?
                                </span>
                                <Link to="/new/login" className="btn-link text-white ml-auto ml-sm-0">
                                    Login
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1" style={{background: "url(img/svg/pattern-1.svg) no-repeat center bottom fixed", backgroundSize: "cover"}}>
                            <div className="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <h2 className="fs-xxl fw-500 mt-4 text-white text-center">
                                            Register now, its free!
                                            <small className="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
                                                Your registration is free for a limited time. Enjoy SmartAdmin on your mobile, desktop or tablet.
                                                <br/>It is ready to go wherever you go!
                                            </small>
                                        </h2>
                                    </div>
                                    <div className="col-xl-6 ml-auto mr-auto">
                                        <div className="card p-4 rounded-plus bg-faded">
                                            <div className="alert alert-primary text-dark" role="alert">
                                                <strong>Heads Up!</strong> Due to server maintenance from 9:30GTA to 12GTA, the verification emails could be delayed by up to 10 minutes.
                                            </div>
                                            <form id="js-login" noValidate="" action="intel_analytics_dashboard.html">
                                                <div className="form-group row">
                                                    <label className="col-xl-12 form-label" htmlFor="fname">Your Fullname</label>
                                                    <div className="col-4 pl-1">
                                                        <input type="text" id="lname" className="form-control" placeholder="Last Name *" required/>
                                                        <div className="invalid-feedback">No, you missed this one.</div>
                                                    </div>
                                                    <div className="col-4 pr-1">
                                                        <input type="text" id="fname" className="form-control" placeholder="First Name *" required/>
                                                        <div className="invalid-feedback">No, you missed this one.</div>
                                                    </div>
                                                    <div className="col-4 pr-1">
                                                        <input type="text" id="fname" className="form-control" placeholder="Middle Name" required/>
                                                        <div className="invalid-feedback">No, you missed this one.</div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="emailverify">Email will be needed for login, verification and account recovery</label>
                                                    <input type="email" id="emailverify" className="form-control" placeholder="Email for login" required/>
                                                    <div className="invalid-feedback">No, you missed this one.</div>
                                                    <div className="help-block">Your email will also be your username</div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="userpassword">Set your password: <br/>Don't reuse your bank password, we didn't spend a lot on security for this app.</label>
                                                    <input type="password" id="userpassword" className="form-control" placeholder="minimum 8 characters" required/>
                                                    <div className="invalid-feedback">Sorry, you missed this one.</div>
                                                    <div className="help-block">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="userpassword">Re-type your password.</label>
                                                    <input type="password" id="userpassword" className="form-control" placeholder="Type again your password" required/>
                                                </div>
                                                <div className="form-group demo">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="terms" required/>
                                                        <label className="custom-control-label" htmlFor="terms"> I agree to terms & conditions</label>
                                                        <div className="invalid-feedback">You must agree before proceeding</div>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="newsletter"/>
                                                        <label className="custom-control-label" htmlFor="newsletter">Sign up for newsletters (dont worry, we won't send so many)</label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-md-4 ml-auto text-right">
                                                        <Link 
                                                            id="js-login-btn" 
                                                            type="submit" 
                                                            className="btn btn-block btn-danger btn-lg mt-3"
                                                            to="/profile-setup/personal-information">Create Account</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute pos-bottom pos-left pos-right p-3 text-center text-white">
                                2020 © SmartAdmin by&nbsp;<a href='https://www.gotbootstrap.com' className='text-white opacity-40 fw-500' title='gotbootstrap.com' target='_blank'>gotbootstrap.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}