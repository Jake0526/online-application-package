import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './css/index.css';

export default class Login extends Component {

    render(){
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-4">
                    <div className="blankpage-form-field">
                        <div className="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
                            <a href="javascript:void(0)" className="page-logo-link press-scale-down d-flex align-items-center">
                                <span className="page-logo-text mr-1">NHA Online Application Login</span>
                            </a>
                        </div>
                        <div className="card p-4 border-top-left-radius-0 border-top-right-radius-0">
                            <form action="intel_analytics_dashboard.html">
                                <div className="form-group">
                                    <label className="form-label" for="username">Username</label>
                                    <input type="email" id="username" className="form-control" placeholder="your id or email"/>
                                    <span className="help-block">
                                        Your unique username to app
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="password">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="password"/>
                                    <span className="help-block">
                                        Your password
                                    </span>
                                </div>
                                <div className="form-group text-left">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rememberme"/>
                                        <label className="custom-control-label" for="rememberme"> Remember me for the next 30 days</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-default float-right">Secure login</button>
                            </form>
                        </div>
                        <div className="blankpage-footer text-center">
                            <a href="#"><strong>Recover Password</strong></a> | <a href="#"><strong>Register Account</strong></a>
                        </div>
                    </div>
                    <div className="login-footer p-2">
                        <div className="row">
                            <div className="col col-sm-12 text-center">
                                <i><strong>System Message:</strong> You were logged out from 198.164.246.1 on Saturday, March, 2017 at 10.56AM</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};