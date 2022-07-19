import React, { useRef, useState }from 'react';
import { Link } from 'react-router-dom';
import css from './css/index.css';

export const EducationBackground = ({changeForm}) => {
    const ref = useRef();

    const [inputList, setInputList] = useState([{
        school: "", 
        level: "", 
        level_units_earned: "",
        year_graduated: "",
        description: "",
        period_from: "",
        period_to: "",
        awards: "",
        remarks: "",}]);

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
            school: "", 
            level: "", 
            level_units_earned: "",
            year_graduated: "",
            description: "",
            period_from: "",
            period_to: "",
            awards: "",
            remarks: "",}]);
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
                                        <select 
                                            class="form-control" 
                                            id="school" 
                                            name="school"
                                            onChange={e => handleChangeInput(e, i)}>
                                            <option selected disabled>Select School *</option>
                                            <option>School 1</option>
                                            <option>School 2</option>
                                        </select>                                                
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-3 pr-1">
                                        <select 
                                            class="form-control" 
                                            id="level" 
                                            name="level"
                                            onChange={e => handleChangeInput(e, i)}>
                                            <option selected disabled>Select Level *</option>
                                            <option>Undergraduate</option>
                                            <option>Graduate</option>
                                            <option>Post Graduate</option>
                                        </select>  
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-3 pr-1">
                                        <input 
                                            type="text" 
                                            id="level_units_earned" 
                                            name="level_units_earned" 
                                            className="form-control" 
                                            placeholder="Units Earned"
                                            onChange={e => handleChangeInput(e, i)}/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 pr-1 pl-1">
                                        <input 
                                            type="text" 
                                            id="description" 
                                            name="description" 
                                            className="form-control" 
                                            placeholder="Course/Degree *"
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                        <div className="help-block">Please write the full description of the degree. ex: Bachelor of Science in Information Technology </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-4 pl-1">
                                        <input 
                                            type="text" 
                                            id="year_graduated" 
                                            name="year_graduated" 
                                            className="form-control" 
                                            placeholder="Year Graduated *" 
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-4 pr-1">
                                        <input 
                                            class="form-control" 
                                            id="period_from" 
                                            type="text" 
                                            name="period_from" 
                                            placeholder="Period from *"
                                            ref={ref}
                                            // onChange={(e) => console.log(e.target.value)}
                                            onFocus={() => (ref.current.type = "date")}
                                            onBlur={() => (ref.current.type = "date")}
                                            onChange={e => handleChangeInput(e, i)} required/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                    <div className="col-4 pr-1">
                                        <input 
                                            class="form-control" 
                                            id="period_to" 
                                            type="text" 
                                            name="period_to" 
                                            placeholder="Period to"
                                            ref={ref}
                                            // onChange={(e) => console.log(e.target.value)}
                                            onFocus={() => (ref.current.type = "date")}
                                            onBlur={() => (ref.current.type = "date")}
                                            onChange={e => handleChangeInput(e, i)}/>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 pr-1 pl-1">
                                        <textarea 
                                            id="awards" 
                                            name="awards" 
                                            className="form-control" 
                                            cols="30" 
                                            rows="3"
                                            placeholder="Award/s"
                                            onChange={e => handleChangeInput(e, i)}></textarea>
                                        <div className="invalid-feedback">No, you missed this one.</div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 pr-1 pl-1">
                                        <textarea 
                                            id="remarks" 
                                            name="remarks" 
                                            className="form-control" 
                                            cols="30" 
                                            rows="3"
                                            placeholder="Remarks"
                                            onChange={e => handleChangeInput(e, i)}></textarea>
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