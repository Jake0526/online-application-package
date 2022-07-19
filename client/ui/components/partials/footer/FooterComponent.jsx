import React, { Component } from 'react';

export default class FooterComponent extends Component {
    render(){
        return(
            <div>
                <div className="row mt-4 mb-2">
                    <div className="col-sm-12 col-md-12">
                        <div className="card card-body" style={{backgroundColor: "#7f7b7b"}}>
                            <ul className="d-flex ml-0 pl-0 mr-3">
                                <li className="d-inline-flex mr-auto fs-l text-contrast">
                                    <i className="fal fa-copyright"></i>
                                    &nbsp; Copyright Reserved.
                                </li>
                                <li className="d-inline-flex fs-l text-contrast mr-5">
                                    <i class="ni ni-social-facebook"></i>
                                    &nbsp; Facebook
                                </li>
                                <li className="d-inline-flex fs-l text-contrast ml-5">
                                    <i class="ni ni-social-twitter"></i>
                                    &nbsp; Twitter
                                </li>
                                <li className="d-inline-flex fs-l text-contrast ml-5">
                                    <i class="fal fa-envelope-open"></i>
                                    &nbsp; Email
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}