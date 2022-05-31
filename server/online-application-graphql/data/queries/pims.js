const profileRegularQuery = `
SELECT
    id,
    religion_code AS 'religionCode',
    code AS 'profileCode',
    employee_number_regular AS 'employeeNumber',
    first_name AS 'firstName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    last_name AS 'lastName',
    suffix_name AS 'suffixName',
    nick_name AS 'nickName',
    telephone_number AS 'telephoneNumber',
    mobile_number AS 'mobileNumber',
    citizenship,
    birthdate AS 'birthDate',
    birthplace AS 'birthPlace',
    blood_type AS 'bloodType',
    height,
    weight,
    sex,
    civil_status AS 'civilStatus',
    tin,
    gsis,
    gsis_id AS 'gsisID',
    gsis_ecard AS 'gsisEcard',
    gsis_bp AS 'gsisBP',
    pag_ibig AS 'pagibig',
    philhealth,
    sss,
    umid,
    crn,
    psn,
    pvb_account_number AS 'pvbAccount',
    signature,
    photo,
    201_file AS 'file201',
    is_person_with_disability AS 'isPersonWithDisability',
    disability_type AS 'disabilityType',
    is_computer_literate AS 'isComputerLiterate',
    is_licensed AS 'isLicensed',
    license_file AS 'prcLincenseFile',
    contact_name AS 'contactName',
    contact_relationship AS 'contactRelationship',
    contact_address AS 'contactAddress',
    contact_number AS 'contactNumber',
    fd_nha AS 'fdNHA',
    fd_government AS 'fdGovernment',
    updrecvd,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile
ORDER BY last_name ASC
`;

const profileCOSQuery = `
SELECT
    id,
    religion_code AS 'religionCode',
    code AS 'profileCode',
    employee_number_cos AS 'employeeNumber',
    first_name AS 'firstName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    last_name AS 'lastName',
    suffix_name AS 'suffixName',
    nick_name AS 'nickName',
    telephone_number AS 'telephoneNumber',
    mobile_number AS 'mobileNumber',
    email_address AS 'emailAddress',
    citizenship,
    birthdate AS 'birthDate',
    birthplace AS 'birthPlace',
    originating_province AS 'originatingProvince',
    blood_type AS 'bloodType',
    height,
    weight,
    sex,
    civil_status AS 'civilStatus',
    tin,
    gsis,
    gsis_id AS 'gsisID',
    gsis_ecard AS 'gsisEcard',
    gsis_bp AS 'gsisBP',
    pag_ibig AS 'pagibig',
    philhealth,
    sss,
    umid,
    crn,
    psn,
    pvb_account_number AS 'pvbAccount',
    signature,
    photo,
    201_file AS 'file201',
    is_person_with_disability AS 'isPersonWithDisability',
    disability_type AS 'disabilityType',
    is_computer_literate AS 'isComputerLiterate',
    is_licensed AS 'isLicensed',
    license_file AS 'prcLincenseFile',
    contact_name AS 'contactName',
    contact_relationship AS 'contactRelationship',
    contact_address AS 'contactAddress',
    contact_number AS 'contactNumber',
    fd_nha AS 'fdNHA',
    fd_government AS 'fdGovernment',
    updrecvd,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile
WHERE employee_number_cos != ""
ORDER BY last_name ASC;
`;

const profileCOSNoFilterQuery = `
SELECT
    id,
    religion_code AS 'religionCode',
    code AS 'profileCode',
    employee_number_cos AS 'employeeNumber',
    first_name AS 'firstName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    last_name AS 'lastName',
    suffix_name AS 'suffixName',
    nick_name AS 'nickName',
    telephone_number AS 'telephoneNumber',
    mobile_number AS 'mobileNumber',
    email_address AS 'emailAddress',
    citizenship,
    birthdate AS 'birthDate',
    birthplace AS 'birthPlace',
    originating_province AS 'originatingProvince',
    blood_type AS 'bloodType',
    height,
    weight,
    sex,
    civil_status AS 'civilStatus',
    tin,
    gsis,
    gsis_id AS 'gsisID',
    gsis_ecard AS 'gsisEcard',
    gsis_bp AS 'gsisBP',
    pag_ibig AS 'pagibig',
    philhealth,
    sss,
    umid,
    crn,
    psn,
    pvb_account_number AS 'pvbAccount',
    signature,
    photo,
    201_file AS 'file201',
    is_person_with_disability AS 'isPersonWithDisability',
    disability_type AS 'disabilityType',
    is_computer_literate AS 'isComputerLiterate',
    is_licensed AS 'isLicensed',
    license_file AS 'prcLincenseFile',
    contact_name AS 'contactName',
    contact_relationship AS 'contactRelationship',
    contact_address AS 'contactAddress',
    contact_number AS 'contactNumber',
    fd_nha AS 'fdNHA',
    fd_government AS 'fdGovernment',
    updrecvd,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile
ORDER BY last_name ASC;
`;

const profileCOSNoFilterSortByCodeQuery = `
SELECT
    id,
    religion_code AS 'religionCode',
    code AS 'profileCode',
    employee_number_cos AS 'employeeNumber',
    first_name AS 'firstName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    last_name AS 'lastName',
    suffix_name AS 'suffixName',
    nick_name AS 'nickName',
    telephone_number AS 'telephoneNumber',
    mobile_number AS 'mobileNumber',
    email_address AS 'emailAddress',
    citizenship,
    birthdate AS 'birthDate',
    birthplace AS 'birthPlace',
    originating_province AS 'originatingProvince',
    blood_type AS 'bloodType',
    height,
    weight,
    sex,
    civil_status AS 'civilStatus',
    tin,
    gsis,
    gsis_id AS 'gsisID',
    gsis_ecard AS 'gsisEcard',
    gsis_bp AS 'gsisBP',
    pag_ibig AS 'pagibig',
    philhealth,
    sss,
    umid,
    crn,
    psn,
    pvb_account_number AS 'pvbAccount',
    signature,
    photo,
    201_file AS 'file201',
    is_person_with_disability AS 'isPersonWithDisability',
    disability_type AS 'disabilityType',
    is_computer_literate AS 'isComputerLiterate',
    is_licensed AS 'isLicensed',
    license_file AS 'prcLincenseFile',
    contact_name AS 'contactName',
    contact_relationship AS 'contactRelationship',
    contact_address AS 'contactAddress',
    contact_number AS 'contactNumber',
    fd_nha AS 'fdNHA',
    fd_government AS 'fdGovernment',
    updrecvd,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile
ORDER BY code;
`;

const profileCOSByEmpNoQuery = `
SELECT
    id,
    religion_code AS 'religionCode',
    code AS 'profileCode',
    employee_number_cos AS 'employeeNumber',
    first_name AS 'firstName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    last_name AS 'lastName',
    suffix_name AS 'suffixName',
    nick_name AS 'nickName',
    telephone_number AS 'telephoneNumber',
    mobile_number AS 'mobileNumber',
    email_address AS 'emailAddress',
    citizenship,
    birthdate AS 'birthDate',
    birthplace AS 'birthPlace',
    originating_province AS 'originatingProvince',
    blood_type AS 'bloodType',
    height,
    weight,
    sex,
    civil_status AS 'civilStatus',
    tin,
    gsis,
    gsis_id AS 'gsisID',
    gsis_ecard AS 'gsisEcard',
    gsis_bp AS 'gsisBP',
    pag_ibig AS 'pagibig',
    philhealth,
    sss,
    umid,
    crn,
    psn,
    pvb_account_number AS 'pvbAccount',
    signature,
    photo,
    201_file AS 'file201',
    is_person_with_disability AS 'isPersonWithDisability',
    disability_type AS 'disabilityType',
    is_computer_literate AS 'isComputerLiterate',
    is_licensed AS 'isLicensed',
    license_file AS 'prcLincenseFile',
    contact_name AS 'contactName',
    contact_relationship AS 'contactRelationship',
    contact_address AS 'contactAddress',
    contact_number AS 'contactNumber',
    fd_nha AS 'fdNHA',
    fd_government AS 'fdGovernment',
    updrecvd,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile
WHERE employee_number_cos IN (:employeeNumber)
ORDER BY last_name ASC;
`;

const profileRegularByEmpNoQuery = `
SELECT
    id,
    religion_code AS 'religionCode',
    code AS 'profileCode',
    employee_number_regular AS 'employeeNumber',
    first_name AS 'firstName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    last_name AS 'lastName',
    suffix_name AS 'suffixName',
    nick_name AS 'nickName',
    telephone_number AS 'telephoneNumber',
    mobile_number AS 'mobileNumber',
    email_address AS 'emailAddress',
    citizenship,
    birthdate AS 'birthDate',
    birthplace AS 'birthPlace',
    originating_province AS 'originatingProvince',
    blood_type AS 'bloodType',
    height,
    weight,
    sex,
    civil_status AS 'civilStatus',
    tin,
    gsis,
    gsis_id AS 'gsisID',
    gsis_ecard AS 'gsisEcard',
    gsis_bp AS 'gsisBP',
    pag_ibig AS 'pagibig',
    philhealth,
    sss,
    umid,
    crn,
    psn,
    pvb_account_number AS 'pvbAccount',
    signature,
    photo,
    201_file AS 'file201',
    is_person_with_disability AS 'isPersonWithDisability',
    disability_type AS 'disabilityType',
    is_computer_literate AS 'isComputerLiterate',
    is_licensed AS 'isLicensed',
    license_file AS 'prcLincenseFile',
    contact_name AS 'contactName',
    contact_relationship AS 'contactRelationship',
    contact_address AS 'contactAddress',
    contact_number AS 'contactNumber',
    fd_nha AS 'fdNHA',
    fd_government AS 'fdGovernment',
    updrecvd,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile
WHERE employee_number_regular IN (:employeeNumber)
ORDER BY last_name ASC;
`;

const religionQuery = `
SELECT
    code,
    name,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM religion
ORDER BY name ASC;
`;

const religionByCodeQuery = `
SELECT
    code,
    name,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM religion
WHERE code IN (:religionCode);
`;

const addressQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    type,
    house_block_lot_no AS 'houseLotNo',
    street,
    subdivision_village AS 'subdivisionVillage',
    barangay,
    city_municipality AS 'cityMunicipality',
    province,
    zip_code AS 'zipCode',
    administrative_district AS 'administrativeDistrict',
    congressional_district AS 'congressionalDistrict',
    is_active AS 'active',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile_address
WHERE is_active = true;
`;

const dependentChildQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    name,
    birthdate AS 'birthDate',
    \`order\`,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_dependent_child;
`;

const dependentParentQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    name,
    birthdate AS 'birthDate',
    address,
    contact_number AS 'contactNumber',
    relationship,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_dependent_parent;
`;

const dependentSpouseQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    name,
    birthdate AS 'birthDate',
    occupation,
    employer_business_name AS 'employerBusinessName',
    business_address AS 'businessAddress',
    contact_number AS 'contactNumber',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_dependent_spouse;
`;

const educationQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    level,
    school,
    description,
    period_from AS 'periodFrom',
    period_to AS 'periodTo',
    level_units_earned AS 'levelUnitsEarned',
    year_graduated AS 'yearGraduated',
    award,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_education;
`;

const employmentStatusQuery = `
SELECT
    id,
    description,
    employment_type,
    remarks
FROM data_version;
`;

const employmentStatusByIdQuery = `
SELECT
    id,
    description,
    remarks
FROM data_version
WHERE id IN (:id);
`;

const departmentQuery = `
SELECT
    id,
    code,
    name,
    district,
    area,
    group_sector AS "groupSector",
    staffing_classification AS "staffingClassification",
    office_size AS "officeSize",
    office_classification AS "officeClassification",
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM structure_department;
`;

const departmentByCodeQuery = `
SELECT
    id,
    code,
    name,
    district,
    area,
    group_sector AS "groupSector",
    staffing_classification AS "staffingClassification",
    office_size AS "officeSize",
    office_classification AS "officeClassification",
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM structure_department
WHERE code IN (:code);
`;

const employmentChargeabilityNonplantillaQuery = `
SELECT
    id,
    code,
    description,
    remarks,
    created_by AS 'createdBy',
    updated_by AS 'updatedBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_chargeability_nonplantilla;
`;

const employmentChargeabilityNonplantillaByCodeQuery = `
SELECT
    id,
    code,
    description,
    remarks,
    created_by AS 'createdBy',
    updated_by AS 'updatedBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_chargeability_nonplantilla
WHERE code IN (:code);
`;

const positionCOSQuery = `
SELECT
    id,
    ios_occupational_service_code AS 'iosOccupationalServiceCode',
    ios_occupational_group_code AS 'iosOccupationalGroupCode',
    ios_class_id AS 'iosClassID',
    code,
    category,
    name,
    salary_grade AS 'salaryGrade',
    rate,
    level,
    status,
    education,
    experience,
    training,
    eligibility,
    competencies,
    general_functions AS 'generalFunctions',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_nonplantilla;
`;

const positionCOSByCodeQuery = `
SELECT
    id,
    ios_occupational_service_code AS 'iosOccupationalServiceCode',
    ios_occupational_group_code AS 'iosOccupationalGroupCode',
    ios_class_id AS 'iosClassID',
    code,
    category,
    name,
    salary_grade AS 'salaryGrade',
    rate,
    level,
    status,
    education,
    experience,
    training,
    eligibility,
    competencies,
    general_functions AS 'generalFunctions',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_nonplantilla
WHERE code IN (:code);
`;

const iosOccupationalServiceQuery = `
SELECT
  id,
  code,
  name,
  general_description AS 'generalDescription',
  created_by AS 'createdBy',
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  updated_by AS 'updatedBy',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_ios_occupational_service;
`;

const iosOccupationalGroupQuery = `
SELECT
  id,
  occupational_service_code AS 'iosOccupationalServiceCode',
  code,
  name,
  created_by AS 'createdBy',
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  updated_by AS 'updatedBy',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_ios_occupational_group;
`;

const positionRegularQuery = `
SELECT
    code,
    name,
    salary_grade AS 'salaryGrade',
    authorized_salary AS 'authorizedSalary',
    level,
    status,
    education,
    experience,
    training,
    eligibility,
    competencies,
    function_level_csc AS 'functionLevelCSC',
    position_type_dbm AS 'positionTypeDBM',
    area_code AS 'areaCode',
    area_type AS 'areaType',
    sector,
    category,
    nha_discipline AS 'nhaDiscipline',
    nha_occupational_group AS 'nhaOccupationalGroup',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_plantilla;
`;

const positionRegularByCodeQuery = `
SELECT
    code,
    name,
    salary_grade AS 'salaryGrade',
    authorized_salary AS 'authorizedSalary',
    level,
    status,
    education,
    experience,
    training,
    eligibility1,
    eligibility2,
    eligibility3,
    eligibility4,
    function_level_csc AS 'functionLevelCSC',
    position_type_dbm AS 'positionTypeDBM',
    area_code AS 'areaCode',
    area_type AS 'areaType',
    sector,
    category,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_plantilla
WHERE code IN (:code);
`;

const divisionQuery = `
SELECT
    code,
    name,
    department_code AS 'departmentCode',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM structure_division;
`;

const cosEmploymentQuery = `
SELECT
    employee_number_cos AS 'employeeNumber',
    data_version_id AS 'dataVersionID',
    department_code AS 'departmentCode',
    position_code AS 'positionCode',
    chargeability_code AS 'chargeabilityCode',
    date_from AS 'contractFrom',
    date_to AS 'contractTo',
    months,
    contract_no AS 'contractNo',
    document,
    masterlist,
    remarks,
    conforme,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_nonplantilla;
`;

const cosEmploymentByEmpNoQuery = `
SELECT
    employee_number_cos AS 'employeeNumber',
    data_version_id AS 'dataVersionID',
    department_code AS 'departmentCode',
    position_code AS 'positionCode',
    chargeability_code AS 'chargeabilityCode',
    date_from AS 'contractFrom',
    date_to AS 'contractTo',
    months,
    contract_no AS 'contractNo',
    document,
    masterlist,
    remarks,
    conforme,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_nonplantilla
WHERE employee_number_cos IN (:employeeNumber);
`;

const cosEmploymentByEmpNoDataVersionQuery = `
SELECT
    employee_number_cos AS 'employeeNumber',
    data_version_id AS 'cosEmploymentQuery',
    department_code AS 'departmentCode',
    position_code AS 'positionCode',
    chargeability_code AS 'chargeabilityCode',
    date_from AS 'contractFrom',
    date_to AS 'contractTo',
    months,
    contract_no AS 'contractNo',
    document,
    masterlist,
    remarks,
    conforme,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_nonplantilla
WHERE employee_number_cos IN (:employeeNumber) AND data_version_id = :dataVersionID
;
`;

const regularEmploymentQuery = `
SELECT
    id,
    employee_number_regular AS 'employeeNumber',
    data_version_id_employment AS 'dataVersionID',
    data_version_id_structure AS 'dataVersionStructure',
    structure_plantilla_code AS 'plantillaStructureCode',
    appointment_status AS 'appointmentStatus',
    appointment_type AS 'appointmentType',
    step,
    salary,
    status,
    remarks,
    date_from AS 'dateFrom',
    date_to AS 'dateTo',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_plantilla;
`;

const regularEmploymentByEmpNoQuery = `
SELECT
    id,
    employee_number_regular AS 'employeeNumber',
    data_version_id_employment AS 'dataVersionID',
    data_version_id_structure AS 'dataVersionStructure',
    structure_plantilla_code AS 'plantillaStructureCode',
    appointment_status AS 'appointmentStatus',
    appointment_type AS 'appointmentType',
    step,
    salary,
    status,
    remarks,
    date_from AS 'dateFrom',
    date_to AS 'dateTo',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_plantilla
WHERE employee_number_regular = :employeeNumber;
`;

const workstationQuery = `
SELECT
    id,
    code,
    name,
    address,
    barangay,
    district,
    longitude,
    latitude,
    \`type\`,
    category,
    remarks,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM workstation;
`;

const workstationByCodeQuery = `
SELECT
    id,
    code,
    name,
    address,
    barangay,
    district,
    longitude,
    latitude,
    \`type\`,
    category,
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM workstation
WHERE code = :code;
`;

const workstationExtQuery = `
SELECT
    id,
    code,
    workstation_code AS 'workstationCode',
    name,
    address,
    barangay,
    district,
    longitude,
    latitude,
    \`type\`,
    category,
    remarks,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM workstation_extension;
`;

const workstationExtByCodeQuery = `
SELECT
    id,
    code,
    workstation_code AS 'workstationCode',
    name,
    address,
    barangay,
    district,
    longitude,
    latitude,
    \`type\`,
    category,
    remarks,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM workstation_extension
WHERE code = :code;
`;

const personnelAssignmentCOSQuery = `
SELECT
    id,
    employee_number_cos AS 'employeeNumber',
    workstation_code AS 'workstationCode',
    workstation_extension_code AS 'workstationExtCode',
    DATE_FORMAT(date_from, '%Y-%m-%d %H:%i:%S') AS 'dateFrom',
    DATE_FORMAT(date_to, '%Y-%m-%d %H:%i:%S') AS 'dateTo',
    basis,
    \`rank\`,
    document,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM personnel_assignment;
`;

const personnelAssignmentRegularQuery = `
SELECT
    id,
    employee_number_regular AS 'employeeNumber',
    workstation_code AS 'workstationCode',
    workstation_extension_code AS 'workstationExtCode',
    DATE_FORMAT(date_from, '%Y-%m-%d %H:%i:%S') AS 'dateFrom',
    DATE_FORMAT(date_to, '%Y-%m-%d %H:%i:%S') AS 'dateTo',
    basis,
    \`rank\`,
    document,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM personnel_assignment;
`;

const personnelAssignmentCOSByEmpNoQuery = `
SELECT
    id,
    employee_number_cos AS 'employeeNumber',
    workstation_code AS 'workstationCode',
    workstation_extension_code AS 'workstationExtCode',
    DATE_FORMAT(date_from, '%Y-%m-%d %H:%i:%S') AS 'dateFrom',
    DATE_FORMAT(date_to, '%Y-%m-%d %H:%i:%S') AS 'dateTo',
    basis,
    \`rank\`,
    document,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM personnel_assignment
WHERE employee_number = :employeeNumber;
`;

const personnelAssignmentRegularByEmpNoQuery = `
SELECT
    id,
    employee_number_regular AS 'employeeNumber',
    workstation_code AS 'workstationCode',
    workstation_extension_code AS 'workstationExtCode',
    DATE_FORMAT(date_from, '%Y-%m-%d %H:%i:%S') AS 'dateFrom',
    DATE_FORMAT(date_to, '%Y-%m-%d %H:%i:%S') AS 'dateTo',
    basis,
    \`rank\`,
    document,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM personnel_assignment
WHERE employee_number = :employeeNumber;
`;

const profileAddressByPofileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    type,
    house_block_lot_no AS 'houseLotNo',
    street,
    subdivision_village AS 'subdivisionVillage',
    barangay,
    city_municipality AS 'cityMunicipality',
    province,
    zip_code AS 'zipCode',
    administrative_district AS 'administrativeDistrict',
    congressional_district AS 'congressionalDistrict',
    is_active AS 'active',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile_address
WHERE profile_code = :profileCode;
`;

const profileAddressByIDQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    type,
    house_block_lot_no AS 'houseLotNo',
    street,
    subdivision_village AS 'subdivisionVillage',
    barangay,
    city_municipality AS 'cityMunicipality',
    province,
    zip_code AS 'zipCode',
    administrative_district AS 'administrativeDistrict',
    congressional_district AS 'congressionalDistrict',
    is_active AS 'active',
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile_address
WHERE id = :id;
`;

const appDrawerQuery = `
SELECT
    id,
    name,
    url,
    icon_stack AS 'iconStack',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM app_drawer;
`;

const structurePlantillaQuery = `
SELECT
    code,
    data_version_id AS 'dataVersionID',
    common_code AS 'commonCode',
    department_code AS 'departmentCode',
    position_code AS 'positionCode',
    item_number AS 'itemNumber',
    item_number_previous AS 'itemNumberPrev',
    vacancy_date AS 'vacancyDate',
    appointment_status AS 'appointmentStatus',
    appointment_type AS 'appointmentType',
    order_department AS 'orderDepartment',
    order_division AS 'orderDivision',
    order_item_number AS 'orderItemNumber',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM structure_plantilla;
`;

const rbacQuery = `
SELECT
    id,
    assignment_id AS 'assignmentID',
    role_id AS 'roleID',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM user_roles;
`;

const rolesQuery = `
SELECT
    id,
    name,
    tag
FROM roles;
`;

const permissionsQuery = `
SELECT 
  permissions.id AS 'id',
  role_permissions.role_id AS 'roleID',
  permissions.name AS 'name',
  permissions.tag AS 'tag'
FROM 
  role_permissions
INNER JOIN permissions ON permissions.id = role_permissions.permission_id;
`;

const activeCosEmploymentQuery = `
SELECT
    employee_number_cos AS 'employeeNumber',
    data_version_id AS 'employmentStatusID',
    department_code AS 'departmentCode',
    position_code AS 'positionCode',
    date_from AS 'contractFrom',
    date_to AS 'contractTo',
    months,
    contract_no AS 'contractNo',
    document,
    masterlist,
    remarks,
    conforme,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_nonplantilla
WHERE datadata_version_id = 2;
`;

const activeCosEmploymentByEmpNoQuery = `
SELECT
    employee_number_cos AS 'employeeNumber',
    data_version_id AS 'employmentStatusID',
    department_code AS 'departmentCode',
    position_code AS 'positionCode',
    date_from AS 'contractFrom',
    date_to AS 'contractTo',
    months,
    contract_no AS 'contractNo',
    document,
    masterlist,
    remarks,
    conforme,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM employment_record_nonplantilla
WHERE employee_number_cos = :employeeNumber AND datadata_version_id = 2;
`;

const programByDepartmentCodeQuery = `
SELECT
    code,
    department_code AS 'departmentCode',
    name,
    appropriation,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM structure_program_nonplantilla
WHERE department_code IN (:departmentCode);
`;

const positionByProgramCodeQuery = `
SELECT
    code,
    program_code AS 'programCode',
    category,
    name,
    rate,
    \`function\`,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM position_nonplantilla
WHERE program_code IN (:programCode);
`;

const workstationExtByWorkstationCodeQuery = `
SELECT
    id,
    code,
    workstation_code AS 'workstationCode',
    name,
    address,
    barangay,
    district,
    longitude,
    latitude,
    \`type\`,
    category,
    remarks,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM workstation_extension
WHERE workstation_code = :workstationCode;
`;

const profileEducationByPofileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    level,
    school,
    description,
    period_from AS 'periodFrom',
    period_to AS 'periodTo',
    level_units_earned AS 'levelUnitsEarned',
    year_graduated AS 'yearGraduated',
    award,
    remarks,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile_education
WHERE profile_code = :profileCode;
`;

const profileEducationByIDQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    level,
    school,
    description,
    period_from AS 'periodFrom',
    period_to AS 'periodTo',
    level_units_earned AS 'levelUnitsEarned',
    award,
    remarks,
    created_by AS 'createdBy',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    updated_by AS 'updatedBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM profile_education
WHERE id = :id;
`;

const profileSpouseByPofileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    first_name AS 'firstName',
    last_name AS 'lastName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    suffix_name AS 'suffixName',
    birthdate AS 'birthDate',
    occupation,
    employer_business_name AS 'employerBusinessName',
    business_address AS 'businessAddress',
    contact_number AS 'contactNumber',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_dependent_spouse
WHERE profile_code = :profileCode;
`;

const profileChildByPofileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    name,
    birthdate AS 'birthDate',
    \`order\`,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_dependent_child
WHERE profile_code = :profileCode;
`;

const profileParentByPofileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    first_name AS 'firstName',
    last_name AS 'lastName',
    middle_name AS 'middleName',
    maiden_name AS 'maidenName',
    suffix_name AS 'suffixName',
    birthdate AS 'birthDate',
    address,
    contact_number AS 'contactNumber',
    relationship,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_dependent_parent
WHERE profile_code = :profileCode;
`;

const eligibilityQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    rating,
    date_of_exam_conferment AS 'dateOfExamConferment',
    place_of_exam_conferment AS 'placeOfExamConferment',
    license_number AS 'licenseNumber',
    license_validity_date AS 'licenseValidityDate',
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_eligibility;
`;

const eligibilityByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    rating,
    date_of_exam_conferment AS 'dateOfExamConferment',
    place_of_exam_conferment AS 'placeOfExamConferment',
    license_number AS 'licenseNumber',
    license_validity_date AS 'licenseValidityDate',
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_eligibility
WHERE profile_code = :profileCode;
`;

const distinctionRecognitionQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_distinction_recognition;
`;

const questionQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    1a_is_related_by_consanguinity_affinity_within_3rd_degree AS 'oneA',
    1a_if_yes_details AS 'oneAIfYes',
    1b_is_related_by_consanguinity_affinity_within_4th_degree AS 'oneB',
    1b_if_yes_details AS 'oneBIfYes',
    2a_has_been_guilty_of_any_administrative_offense AS 'twoA',
    2a_if_yes_details AS 'twoAIfYes',
    2b_has_been_criminally_charged_in_court AS 'twoB',
    2b_if_yes_date_filed AS 'twoBIfYesDateFiled',
    2b_if_yes_status_of_cases AS 'twoBIfYesStatus',
    3_has_been_convicted_of_any_crime AS 'three',
    3_if_yes_details AS 'threeIfYes',
    4_has_been_separated_from_the_service AS 'four',
    4_if_yes_details AS 'fourIfYes',
    5a_has_been_a_candidate_in_an_election AS 'fiveA',
    5a_if_yes_details AS 'fiveAIfYes',
    5b_has_resigned_from_government_service AS 'fiveB',
    5b_if_yes_details AS 'fiveBIfYes',
    6_has_acquired_immigrant_status AS 'six',
    6_if_yes_details AS 'sixIfYes',
    7a_is_a_member_of_indigenous_group AS 'sevenA',
    7a_if_yes_specify AS 'sevenAIfYes',
    7b_is_a_person_with_disabilitiy AS 'sevenB',
    7b_if_yes_id_number AS 'sevenBIfYes',
    7c_is_a_solo_parent AS 'sevenC',
    7c_if_yes_id_number AS 'sevenCIfYes',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_question;
`;

const membershipQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_membership;
`;

const referenceQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    name,
    address,
    contact_number AS 'contactNumber',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_reference;
`;

const skillHobbyQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_skill_hobby;
`;

const voluntaryWorkQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    organization_name_address AS 'organizationNameAddress',
    date_from AS 'dateFrom',
    date_to AS 'dateTo',
    hours,
    position_nature_of_work AS 'positionNatureOfWork',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_voluntary_work;
`;

const profileWorkExperienceQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    date_from AS 'dateFrom',
    date_to AS 'dateTo',
    position_title AS 'positionTitle',
    employer,
    monthly_salary AS 'monthlySalary',
    pay_grade AS 'payGrade',
    appointment_status AS 'appointmentStatus',
    is_government_service AS 'isGovernmentService',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_work_experience;
`;

const distinctionRecognitionByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_distinction_recognition
WHERE profile_code = :profileCode;
`;

const questionByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    1a_is_related_by_consanguinity_affinity_within_3rd_degree AS 'oneA',
    1a_if_yes_details AS 'oneAIfYes',
    1b_is_related_by_consanguinity_affinity_within_4th_degree AS 'oneB',
    1b_if_yes_details AS 'oneBIfYes',
    2a_has_been_guilty_of_any_administrative_offense AS 'twoA',
    2a_if_yes_details AS 'twoAIfYes',
    2b_has_been_criminally_charged_in_court AS 'twoB',
    2b_if_yes_date_filed AS 'twoBIfYesDateFiled',
    2b_if_yes_status_of_cases AS 'twoBIfYesStatus',
    3_has_been_convicted_of_any_crime AS 'three',
    3_if_yes_details AS 'threeIfYes',
    4_has_been_separated_from_the_service AS 'four',
    4_if_yes_details AS 'fourIfYes',
    5a_has_been_a_candidate_in_an_election AS 'fiveA',
    5a_if_yes_details AS 'fiveAIfYes',
    5b_has_resigned_from_government_service AS 'fiveB',
    5b_if_yes_details AS 'fiveBIfYes',
    6_has_acquired_immigrant_status AS 'six',
    6_if_yes_details AS 'sixIfYes',
    7a_is_a_member_of_indigenous_group AS 'sevenA',
    7a_if_yes_specify AS 'sevenAIfYes',
    7b_is_a_person_with_disabilitiy AS 'sevenB',
    7b_if_yes_id_number AS 'sevenBIfYes',
    7c_is_a_solo_parent AS 'sevenC',
    7c_if_yes_id_number AS 'sevenCIfYes',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_question
WHERE profile_code = :profileCode;
`;

const membershipByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_membership
WHERE profile_code = :profileCode;
`;

const referenceByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    name,
    address,
    contact_number AS 'contactNumber',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_reference
WHERE profile_code = :profileCode;
`;

const skillHobbyByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_skill_hobby
WHERE profile_code = :profileCode;
`;

const voluntaryWorkByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    organization_name_address AS 'organizationNameAddress',
    date_from AS 'dateFrom',
    date_to AS 'dateTo',
    hours,
    position_nature_of_work AS 'positionNatureOfWork',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_voluntary_work
WHERE profile_code = :profileCode;
`;

const profileWorkExperienceByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    date_from AS 'dateFrom',
    date_to AS 'dateTo',
    position_title AS 'positionTitle',
    employer,
    monthly_salary AS 'monthlySalary',
    pay_grade AS 'payGrade',
    appointment_status AS 'appointmentStatus',
    is_government_service AS 'isGovernmentService',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_work_experience
WHERE profile_code = :profileCode;
`;

const covidVaccinationByProfileCodeQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    category,
    DATE_FORMAT(vaccination_date, '%Y-%m-%d') AS 'vaccinationDate',
    manufacturer,
    batch_number AS 'batchNumber',
    lot_number AS 'lotNumber',
    health_facility AS 'healthFacility',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM profile_covid_vaccination
WHERE profile_code = :profileCode;
`;

const covidVaccinationQuery = `
SELECT
    id,
    profile_code AS 'profileCode',
    description,
    category,
    DATE_FORMAT(vaccination_date, '%Y-%m-%d') AS 'vaccinationDate',
    manufacturer,
    batch_number AS 'batchNumber',
    lot_number AS 'lotNumber',
    health_facility AS 'healthFacility',
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM \`profile_covid_vaccination\`;
`;

const schoolListQuery = `
SELECT
    id,
    name,
    address,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM schools
ORDER BY name ASC;
`;

const dataVersionQuery = `
SELECT
    id,
    description,
    effectivity_from AS 'effectivityFrom',
    effectivity_to AS 'effectivityTo',
    effectivity_from AS 'effectivityFrom',
    employment_type AS 'employmentType',
    remarks,
    DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
    created_by AS 'createdBy',
    DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt',
    updated_by AS 'updatedBy'
FROM data_version;
`;

export {
  profileRegularQuery,
  profileRegularByEmpNoQuery,
  profileCOSQuery,
  profileCOSNoFilterQuery,
  profileCOSNoFilterSortByCodeQuery,
  profileCOSByEmpNoQuery,
  religionQuery,
  religionByCodeQuery,
  addressQuery,
  dependentChildQuery,
  dependentParentQuery,
  dependentSpouseQuery,
  educationQuery,
  employmentStatusQuery,
  employmentStatusByIdQuery,
  departmentQuery,
  departmentByCodeQuery,
  employmentChargeabilityNonplantillaQuery,
  employmentChargeabilityNonplantillaByCodeQuery,
  positionCOSQuery,
  positionCOSByCodeQuery,
  positionRegularQuery,
  positionRegularByCodeQuery,
  divisionQuery,
  cosEmploymentQuery,
  cosEmploymentByEmpNoQuery,
  cosEmploymentByEmpNoDataVersionQuery,
  regularEmploymentQuery,
  regularEmploymentByEmpNoQuery,
  workstationQuery,
  workstationByCodeQuery,
  workstationExtQuery,
  workstationExtByCodeQuery,
  personnelAssignmentCOSQuery,
  personnelAssignmentCOSByEmpNoQuery,
  personnelAssignmentRegularQuery,
  personnelAssignmentRegularByEmpNoQuery,
  profileAddressByPofileCodeQuery,
  profileAddressByIDQuery,
  appDrawerQuery,
  structurePlantillaQuery,
  rbacQuery,
  rolesQuery,
  permissionsQuery,
  activeCosEmploymentQuery,
  activeCosEmploymentByEmpNoQuery,
  programByDepartmentCodeQuery,
  positionByProgramCodeQuery,
  workstationExtByWorkstationCodeQuery,
  profileEducationByPofileCodeQuery,
  profileEducationByIDQuery,
  profileSpouseByPofileCodeQuery,
  profileChildByPofileCodeQuery,
  profileParentByPofileCodeQuery,
  iosOccupationalServiceQuery,
  iosOccupationalGroupQuery,
  eligibilityQuery,
  eligibilityByProfileCodeQuery,
  distinctionRecognitionQuery,
  questionQuery,
  membershipQuery,
  referenceQuery,
  skillHobbyQuery,
  voluntaryWorkQuery,
  profileWorkExperienceQuery,
  distinctionRecognitionByProfileCodeQuery,
  questionByProfileCodeQuery,
  membershipByProfileCodeQuery,
  referenceByProfileCodeQuery,
  skillHobbyByProfileCodeQuery,
  voluntaryWorkByProfileCodeQuery,
  profileWorkExperienceByProfileCodeQuery,
  covidVaccinationByProfileCodeQuery,
  covidVaccinationQuery,
  schoolListQuery,
  dataVersionQuery,
};
