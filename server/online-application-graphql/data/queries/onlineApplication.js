const educationByProfileQuery = `
SELECT
  id,
  profile_code AS 'profileCode',
  name AS 'schoolName',
  address AS 'schoolAddress',
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM education
WHERE profile_code = :profileCode
ORDER BY name ASC;
`;

const trainingByProfileQuery = `
SELECT
  id,
  profile_code AS 'profileCode',
  title AS 'trainingTitle',
  address AS 'trainingAddress',
  DATE_FORMAT(training_date, '%Y-%m-%d %H:%i:%S') AS 'trainingDate',
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM training
WHERE profile_code = :profileCode
ORDER BY name ASC;
`;

const experienceByProfileQuery = `
SELECT
  id,
  profile_code AS 'profileCode',
  position_name AS 'positionName',
  job_description AS 'jobDescription',
  company_name AS 'companyName',
  company_address AS 'companyAddress',
  DATE_FORMAT(start_date, '%Y-%m-%d %H:%i:%S') AS 'startDate',
  DATE_FORMAT(end_date, '%Y-%m-%d %H:%i:%S') AS 'endDate',
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM experience
WHERE profile_code = :profileCode
ORDER BY name ASC;
`;

const religionQuery = `
SELECT
  id,
  code,
  name,
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM religion
ORDER BY name ASC;
`;

const religionByCodeQuery = `
SELECT
  id,
  code,
  name,
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
FROM religion
WHERE code = :religionCode
ORDER BY name ASC;
`;

const profileQuery = `
SELECT
  id,
  religion_code AS 'religionCode',
  code AS 'profileCode',
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
ORDER BY last_name ASC
LIMIT 3;
`;

const profileByReligionQuery = `
SELECT
  id,
  religion_code AS 'religionCode',
  code AS 'profileCode',
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
WHERE religion_code = :religionCode
ORDER BY last_name ASC;
`;

const applicationAttachmentQuery = `
SELECT
  id,
  attachment,
  file_name AS fileName,
  path,
  type,
  DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%S') AS 'createdAt',
  DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%S') AS 'updatedAt'
`;

export {
  educationByProfileQuery,
  trainingByProfileQuery,
  experienceByProfileQuery,
  religionQuery,
  religionByCodeQuery,
  profileQuery,
  profileByReligionQuery,
  applicationAttachmentQuery,
};
