import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JobDetail from './content/JobDetail';
import List from './content/List';
import { NavbarLoginComponent } from '../partials/navbar-login/NavbarLoginComponent';
import FooterComponent from '../partials/footer/FooterComponent';
import css from './css/index.css';


export default class JobSearch extends Component {

    render(){
        return(
            <div>
                <div className="row justify-content-center m-0 p-0">
                    <div className="col-sm-12 col-md-11">
                        <NavbarLoginComponent/>
                        <div className="card card-body mt-3" style={{backgroundColor: "#7f7b7b", height: "500px"}}>
                            <div className="input-group input-group-l bg-white shadow-inset-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-transparent border-right-0 py-1 px-3 text-success">
                                        <i className="fal fa-search"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control border-left-0 bg-transparent pl-0" placeholder="Type here..."/>
                                <div className="input-group-append">
                                    <button className="btn btn-default" type="button">Search</button>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-sm-6 col-md-4">
                                    <List/>
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <JobDetail/>
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