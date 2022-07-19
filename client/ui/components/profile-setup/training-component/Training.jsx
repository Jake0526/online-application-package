import React, { useRef, useState }from 'react';
import { Link } from 'react-router-dom';
import css from './css/index.css';

export const Training = ({changeForm}) => {

    const ref = useRef();
    const [inputList, setInputList] = useState([{
        training_id: "", 
        description: "", 
        date_from: "",
        date_to: "",
        hours: "",
        type: "",
        agency: "",}]);

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
            training_id: "", 
            description: "", 
            date_from: "",
            date_to: "",
            hours: "",
            type: "",
            agency: "",}]);
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
                                            id="training_id" 
                                            name="training_id" 
                                            className="form-control" 
                                            placeholder="Training Name *"
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                        <div className="help-block">Please write the full description/title. </div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <input 
                                            type="text" 
                                            id="agency" 
                                            name="agency" 
                                            className="form-control" 
                                            placeholder="Agency *"
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
                                    <div className="col-12 pr-1 pl-1">
                                        <textarea 
                                            id="description" 
                                            name="description" 
                                            className="form-control" 
                                            cols="30" 
                                            rows="3"
                                            placeholder="Remarks"
                                            onChange={e => handleChangeInput(e, i)}></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-4 pl-1">
                                        <select 
                                            class="form-control" 
                                            id="type" 
                                            name="type"
                                            onChange={e => handleChangeInput(e, i)}>
                                            <option selected disabled>Select training type *</option>
                                            <option>Type 1</option>
                                            <option>Type 2</option>
                                        </select>                                                
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-4 pr-1">
                                        <input 
                                            type="text" 
                                            id="hours" 
                                            name="hours" 
                                            className="form-control" 
                                            placeholder="Hours *"
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
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
                    <Link 
                        id="js-login-btn" 
                        type="submit" 
                        className="btn btn-success btn-lg mt-3"
                        to="/profile">Create My Profile</Link>
                </div>
            </div>

            
        </div>
    );
}