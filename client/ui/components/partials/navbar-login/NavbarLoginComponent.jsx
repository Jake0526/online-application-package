import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export const NavbarLoginComponent = () => {
    
    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                        <a className="navbar-brand d-flex align-items-center fw-500" href="#">
                            <img src="dist/img/logo.png" className="d-inline-block align-top mr-2" alt="logo"/> Online Application
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/job-careers">Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <div>
                                        <a href="#" data-toggle="dropdown" title="drlantern@gotbootstrap.com" className="header-icon d-flex align-items-center justify-content-center ml-2">
                                            <img src="dist/img/demo/avatars/avatar-admin.png" className="profile-image rounded-circle" alt="Dr. Codex Lantern"/>
                                            <span className="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down text-contrast">Me</span>
                                            <i className="ni ni-chevron-down hidden-xs-down"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg">
                                            <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                                                <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                                                    <span className="mr-2">
                                                        <img src="dist/img/demo/avatars/avatar-admin.png" className="rounded-circle profile-image" alt="Dr. Codex Lantern"/>
                                                    </span>
                                                    <div className="info-card-text">
                                                        <div className="fs-lg text-truncate text-truncate-lg">Dr. Codex Lantern</div>
                                                        <span className="text-truncate text-truncate-md opacity-80">drlantern@gotbootstrap.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-divider m-0"></div>
                                            <a href="#" className="dropdown-item" data-action="app-reset">
                                                <span data-i18n="drpdwn.reset_layout">Reset Layout</span>
                                            </a>
                                            <a href="#" className="dropdown-item" data-toggle="modal" data-target=".js-modal-settings">
                                                <span data-i18n="drpdwn.settings">Settings</span>
                                            </a>
                                            <div className="dropdown-divider m-0"></div>
                                            <a href="#" className="dropdown-item" data-action="app-fullscreen">
                                                <span data-i18n="drpdwn.fullscreen">Fullscreen</span>
                                                <i className="float-right text-muted fw-n">F11</i>
                                            </a>
                                            <a href="#" className="dropdown-item" data-action="app-print">
                                                <span data-i18n="drpdwn.print">Print</span>
                                                <i className="float-right text-muted fw-n">Ctrl + P</i>
                                            </a>
                                            <div className="dropdown-multilevel dropdown-multilevel-left">
                                                <div className="dropdown-item">
                                                    Language
                                                </div>
                                                <div className="dropdown-menu">
                                                    <a href="#?lang=fr" className="dropdown-item" data-action="lang" data-lang="fr">Français</a>
                                                    <a href="#?lang=en" className="dropdown-item active" data-action="lang" data-lang="en">English (US)</a>
                                                    <a href="#?lang=es" className="dropdown-item" data-action="lang" data-lang="es">Español</a>
                                                    <a href="#?lang=ru" className="dropdown-item" data-action="lang" data-lang="ru">Русский язык</a>
                                                    <a href="#?lang=jp" className="dropdown-item" data-action="lang" data-lang="jp">日本語</a>
                                                    <a href="#?lang=ch" className="dropdown-item" data-action="lang" data-lang="ch">中文</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-divider m-0"></div>
                                            <a className="dropdown-item fw-500 pt-3 pb-3" href="page_login.html">
                                                <span data-i18n="drpdwn.page-logout">Logout</span>
                                                <span className="float-right fw-n">&commat;codexlantern</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}