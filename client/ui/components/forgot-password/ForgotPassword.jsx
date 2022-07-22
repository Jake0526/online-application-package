import React, { Component } from 'react';
import { NavBarPlainComponent } from '../partials/navbar-plain/NavBarPlainComponent';
import { Link } from 'react-router-dom';
import css from './css/index.css';


export default class ForgotPassword extends Component {

    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-11">
                    <NavBarPlainComponent/>
                    <div className="col-xl-6 ml-auto mr-auto mt-5">
                        <div className="card p-4 rounded-plus bg-faded">
                            <form id="js-login" novalidate="" action="intel_analytics_dashboard.html">
                                <div className="form-group">
                                    <label className="form-label" for="lostaccount">Your username or email</label>
                                    <input type="email" id="lostaccount" className="form-control" placeholder="Recovery email" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                    <div className="help-block">We will email you the instructions</div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-4 ml-auto text-right">
                                        <button id="js-login-btn" type="submit" className="btn btn-danger">Recover</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
