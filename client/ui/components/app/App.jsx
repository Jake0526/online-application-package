import React from 'react';
import { NavbarComponent } from "../partials/navbar/NavbarComponent";
import FooterComponent from '../partials/footer/FooterComponent';
import css from './css/index.css';

export default App = (props) => {

  return (
    <div className="row justify-content-center m-0 p-0">
        <div className="col-sm-12 col-md-11">
            <NavbarComponent/>
            <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-12">
                    <div style={{
                        backgroundImage: `url("/images/banner.jpg")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        borderRadius: "10px", 
                        filter: "brightness(65%)", height: "200px"}}>
                        <br/><br/>
                        <form action="">
                            <div className="row" style={{margin: "2% 15% 1% 15%"}}>
                                <div className="col-sm-6 col-md-5">
                                    <div className="form-group">
                                        <input type="text" 
                                            id="simpleinput" 
                                            className="form-control" 
                                            placeholder="Keyword"
                                            />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-5">
                                    <div className="form-group">
                                        <input type="text" id="simpleinput" className="form-control" placeholder="Category"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2">
                                    <div className="form-group">
                                        <div className="btn btn-primary btn-block">Search</div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row mt-4 mb-5">
                <div className="col-sm-12 col-md-12">
                    <div className="card card-body" style={{backgroundColor: "#7f7b7b"}}>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-12">
                                <div className="fw-500">
                                    <div className="fs-xl text-contrast">
                                        <i>Recent Job Posts..</i>
                                    </div>
                                </div>                       
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Accountant</i>
                                        </div>
                                    </div>    
                                    <div>
                                        <small>Posted on January 3, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-primary">Full-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro maxime eaque odit vel! 
                                            Eius delectus, minima dicta eos eligendi, commodi dolor, 
                                            in incidunt hic laboriosam molestias!
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Davao, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Administrative Aide</i>
                                        </div>
                                    </div>
                                    <div>
                                        <small>Posted on January 10, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-success">Part-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Mati, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Web Developer</i>
                                        </div>
                                    </div>
                                    <div>
                                        <small>Posted on January 7, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-success">Part-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Davao, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Mobile Developer</i>
                                        </div>
                                    </div> 
                                    <div>
                                        <small>Posted on January 3, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-primary">Full-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro maxime eaque odit vel! 
                                            Eius delectus, minima dicta eos eligendi, commodi dolor, 
                                            in incidunt hic laboriosam molestias!
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Davao, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Administrative Aide</i>
                                        </div>
                                    </div>
                                    <div>
                                        <small>Posted on January 10, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-success">Part-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Mati, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Accountant</i>
                                        </div>
                                    </div>    
                                    <div>
                                        <small>Posted on January 3, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-primary">Full-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro maxime eaque odit vel! 
                                            Eius delectus, minima dicta eos eligendi, commodi dolor, 
                                            in incidunt hic laboriosam molestias!
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Davao, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Web Developer</i>
                                        </div>
                                    </div>
                                    <div>
                                        <small>Posted on January 7, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-success">Part-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Davao, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="card card-body" style={{height: "200px", overflow: "auto"}}>
                                    <div className="fw-500">
                                        <div className="fs-xl text-contrast">
                                            <i>Mobile Developer</i>
                                        </div>
                                    </div> 
                                    <div>
                                        <small>Posted on January 3, 2022</small>
                                    </div>
                                    <hr />
                                    <span className="badge badge-primary">Full-Time</span>
                                    <div><br/></div>
                                    <div className="fw-400">
                                        <div className="fs-l text-contrast">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Ipsum ut architecto aspernatur porro maxime eaque odit vel! 
                                            Eius delectus, minima dicta eos eligendi, commodi dolor, 
                                            in incidunt hic laboriosam molestias!
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="fw-500">
                                        <div className="fs-l text-contrast">
                                            <i>Davao, Davao City</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    </div>
  );
};