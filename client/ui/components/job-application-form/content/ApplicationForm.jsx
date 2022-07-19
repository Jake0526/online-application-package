import React from 'react';


export default ApplicationForm = () => {

    return(
        <div>
            <div style={{height: "72%"}}>
                <div className="card card-body">
                    <h2><strong>Application Form</strong></h2>
                    <div className="form-group row mx-3">
                        <label htmlFor="application-letter" className="form-label"><strong>Application Letter</strong></label>
                        <textarea 
                        name="application_letter" 
                        id="application_letter" 
                        className="form-control"
                        placeholder="Write your application letter here.."
                        cols="30" rows="10"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <button
                            className="btn btn-primary">
                            Send Application
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}