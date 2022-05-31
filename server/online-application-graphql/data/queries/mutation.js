const createChargeabilityQuery = `
INSERT INTO 
employment_chargeability_nonplantilla 
    (code, description, remarks, created_by)
VALUES 
    (:code, :description, :remarks, :createdBy);
`;

const updateChargeabilityQuery = `
UPDATE 
employment_chargeability_nonplantilla
SET 
    description = :description, 
    remarks = :remarks, 
    updated_by = :updatedBy
WHERE code = :code;
`;

const deleteChargeabilityQuery = `
DELETE FROM employment_chargeability_nonplantilla WHERE code = :code;
`;

const createPositionQuery = `
INSERT INTO 
position_nonplantilla 
    (
        code,
        category,
        name,
        rate,
        \`function\`,
        created_by
    )
VALUES 
    (
        :code,
        :category,
        :name,
        :rate,
        :function,
        :createdBy
    );
`;

const updatePositionQuery = `
UPDATE 
    position_nonplantilla
SET 
    category = :category,
    name = :name,
    rate = :rate,
    \`function\` = :function,
    updated_by = :updatedBy
WHERE code = :code;
`;

const deletePositionQuery = `
DELETE FROM position_nonplantilla WHERE code = :code;
`;

const createDepartmentQuery = `
INSERT INTO 
structure_department 
    (
        code,
        name,
        district,
        area,
        group_sector,
        staffing_classification,
        office_size,
        office_classification,
        created_by
    )
VALUES 
    (
        :code,
        :name,
        :district,
        :area,
        :groupSector,
        :staffingClassification,
        :officeSize,
        :officeClassification,
        :createdBy
    );
`;

const updateDepartmentQuery = `
UPDATE 
    structure_department
SET 
    name = :name,
    district = :district,
    area = :area,
    group_sector = :groupSector,
    staffing_classification = :staffingClassification,
    office_size = :officeSize,
    office_classification = :officeClassification,
    updated_by = :updatedBy
WHERE code = :code;
`;

const deleteDepartmentQuery = `
DELETE FROM structure_department WHERE code = :code;
`;

const createWorkstationQuery = `
INSERT INTO 
workstation 
    (
        code,
        name,
        address,
        barangay,
        district,
        longitude,
        latitude,
        \`type\`,
        category,
        remarks
    )
VALUES 
    (
        :code,
        :name,
        :address,
        :barangay,
        :district,
        :longitude,
        :latitude,
        :type,
        :category,
        :remarks
    );
`;

const updateWorkstationQuery = `
UPDATE 
    workstation
SET 
    name = :name,
    address = :address,
    barangay = :barangay,
    district = :district,
    longitude = :longitude,
    latitude = :latitude,
    \`type\` = :type,
    category = :category,
    remarks = :remarks
WHERE code = :code;
`;

const deleteWorkstationQuery = `
DELETE FROM workstation WHERE code = :code;
`;

const createWorkstationExtQuery = `
INSERT INTO 
workstation_extension 
    (
        code,
        workstation_code,
        name,
        address,
        barangay,
        district,
        longitude,
        latitude,
        \`type\`,
        category,
        remarks
    )
VALUES 
    (
        :code,
        :workstationCode,
        :name,
        :address,
        :barangay,
        :district,
        :longitude,
        :latitude,
        :type,
        :category,
        :remarks
    );
`;

const updateWorkstationExtQuery = `
UPDATE 
    workstation_extension
SET 
    workstation_code = :workstationCode
    name = :name,
    address = :address,
    barangay = :barangay,
    district = :district,
    longitude = :longitude,
    latitude = :latitude,
    \`type\` = :type,
    category = :category,
    remarks = :remarks
WHERE code = :code;
`;

const deleteWorkstationExtQuery = `
DELETE FROM workstation_extension WHERE code = :code;
`;

const createProfileCOSQuery = `
INSERT INTO 
profile 
    (
        code,
        employee_number_cos,
        religion_code,
        first_name,
        middle_name,
        maiden_name,
        last_name,
        suffix_name,
        nick_name,
        birthdate,
        birthplace,
        originating_province,
        sex,
        civil_status,
        height,
        weight,
        blood_type,
        pag_ibig,
        philhealth,
        sss,
        tin,
        umid,
        crn,
        psn,
        citizenship,
        telephone_number,
        mobile_number,
        pvb_account_number,
        email_address,
        signature,
        photo,
        is_person_with_disability,
        disability_type,
        is_computer_literate,
        is_licensed,
        license_file,
        contact_name,
        contact_relationship,
        contact_address,
        contact_number,
        created_by
    )
VALUES 
    (
        :code,
        :employeeNumber,
        :religionCode,
        :firstName,
        :middleName,
        :maidenName,
        :lastName,
        :suffixName,
        :nickName,
        :birthDate,
        :birthPlace,
        :originatingProvince,
        :sex,
        :civilStatus,
        :height,
        :weight,
        :bloodType,
        :pagibig,
        :philhealth,
        :sss,
        :tin,
        :umid,
        :crn,
        :psn,
        :citizenship,
        :telephoneNumber,
        :mobileNumber,
        :pvbAccount,
        :emailAddress,
        :signature,
        :photo,
        :differentlyAbled,
        :typeOfDisability,
        :computerLiterate,
        :withPRCLicense,
        :prcLicenseFile,
        :contactName,
        :contactRelationship,
        :contactAddress,
        :contactNumber,
        :createdBy
    );
`;

const createEmploymentQuery = `
INSERT INTO 
employment_record_nonplantilla 
    (
        employee_number_cos,
        data_version_id,
        department_code,
        position_code,
        chargeability_code,
        created_by
    )
VALUES 
    (
        :employeeNumber,
        :dataVersion,
        :departmentCode,
        :positionCode,
        :chargeabilityCode,
        :createdBy
    );
`;

const createPersonnelAssignmentQuery = `
INSERT INTO 
personnel_assignment 
    (
        employee_number,
        workstation_code,
        workstation_extension_code,
        date_from,
        date_to,
        basis,
        document
    )
VALUES 
    (
        :employeeNumber,
        :workstationCode,
        :workstationExtCode,
        :dateFrom,
        :dateTo,
        :basis,
        :document
    );
`;

const updateCompleteNameQuery = `
UPDATE 
    profile
SET 
    first_name = :firstName,
    middle_name = :middleName,
    maiden_name = :maidenName,
    last_name = :lastName,
    suffix_name = :suffixName,
    nick_name = :nickName,
    updated_by = :updatedBy,
    updated_at = :updatedAt
WHERE code = :code;
`;

const updateOtherPersonalInformationQuery = `
UPDATE 
    profile
SET
    religion_code = :religionCode,
    birthdate = :birthDate,
    birthplace = :birthPlace,
    originating_province = :originatingProvince,
    sex = :sex,
    civil_status = :civilStatus,
    height = :height,
    weight = :weight,
    blood_type = :bloodType,
    pag_ibig = :pagibig,
    philhealth = :philhealth,
    gsis = :gsis,
    gsis_id = :gsisID,
    gsis_ecard = :gsisECard,
    gsis_bp = :gsisBP,
    fd_nha = :fdNHA,
    fd_government = :fdGovernment,
    sss = :sss,
    tin = :tin,
    umid = :umid,
    crn = :crn,
    psn = :psn,
    citizenship = :citizenship,
    telephone_number = :telephoneNumber,
    mobile_number = :mobileNumber,
    pvb_account_number = :pvbAccount,
    email_address = :emailAddress,
    is_person_with_disability = :differentlyAbled,
    disability_type = :typeOfDisability,
    is_computer_literate = :computerLiterate,
    is_licensed = :withPRCLicense,
    license_file = :prcLicenseFile,
    updated_by = :updatedBy,
    updated_at = :updatedAt
WHERE code = :code;
`;

const deleteAddressByIDQuery = `
DELETE FROM profile_address WHERE id = :id;
`;

const createAddressQuery = `
INSERT INTO 
profile_address 
    (
        profile_code,
        type,
        house_block_lot_no,
        street,
        subdivision_village,
        barangay,
        city_municipality,
        province,
        zip_code,
        administrative_district,
        congressional_district,
        is_active,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :type,
        :houseBlockLotNo,
        :street,
        :subdivisionVillage,
        :barangay,
        :cityMunicipality,
        :province,
        :zipCode,
        :administrativeDistrict,
        :congressionalDistrict,
        :isActive,
        :createdBy,
        ""
    );
`;

const updateAddressQuery = `
UPDATE 
    profile_address
SET 
    profile_code = :profileCode,
    type = :type,
    house_block_lot_no = :houseBlockLotNo,
    street = :street,
    subdivision_village = :subdivisionVillage,
    barangay = :barangay,
    city_municipality = :cityMunicipality,
    province = :province,
    zip_code = :zipCode,
    administrative_district = :administrativeDistrict,
    congressional_district = :congressionalDistrict,
    is_active = :isActive,
    updated_by = :updatedBy,
    updated_at = :updatedAt
WHERE id = :id;
`;

const createEducationQuery = `
INSERT INTO 
profile_education 
    (
        profile_code,
        level,
        school,
        description,
        period_from,
        period_to,
        level_units_earned,
        year_graduated,
        award,
        remarks,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :level,
        :school,
        :description,
        :periodFrom,
        :periodTo,
        :levelUnitsEarned,
        :yearGraduated,
        :award,
        :remarks,
        :createdBy,
        ""
    );
`;

const updateEducationQuery = `
UPDATE 
    profile_education
SET 
    profile_code = :profileCode,
    level = :level,
    school = :school,
    description = :description,
    period_from = :periodFrom,
    period_to = :periodTo,
    level_units_earned = :levelUnitsEarned,
    year_graduated = :yearGraduated,
    award = :award,
    remarks = :remarks,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteEducationByIDQuery = `
DELETE FROM profile_education WHERE id = :id;
`;

const updatePhotoAndSignatureQuery = `
UPDATE 
    profile
SET
    photo = :photo,
    signature = :signature,
    updated_by = :updatedBy,
    updated_at = :updatedAt
WHERE code = :code;
`;

const updateInCaseOfEmergencyQuery = `
UPDATE 
    profile
SET 
    contact_name = :contactName,
    contact_relationship = :contactRelationship,
    contact_address = :contactAddress,
    contact_number = :contactNumber,
    updated_by = :updatedBy,
    updated_at = :updatedAt
WHERE code = :code;
`;

const createSpouseQuery = `
INSERT INTO 
profile_dependent_spouse 
    (
        profile_code,
        first_name,
        last_name,
        middle_name,
        maiden_name,
        suffix_name,
        birthdate,
        occupation,
        employer_business_name,
        business_address,
        contact_number,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :firstName,
        :lastName,
        :middleName,
        :maidenName,
        :suffixName,
        :birthdate,
        :occupation,
        :employerBusinessName,
        :businessAddress,
        :contactNumber,
        :createdBy,
        ""
    );
`;

const updateSpouseQuery = `
UPDATE 
    profile_dependent_spouse
SET 
    profile_code = :profileCode,
    first_name = :firstName,
    last_name = :lastName,
    maiden_name = :middleName,
    maiden_name = :maidenName,
    suffix_name = :suffixName,
    birthdate = :birthdate,
    occupation = :occupation,
    employer_business_name = :employerBusinessName,
    business_address = :businessAddress,
    contact_number = :contactNumber,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteSpouseByIDQuery = `
DELETE FROM profile_dependent_spouse WHERE id = :id;
`;

const createChildQuery = `
INSERT INTO 
profile_dependent_child 
    (
        profile_code,
        name,
        birthdate,
        \`order\`,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :name,
        :birthdate,
        :order,
        :createdBy,
        ""
    );
`;

const updateChildQuery = `
UPDATE 
    profile_dependent_child
SET 
    profile_code = :profileCode,
    name = :name,
    birthdate = :birthdate,
    \`order\` = :order,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteChildByIDQuery = `
DELETE FROM profile_dependent_child WHERE id = :id;
`;

const createParentQuery = `
INSERT INTO 
profile_dependent_parent 
    (
        profile_code,
        first_name,
        last_name,
        middle_name,
        maiden_name,
        suffix_name,
        birthdate,
        address,
        contact_number,
        relationship,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :firstName,
        :lastName,
        :middleName,
        :maidenName,
        :suffixName,
        :birthdate,
        :address,
        :contactNumber,
        :relationship,
        :createdBy,
        ""
    );
`;

const updateParentQuery = `
UPDATE 
profile_dependent_parent
SET 
    profile_code = :profileCode,
    first_name = :firstName,
    last_name = :lastName,
    middle_name = :middleName,
    maiden_name = :maidenName,
    suffix_name = :suffixName,
    birthdate = :birthdate,
    address = :address,
    contact_number = :contactNumber,
    relationship = :relationship,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteParentByIDQuery = `
DELETE FROM profile_dependent_parent WHERE id = :id;
`;

const createEligibilityQuery = `
INSERT INTO 
profile_eligibility 
    (
        profile_code,
        description,
        rating,
        date_of_exam_conferment,
        place_of_exam_conferment,
        license_number,
        license_validity_date,
        remarks,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :description,
        :rating,
        :dateOfExamConferment,
        :placeOfExamConferment,
        :licenseNumber,
        :licenseValidityDate,
        :remarks,
        :createdBy,
        ""
    );
`;

const updateEligibilityQuery = `
UPDATE 
profile_eligibility
SET 
    profile_code = :profileCode,
    description = :description,
    rating = :rating,
    date_of_exam_conferment = :dateOfExamConferment,
    place_of_exam_conferment = :placeOfExamConferment,
    license_number = :licenseNumber,
    license_validity_date = :licenseValidityDate,
    remarks = :remarks,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteEligibilityByIDQuery = `
DELETE FROM profile_eligibility WHERE id = :id;
`;

const createQuestionQuery = `
INSERT INTO 
profile_question 
    (
        profile_code,
        1a_is_related_by_consanguinity_affinity_within_3rd_degree,
        1a_if_yes_details,
        1b_is_related_by_consanguinity_affinity_within_4th_degree,
        1b_if_yes_details,
        2a_has_been_guilty_of_any_administrative_offense,
        2a_if_yes_details,
        2b_has_been_criminally_charged_in_court,
        2b_if_yes_date_filed,
        2b_if_yes_status_of_cases,
        3_has_been_convicted_of_any_crime,
        3_if_yes_details,
        4_has_been_separated_from_the_service,
        4_if_yes_details,
        5a_has_been_a_candidate_in_an_election,
        5a_if_yes_details,
        5b_has_resigned_from_government_service,
        5b_if_yes_details,
        6_has_acquired_immigrant_status,
        6_if_yes_details,
        7a_is_a_member_of_indigenous_group,
        7a_if_yes_specify,
        7b_is_a_person_with_disabilitiy,
        7b_if_yes_id_number,
        7c_is_a_solo_parent,
        7c_if_yes_id_number,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :oneA,
        :oneAIfYes,
        :oneB,
        :oneBIfYes,
        :twoA,
        :twoAIfYes,
        :twoB,
        :twoBIfYesDateFiled,
        :twoBIfYesStatus,
        :three,
        :threeIfYes,
        :four,
        :fourIfYes,
        :fiveA,
        :fiveAIfYes,
        :fiveB,
        :fiveBIfYes,
        :six,
        :sixIfYes,
        :sevenA,
        :sevenAIfYes,
        :sevenB,
        :sevenBIfYes,
        :sevenC,
        :sevenCIfYes,
        :createdBy,
        ""
    );
`;

const updateQuestionQuery = `
UPDATE 
profile_question
SET 
    profile_code = :profileCode,
    1a_is_related_by_consanguinity_affinity_within_3rd_degree = :oneA,
    1a_if_yes_details = :oneAIfYes,
    1b_is_related_by_consanguinity_affinity_within_4th_degree = :oneB,
    1b_if_yes_details = :oneBIfYes,
    2a_has_been_guilty_of_any_administrative_offense = :twoA,
    2a_if_yes_details = :twoAIfYes,
    2b_has_been_criminally_charged_in_court = :twoB,
    2b_if_yes_date_filed = :twoBIfYesDateFiled,
    2b_if_yes_status_of_cases = :twoBIfYesStatus,
    3_has_been_convicted_of_any_crime = :three,
    3_if_yes_details = :threeIfYes,
    4_has_been_separated_from_the_service = :four,
    4_if_yes_details = :fourIfYes,
    5a_has_been_a_candidate_in_an_election = :fiveA,
    5a_if_yes_details = :fiveAIfYes,
    5b_has_resigned_from_government_service = :fiveB,
    5b_if_yes_details = :fiveBIfYes,
    6_has_acquired_immigrant_status = :six,
    6_if_yes_details = :sixIfYes,
    7a_is_a_member_of_indigenous_group = :sevenA,
    7a_if_yes_specify = :sevenAIfYes,
    7b_is_a_person_with_disabilitiy = :sevenB,
    7b_if_yes_id_number = :sevenBIfYes,
    7c_is_a_solo_parent = :sevenC,
    7c_if_yes_id_number = :sevenCIfYes,
    updated_by = :updatedBy
WHERE id = :id;
`;

const createReferenceQuery = `
INSERT INTO 
profile_reference 
    (
        profile_code,
        name,
        address,
        contact_number,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :name,
        :address,
        :contactNumber,
        :createdBy,
        ""
    );
`;

const updateReferenceQuery = `
UPDATE 
profile_reference
SET 
    profile_code = :profileCode,
    name = :name,
    address = :address,
    contact_number = :contactNumber,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteReferenceByIDQuery = `
DELETE FROM profile_reference WHERE id = :id;
`;

const createSkillHobbyQuery = `
INSERT INTO 
profile_skill_hobby 
    (
        profile_code,
        description,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :description,
        :createdBy,
        ""
    );
`;

const updateSkillHobbyQuery = `
UPDATE 
profile_skill_hobby
SET 
    profile_code = :profileCode,
    description = :description,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteSkillHobbyByIDQuery = `
DELETE FROM profile_skill_hobby WHERE id = :id;
`;

const createDistinctionRecognitionQuery = `
INSERT INTO 
profile_distinction_recognition 
    (
        profile_code,
        description,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :description,
        :createdBy,
        ""
    );
`;

const updateDistinctionRecognitionQuery = `
UPDATE 
profile_distinction_recognition
SET 
    profile_code = :profileCode,
    description = :description,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteDistinctionRecognitionByIDQuery = `
DELETE FROM profile_distinction_recognition WHERE id = :id;
`;

const createMembershipQuery = `
INSERT INTO 
profile_membership 
    (
        profile_code,
        description,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :description,
        :createdBy,
        ""
    );
`;

const updateMembershipQuery = `
UPDATE 
profile_membership
SET 
    profile_code = :profileCode,
    description = :description,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteMembershipByIDQuery = `
DELETE FROM profile_membership WHERE id = :id;
`;

const createVoluntaryQuery = `
INSERT INTO 
profile_voluntary_work 
    (
        profile_code,
        organization_name_address,
        date_from,
        date_to,
        hours,
        position_nature_of_work,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :organizationNameAddress,
        :dateFrom,
        :dateTo,
        :hours,
        :positionNatureOfWork,
        :createdBy,
        ""
    );
`;

const updateVoluntaryQuery = `
UPDATE 
profile_voluntary_work
SET 
    profile_code = :profileCode,
    organization_name_address = :organizationNameAddress,
    date_from = :dateFrom,
    date_to = :dateTo,
    hours = :hours,
    position_nature_of_work = :positionNatureOfWork,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteVoluntaryByIDQuery = `
DELETE FROM profile_voluntary_work WHERE id = :id;
`;

const createVaccinationQuery = `
INSERT INTO 
profile_covid_vaccination 
    (
        profile_code,
        description,
        category,
        vaccination_date,
        manufacturer,
        batch_number,
        lot_number,
        health_facility,
        created_by,
        updated_by
    )
VALUES 
    (
        :profileCode,
        :description,
        :category,
        :vaccinationDate,
        :manufacturer,
        :batchNumber,
        :lotNumber,
        :healthFacility,
        :createdBy,
        ""
    );
`;

const updateVaccinationQuery = `
UPDATE 
profile_covid_vaccination
SET 
    profile_code = :profileCode,
    description = :description,
    category = :category,
    vaccination_date = :vaccinationDate,
    manufacturer = :manufacturer,
    batch_number = :batchNumber,
    lot_number = :lotNumber,
    health_facility = :healthFacility,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteVaccinationByIDQuery = `
DELETE FROM profile_covid_vaccination WHERE id = :id;
`;

const createSchoolQuery = `
INSERT INTO 
schools 
    (
        name,
        address,
        created_by,
        updated_by
    )
VALUES 
    (
        :name,
        :address,
        :createdBy,
        ""
    );
`;

const updateSchoolQuery = `
UPDATE 
schools
SET 
    name = :name,
    address = :address,
    updated_by = :updatedBy
WHERE id = :id;
`;

const deleteSchoolByIDQuery = `
DELETE FROM schools WHERE id = :id;
`;

const createProfileWithEmployeeNumberCOSQuery = `
INSERT INTO 
profile 
    (
        code,
        employee_number_cos,
        religion_code,
        first_name,
        middle_name,
        maiden_name,
        last_name,
        suffix_name,
        nick_name,
        birthdate,
        created_by
    )
VALUES 
    (
        :code,
        :employeeNumber,
        "NA",
        :firstName,
        :middleName,
        :maidenName,
        :lastName,
        :suffixName,
        :nickName,
        "1970-01-01",
        :createdBy
    );
`;

const updateCurrentEmploymentQuery = `
UPDATE 
employment_record_nonplantilla
SET 
  data_version_id = :dataVersionID,
  department_code = :departmentCode,
  position_code = :positionCode,
  chargeability_code = :chargeabilityCode,
  months = :months,
  contract_no = NULL,
  date_from = :dateFrom,
  date_to = :dateTo,
  remarks = :remarks,
  conforme = NULL,
  updated_by = :updatedBy
WHERE employee_number_cos = :employeeNumber;
`;

export {
  createChargeabilityQuery,
  updateChargeabilityQuery,
  deleteChargeabilityQuery,
  createPositionQuery,
  updatePositionQuery,
  deletePositionQuery,
  createDepartmentQuery,
  updateDepartmentQuery,
  deleteDepartmentQuery,
  createWorkstationQuery,
  updateWorkstationQuery,
  deleteWorkstationQuery,
  createWorkstationExtQuery,
  updateWorkstationExtQuery,
  deleteWorkstationExtQuery,
  createProfileCOSQuery,
  createEmploymentQuery,
  createPersonnelAssignmentQuery,
  updateCompleteNameQuery,
  updateOtherPersonalInformationQuery,
  deleteAddressByIDQuery,
  createAddressQuery,
  updateAddressQuery,
  createEducationQuery,
  updateEducationQuery,
  updatePhotoAndSignatureQuery,
  deleteEducationByIDQuery,
  updateInCaseOfEmergencyQuery,
  createSpouseQuery,
  updateSpouseQuery,
  deleteSpouseByIDQuery,
  createChildQuery,
  updateChildQuery,
  deleteChildByIDQuery,
  createParentQuery,
  updateParentQuery,
  deleteParentByIDQuery,
  createEligibilityQuery,
  updateEligibilityQuery,
  deleteEligibilityByIDQuery,
  createQuestionQuery,
  updateQuestionQuery,
  createReferenceQuery,
  updateReferenceQuery,
  deleteReferenceByIDQuery,
  createSkillHobbyQuery,
  updateSkillHobbyQuery,
  deleteSkillHobbyByIDQuery,
  createDistinctionRecognitionQuery,
  updateDistinctionRecognitionQuery,
  deleteDistinctionRecognitionByIDQuery,
  createMembershipQuery,
  updateMembershipQuery,
  deleteMembershipByIDQuery,
  createVoluntaryQuery,
  updateVoluntaryQuery,
  deleteVoluntaryByIDQuery,
  createVaccinationQuery,
  updateVaccinationQuery,
  deleteVaccinationByIDQuery,
  createSchoolQuery,
  updateSchoolQuery,
  deleteSchoolByIDQuery,
  createProfileWithEmployeeNumberCOSQuery,
  updateCurrentEmploymentQuery,
};
