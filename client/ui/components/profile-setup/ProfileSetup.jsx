import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarPage, LeftPanel, RightPanel } from 'meteor/smart-template';
import css from './css/index.css';
import { PersonalInformation } from './personal-information-component/PersonalInformation';
import { EducationBackground } from './educational-background-component/EducationalBackground';
import { WorkExperience  } from './work-experience-component/WorkExperience';
import { Training } from './training-component/Training';

export default class ProfileSetup extends Component {
    constructor(props){
        super(props);
        this.state = {formRoute: 1};
    }


    handleNextRoute(){
        this.setState({formRoute: this.state.formRoute + 1})
    }

    handlePrevRoute(){
        this.setState({formRoute: this.state.formRoute - 1})
    }

    render(){
        const changeForm = (val) => {
            // console.log(val);
            if(val == 'next'){
                this.handleNextRoute();
            }else{
                this.handlePrevRoute();
            }

         }

         const formRoute = this.state.formRoute;

         if(formRoute == 1){
            form = <PersonalInformation changeForm={changeForm}/>;
         }
         else if(formRoute == 2){
            form = <EducationBackground changeForm={changeForm}/>;
        }else if(formRoute == 3){
            form = <WorkExperience changeForm={changeForm}/>;
        }else if(formRoute == 4){
            form = <Training changeForm={changeForm}/>;
         }
         
        return(
            <div>
                <div className="d-flex flex-grow-1 p-0 shadow-1">
                    <div id="js-slide-left" className="flex-wrap flex-shrink-0 position-relative slide-on-mobile slide-on-mobile-left bg-primary-200 p-3">
                        Profile Setup Steps:<br/><br/><br/>
                        <p className={this.state.formRoute == 1 ? 'fw-500 bg-success' : 'fw-500'}><i>1. Personal Information</i></p><br/>
                        <p className={this.state.formRoute == 2 ? 'fw-500 bg-success' : 'fw-500'}><i>2. Educational Background</i></p><br/>
                        <p className={this.state.formRoute == 3 ? 'fw-500 bg-success' : 'fw-500'}><i>3. Work Experiences</i></p><br/>
                        <p className={this.state.formRoute == 4 ? 'fw-500 bg-success' : 'fw-500'}><i>4. Training/s</i></p><br/>
                    </div>
                    <div class="slide-backdrop" data-action="toggle" data-class="slide-on-mobile-left-show" data-target="#js-slide-left"></div>            
                    <div className="d-flex flex-column flex-grow-1 bg-white">
                        <div className="p-0 p-sm-3">
                            <div className="row hidden-lg-up mb-g">
                                <div className="col-12">
                                    <div className="alert alert-info">
                                        These buttons below can be placed anywhere on your screen. Applying the responsive utility classNamees, you control the visibility of the buttons, for only when they are needed.
                                    </div>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="btn btn-primary btn-block btn-lg" data-action="toggle" data-class="slide-on-mobile-left-show" data-target="#js-slide-left">
                                        open left panel
                                    </a>
                                </div>
                            </div>
                            <div className="panel-tag">
                                {form}
                            </div>
                            <div className="d-flex hidden-lg-down">
                                <img src="img/demo/side-panel-demo.gif" alt="" className="m-auto shadow"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}