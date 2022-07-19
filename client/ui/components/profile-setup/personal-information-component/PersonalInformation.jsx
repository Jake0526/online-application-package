import React, { useRef }from 'react';
import { Link } from 'react-router-dom';
import css from './css/index.css';

export const PersonalInformation = ({changeForm}) => {
    const ref = useRef();
    return(
        <div className="row">
            <div className="col-xl-6 ml-auto mr-auto">
                <form id="js-login" noValidate="" action="intel_analytics_dashboard.html">
                    <div className="card p-4 rounded-plus bg-faded">
                        <div className="alert alert-primary text-dark" role="alert">
                            <strong>Note: Don't forget to fill-in the required (*) fields.</strong> 
                        </div>
                            <div className="form-group row">
                                <label className="col-xl-12 form-label">Your Fullname</label>
                                <div className="col-4 pl-1">
                                    <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Last Name *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-4 pr-1">
                                    <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-4 pr-1">
                                    <input type="text" id="middle_name" name="middle_name" className="form-control" placeholder="Middle Name"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4 pl-1">
                                    <input type="text" id="maiden_name" name="maiden_name" className="form-control" placeholder="Maiden Name (Spouse only)"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-4 pr-1">
                                    <input type="text" id="suffix_name" name="suffix_name" className="form-control" placeholder="Suffix"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-4 pr-1">
                                    <input type="text" id="nick_name" name="nick_name" className="form-control" placeholder="Nickname *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <label className="col-xl-12 form-label">Residence Address </label>
                                <div className="col-3 pr-1">
                                    <input type="text" id="house_block_lot_no" name="house_block_lot_no" className="form-control" placeholder="Block, Lot, Room No. *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="street" name="street" className="form-control" placeholder="Bldg., Street *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="subdivision_village" name="subdivision_village" className="form-control" placeholder="Subdivision/Village *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="barangay" name="barangay" className="form-control" placeholder="Barangay *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3 pr-1">
                                    <input type="text" id="city_municipality" name="city_municipality" className="form-control" placeholder="City *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="provincial_code" name="provincial_code" className="form-control" placeholder="Province/State *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-2 pr-1">
                                    <input type="text" id="administrative_district" name="administrative_district" className="form-control" placeholder="Administrative District"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-2 pr-1">
                                    <input type="text" id="congressional_district" name="congressional_district" className="form-control" placeholder="Congressional District"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-2 pr-1">
                                    <input type="text" id="zip_code" name="zip_code" className="form-control" placeholder="Zip Code *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-xl-12 form-label">Permanent Address </label>
                                <div className="col-3 pr-1">
                                    <input type="text" id="house_block_lot_no" name="house_block_lot_no" className="form-control" placeholder="Block, Lot, Room No. *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="street" name="street" className="form-control" placeholder="Bldg., Street *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="subdivision_village" name="subdivision_village" className="form-control" placeholder="Subdivision/Village *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="barangay" name="barangay" className="form-control" placeholder="Barangay *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3 pr-1">
                                    <input type="text" id="city_municipality" name="city_municipality" className="form-control" placeholder="City *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-3 pr-1">
                                    <input type="text" id="provincial_code" name="provincial_code" className="form-control" placeholder="Province/State *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-2 pr-1">
                                    <input type="text" id="administrative_district" name="administrative_district" className="form-control" placeholder="Administrative District"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-2 pr-1">
                                    <input type="text" id="congressional_district" name="congressional_district" className="form-control" placeholder="Congressional District"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-2 pr-1">
                                    <input type="text" id="zip_code" name="zip_code" className="form-control" placeholder="Zip Code *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <label className="col-xl-12 form-label">Contact Details</label>
                                <div className="col-4 pl-1">
                                    <input type="text" id="mobile_number" name="mobile_number" className="form-control" placeholder="Mobile Number *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-4 pr-1">
                                    <input type="text" id="email_address" name="email_address" className="form-control" placeholder="Email Address *" required/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                                <div className="col-4 pr-1">
                                    <input type="text" id="telephone_number" name="telephone_number" className="form-control" placeholder="Telephone Number"/>
                                    <div className="invalid-feedback">No, you missed this one.</div>
                                </div>
                            </div>
                            <br/><hr/><br/>
                        <div className="form-group row">
                            <label className="col-xl-12 form-label">Your Birth/Origin</label>
                            <div className="col-4 pl-1">
                                <input 
                                    class="form-control" 
                                    id="birthdate" 
                                    type="text" 
                                    name="birthdate" 
                                    placeholder="Date of Birth *"
                                    ref={ref}
                                    onChange={(e) => console.log(e.target.value)}
                                    onFocus={() => (ref.current.type = "date")}
                                    onBlur={() => (ref.current.type = "date")}/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-4 pr-1">
                                <input type="text" id="birthplace" name="birthplace" className="form-control" placeholder="Birthplace *" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-4 pr-1">
                                <input type="text" id="originating_province" name="originating_province" className="form-control" placeholder="Originating Province *" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div>
                        <br/><hr/><br/>
                        <div className="form-group row">
                            <label className="col-xl-12 form-label">Other Details</label>
                            <div className="col-3 pl-1">                                
                                <select class="form-control" id="sex" name="sex">
                                    <option selected disabled>Select Gender *</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>                                                
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <select class="form-control" id="civil_status" name="civil_status">
                                    <option selected disabled>Select Civil Status *</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>                                                
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <select class="form-control" id="religion_code  " name="religion_code ">
                                    <option selected disabled>Select Religion *</option>
                                    <option>Roman Catholic</option>
                                    <option>Muslim</option>
                                </select>                                                
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <select class="form-control" id="religion_code  " name="religion_code ">
                                    <option selected disabled>Select Citizenship *</option>
                                    <option>Filipino</option>
                                    <option>Others</option>
                                </select>                                                
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-3 pl-1">                                
                                <div className="custom-control custom-checkbox mt-2">
                                    <input type="checkbox" className="custom-control-input" id="terms" required/>
                                    <label className="custom-control-label" htmlFor="terms"> Do you have Dual-Citizenship?</label>
                                    <div className="invalid-feedback">You must agree before proceeding</div>
                                </div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="height" name="height" className="form-control" placeholder="(If checked) Dual Citizenship" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 pl-1">
                                <input type="text" id="height" name="height" className="form-control" placeholder="Height (cm) *" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-4 pr-1">
                                <input type="text" id="weight" name="weight" className="form-control" placeholder="Weight (kg) *" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-4 pr-1">
                                <input type="text" id="blood_type" name="blood_type" className="form-control" placeholder="Blood Type *" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div>
                        <br/><hr/><br/>
                        {/* <div className="form-group row">
                            <label className="col-xl-12 form-label">Employment/Benefit Details</label>
                            <div className="col-3 pl-1">
                                <input type="text" id="gsis" name="gsis" className="form-control" placeholder="GSIS"/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="gsis_id" name="gsis_id" className="form-control" placeholder="GSIS ID"/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="gsis_ecard" name="gsis_ecard" className="form-control" placeholder="GSIS E-Card"/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="gsis_bp" name="gsis_bp" className="form-control" placeholder="GSIS BP"/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-3 pl-1">
                                <input type="text" id="tin" name="tin" className="form-control" placeholder="Tin Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="sss" name="sss" className="form-control" placeholder="SSS Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="philhealth" name="philhealth" className="form-control" placeholder="Philhealth Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-3 pr-1">
                                <input type="text" id="pag_ibig" name="pag_ibig" className="form-control" placeholder="Pag-ibig Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 pl-1">
                                <input type="text" id="umid" name="umid" className="form-control" placeholder="UMID Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-4 pr-1">
                                <input type="text" id="psn" name="psn" className="form-control" placeholder="PSN Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                            <div className="col-4 pr-1">
                                <input type="text" id="crn" name="crn" className="form-control" placeholder="CRN Number" required/>
                                <div className="invalid-feedback">No, you missed this one.</div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-4 ml-auto text-right">
                            <button 
                                id="js-login-btn" 
                                type="button" 
                                className="btn btn-success btn-lg mt-3"
                                onClick={() => { changeForm('next'); }}>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}