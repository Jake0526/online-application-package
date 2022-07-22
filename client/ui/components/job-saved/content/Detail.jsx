import React from 'react';
import { Link } from 'react-router-dom';

export default Detail = () => {
    return(
        <div style={{height: "400px", overflowY: "auto"}}>
            <div className="card card-body">
                <div className="mb-3">
                    <Link className="btn btn-warning" to="/job-application">Apply</Link><br/>
                </div>
                <Link className="" to="/job-application">
                    <i className="fas fa-heart color-danger-800"></i> <strong>Save Job</strong>
                </Link>
                <h2 className="text-primary mt-5">Web Developer React, React JS</h2>
                <div className="ml-2">
                    <small className="text-warning">Posted on July 15, 2022</small>
                    <h4>
                        VSI Solutions <br/>
                        Davao, Davao City
                    </h4>
                    <span className="badge badge-primary">
                        Full-Time
                    </span><br/><br/>
                   <span>Expected Pay: 30,500.00</span><br/><br/><br/>

                    <h5>Job Description</h5>
                    <div className="ml-2">
                        <p>
                            Computer programmers or Software Developers are tasked with designing and creating software programs, integrating systems and software, training end-users, analyzing algorithms, modifying source-code, writing system instructions, debugging, and maintaining operating systems. 
                        </p>
                        <ul>
                            <li>
                                Develop and maintain companys systems software and computing infrastructure
                            </li>
                            <li>
                                Manage systems performance, identify and fix defects ang bugs, support data architecture, and mitigate potential risks                            
                            </li>
                            <li>
                                Execute or direct revision, repair, or expansion of existing programs to
                            </li>
                            <li>
                                Perform systems analysis and programming tasks to maintain and control
                            </li>
                        </ul>
                    </div>
                    <h5>Qualifications</h5>
                    <div className="ml-2">
                        <ul>
                            <li>Must possess at least a Bachelor's/College Degree in Engineering, Computer Science/ Information Technology or equivalent course/degree. </li>
                        </ul>
                    </div>
                    <h5>Skills</h5>
                    <div className="ml-2">
                        <ul>
                            <li>-Front End: HTML5 (Razor), CSS3 (BootStrap), JavaScript JQuery), Wireframe</li>
                            <li>-Back End: ASP.NET MVC4, C#.NETTransact-SQL using MySQL, MS SQL, and MS-Access</li>
                            <li>-Proficient in Wireframes, Adobe Photoshop, Premiere, and Illustrator. Jira, AzureBoard, Version Control is an advantage</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}