import React, { useRef, useState }from 'react';
import { Link } from 'react-router-dom';
import css from './css/index.css';

export const WorkExperience = ({changeForm}) => {

    const ref = useRef();
    const [inputList, setInputList] = useState([{
        position_title: "", 
        employer: "", 
        date_from: "",
        date_to: "",
        monthly_salary: "",
        pay_grade: "",
        appointment_status: "",
        is_goverment_service: "",}]);

    const handleChangeInput = (e, index) =>{
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, {
            position_title: "", 
            employer: "", 
            date_from: "",
            date_to: "",
            monthly_salary: "",
            pay_grade: "",
            appointment_status: "",
            is_goverment_service: "",}]);
    }

    return(

        <div>
            <div className="alert alert-primary text-dark" role="alert">
                <strong>Note: Don't forget to fill-in the required (*) fields.</strong> 
            </div>
            {inputList.map((x, i) => {
                return(
                    <div className="row mt-5">
                        <div className="col-xl-6 ml-auto mr-auto">
                            <div className="card p-4 rounded-plus bg-faded">
                                <div className="form-group row">
                                    <div className="col-6 pl-1">
                                        <input 
                                            type="text" 
                                            id="position_title" 
                                            name="position_title" 
                                            className="form-control" 
                                            placeholder="Position/Title *"
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                        <div className="help-block">Please write the full description/title. </div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <input 
                                            type="text" 
                                            id="employer" 
                                            name="employer" 
                                            className="form-control" 
                                            placeholder="Employer *"
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                        <div className="help-block">Please write the full name of the employer/company. ex: National Housing Authority </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-6 pl-1">
                                    <input 
                                            class="form-control" 
                                            type="text" 
                                            id="date_from" 
                                            name="date_from" 
                                            placeholder="Start Date *"
                                            ref={ref}
                                            onFocus={() => (ref.current.type = "date")}
                                            onBlur={() => (ref.current.type = "date")}
                                            onChange={e => handleChangeInput(e, i)} required/>
                                    </div>
                                    <div className="col-6 pl-1">
                                    <input 
                                            class="form-control" 
                                            type="text" 
                                            id="date_to" 
                                            name="date_to" 
                                            placeholder="End Date"
                                            ref={ref}
                                            onFocus={() => (ref.current.type = "date")}
                                            onBlur={() => (ref.current.type = "date")}
                                            onChange={e => handleChangeInput(e, i)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-4 pl-1">
                                        <select 
                                            class="form-control" 
                                            id="appointment_status" 
                                            name="appointment_status"
                                            onChange={e => handleChangeInput(e, i)}>
                                            <option selected disabled>Select employment status *</option>
                                            <option>Full-Time</option>
                                            <option>Part-Time</option>
                                        </select>                                                
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-4 pr-1">
                                        <input 
                                            type="text" 
                                            id="monthly_salary" 
                                            name="monthly_salary" 
                                            className="form-control" 
                                            placeholder="Monthly Salary *"
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-4 pr-1">
                                        <input 
                                            type="text" 
                                            id="pay_grade" 
                                            name="pay_grade" 
                                            className="form-control" 
                                            placeholder="Pay Grade"
                                            onChange={e => handleChangeInput(e, i)}/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-6 pl-1 pr-1">
                                    <div className="custom-control custom-checkbox mt-2">
                                        <input 
                                            type="checkbox" 
                                            className="custom-control-input" 
                                            id="is_government_service" 
                                            name="is_government_service" 
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <label className="custom-control-label" htmlFor="is_government_service"> Is it a Government Service? *</label>
                                        <div className="invalid-feedback">You must agree before proceeding</div>
                                    </div>
                                    </div> 
                                </div>
                                <div className="row no-gutters justify-content-start">
                                    <div className="col-md-4">
                                        {inputList.length - 1 === i && <button
                                            className="btn btn-primary mt-3 mr-4" 
                                            onClick={handleAddClick}>Add More</button>}
                                        {inputList.length !== 1 && <button
                                            className="btn btn-danger mt-3"
                                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="row no-gutters">
                <div className="col-md-4 ml-auto text-right">
                    <button 
                        id="js-login-btn" 
                        type="submit" 
                        className="btn btn-danger btn-lg mt-3 mr-5"
                        onClick={() => { changeForm('prev'); }}>Back</button>
                    <button 
                        id="js-login-btn" 
                        type="submit" 
                        className="btn btn-success btn-lg mt-3"
                        onClick={() => { changeForm('next'); }}>Next</button>
                </div>
            </div>

            
        </div>
    );
}