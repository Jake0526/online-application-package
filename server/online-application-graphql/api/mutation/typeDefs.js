// import { gql } from 'apollo-server-express';

// const typeDefs = gql`
//     extend type Mutation {
//         createChargeability(input: InputChargeability!): InsertQueryResponse
//         updateChargeability(input: InputChargeability!): UpdateDeleteQueryResponse
//         deleteChargeability(code: String!): UpdateDeleteQueryResponse
//         createPosition(input: InputPosition!): InsertQueryResponse
//         updatePosition(input: InputPosition!): UpdateDeleteQueryResponse
//         deletePosition(code: String!): UpdateDeleteQueryResponse
//         createDepartment(input: InputDepartment!): InsertQueryResponse
//         updateDepartment(input: InputDepartment!): UpdateDeleteQueryResponse
//         deleteDepartment(code: String!): UpdateDeleteQueryResponse
//         createWorkstation(input: InputWorkstation!): InsertQueryResponse
//         updateWorkstation(input: InputWorkstation!): UpdateDeleteQueryResponse
//         deleteWorkstation(code: String!): UpdateDeleteQueryResponse
//         createWorkstationExt(input: InputWorkstationExt!): InsertQueryResponse
//         updateWorkstationExt(input: InputWorkstationExt!): UpdateDeleteQueryResponse
//         deleteWorkstationExt(code: String!): UpdateDeleteQueryResponse
//         createProfile(input: InputProfile!): InsertProfileQueryResponse
//         createEmployment(input: InputEmployment!): InsertQueryResponse
//         createPersonnelAssignment(input: InputAssignment!): InsertQueryResponse
//         updateCompleteName(input: InputUpdateCompleteName!): UpdateDeleteQueryResponse
//         updateOtherPersonalInformation(input: InputUpdateOtherPersonalInformation!): UpdateDeleteQueryResponse
//         createAddress(input: InputAddress!): InsertQueryResponse
//         updateAddress(input: InputAddress!): UpdateDeleteQueryResponse
//         deleteAddress(id: String!): UpdateDeleteQueryResponse
//         createEducation(input: InputEducation!): InsertQueryResponse
//         updateEducation(input: InputEducation!): InsertQueryResponse
//         deleteEducation(id: String!): InsertQueryResponse
//         updatePhotosAndSignature(input: InputPhotosSignature): InsertQueryResponse
//         updateInCaseOfEmergency(input: InputUpdateInCaseOfEmergency!): UpdateDeleteQueryResponse
//         createSpouse(input: InputSpouse!): InsertQueryResponse
//         updateSpouse(input: InputSpouse!): InsertQueryResponse
//         deleteSpouse(id: String!): InsertQueryResponse
//         createChild(input: InputChild!): InsertQueryResponse
//         updateChild(input: InputChild!): InsertQueryResponse
//         deleteChild(id: String!): InsertQueryResponse
//         createParent(input: InputParent!): InsertQueryResponse
//         updateParent(input: InputParent!): InsertQueryResponse
//         deleteParent(id: String!): InsertQueryResponse
//         createEligibility(input: InputEligibility!): InsertQueryResponse
//         updateEligibility(input: InputEligibility!): InsertQueryResponse
//         deleteEligibility(id: String!): InsertQueryResponse
//         createQuestion(input: InputQuestion!): InsertQueryResponse
//         updateQuestion(input: InputQuestion!): InsertQueryResponse
//         createReference(input: InputReference!): InsertQueryResponse
//         updateReference(input: InputReference!): InsertQueryResponse
//         deleteReference(id: String!): InsertQueryResponse
//         createSkillHobby(input: InputSkillHobby!): InsertQueryResponse
//         updateSkillHobby(input: InputSkillHobby!): InsertQueryResponse
//         deleteSkillHobby(id: String!): InsertQueryResponse
//         createDistinctionRecognition(input: InputDistinctionRecognition!): InsertQueryResponse
//         updateDistinctionRecognition(input: InputDistinctionRecognition!): InsertQueryResponse
//         deleteDistinctionRecognition(id: String!): InsertQueryResponse
//         createMembership(input: InputMembership!): InsertQueryResponse
//         updateMembership(input: InputMembership!): InsertQueryResponse
//         deleteMembership(id: String!): InsertQueryResponse
//         createVoluntary(input: InputVoluntary!): InsertQueryResponse
//         updateVoluntary(input: InputVoluntary!): InsertQueryResponse
//         deleteVoluntary(id: String!): InsertQueryResponse
//         createVaccination(input: InputVaccination!): InsertQueryResponse
//         updateVaccination(input: InputVaccination!): InsertQueryResponse
//         deleteVaccination(id: String!): InsertQueryResponse
//         createSchool(input: InputSchool!): InsertQueryResponse
//         updateSchool(input: InputSchool!): InsertQueryResponse
//         deleteSchool(id: String!): InsertQueryResponse
//         createProfileWithEmployeeNumber(input: InputProfileWithEmployeeNumber!): InsertProfileQueryResponse
//         updateCurrentEmployment(input: InputCurrentEmployment!): InsertQueryResponse
//     }

//     type InsertQueryResponse {
//         message: String
//         status: String
//         insertedID: Int
//     }

//     type InsertProfileQueryResponse {
//         message: String
//         status: String
//         insertedID: Int
//         insertedEmployeeNumber: String
//         insertedProfileCode: String
//     }

//     type UpdateDeleteQueryResponse {
//         message: String
//         status: String
//     }

//     input InputChargeability {
//         code: String!
//         description: String!
//         remarks: String!
//         createdBy: String
//         updatedBy: String
//     }

//     input InputPosition {
//         code: String!
//         category: String!
//         name: String!
//         rate: Float!
//         function: String!
//         createdBy: String
//         updatedBy: String
//     }

//     input InputDepartment {
//         code: String!
//         name: String!
//         district: String!
//         area: String!
//         groupSector: String!
//         staffingClassification: String!
//         officeSize: String!
//         officeClassification: String!
//         createdBy: String
//         updatedBy: String
//     }

//     input InputWorkstation {
//         code: String!
//         name: String!
//         address: String!
//         barangay: String!
//         district: String!
//         longitude: String!
//         latitude: String!
//         type: String!
//         category: String!
//         remarks: String!
//     }

//     input InputWorkstationExt {
//         code: String!
//         workstationCode: String!
//         name: String!
//         address: String!
//         barangay: String!
//         district: String!
//         longitude: String!
//         latitude: String!
//         type: String!
//         category: String!
//         remarks: String!
//     }

//     input InputProfile {
//         religionCode: String
//         firstName: String!
//         middleName: String
//         maidenName: String
//         lastName: String!
//         suffixName: String
//         nickName: String
//         birthDate: String
//         birthPlace: String
//         originatingProvince: String
//         sex: String
//         civilStatus: String
//         height: String
//         weight: String
//         bloodType: String
//         pagibig: String
//         philhealth: String
//         sss: String
//         tin: String
//         umid: String
//         crn: String
//         psn: String
//         citizenship: String
//         telephoneNumber: String
//         mobileNumber: String
//         pvbAccount: String
//         emailAddress: String,
//         signature: String,
//         photo: String,
//         differentlyAbled: Boolean
//         typeOfDisability: String
//         computerLiterate: Boolean
//         withPRCLicense: Boolean
//         prcLicenseFile: String
//         contactName: String
//         contactRelationship: String
//         contactAddress: String
//         contactNumber: String
//         createdBy: String
//     }

//     input InputEmployment {
//         employeeNumber: String
//         dataVersion: String
//         departmentCode: String
//         positionCode: String
//         chargeabilityCode: String
//         createdBy: String
//     }

//     input InputAssignment {
//         employeeNumber: String
//         workstationCode: String
//         workstationExtCode: String
//         dateFrom: String
//         dateTo: String
//         basis: String
//         document: String
//     }

//     input InputUpdateCompleteName {
//         code: String!
//         firstName: String!
//         middleName: String
//         maidenName: String
//         lastName: String!
//         nickName: String
//         suffixName: String
//         updatedBy: String
//         updatedAt: String
//     }

//     input InputUpdateOtherPersonalInformation {
//         code: String!
//         religionCode: String
//         birthDate: String
//         birthPlace: String
//         originatingProvince: String
//         sex: String
//         civilStatus: String
//         height: String
//         weight: String
//         bloodType: String
//         pagibig: String
//         philhealth: String
//         gsis: String
//         gsisID: String
//         gsisECard: String
//         gsisBP: String
//         fdNHA: String
//         fdGovernment: String
//         sss: String
//         tin: String
//         umid: String
//         crn: String
//         psn: String
//         citizenship: String
//         telephoneNumber: String
//         mobileNumber: String
//         pvbAccount: String
//         emailAddress: String
//         differentlyAbled: Boolean
//         typeOfDisability: String
//         computerLiterate: Boolean
//         withPRCLicense: Boolean
//         prcLicenseFile: String
//         updatedBy: String
//     }

//     input InputAddress {
//         id: String
//         profileCode: String
//         type: String
//         houseBlockLotNo: String
//         street: String
//         subdivisionVillage: String
//         barangay: String
//         cityMunicipality: String
//         province: String
//         zipCode: String
//         administrativeDistrict: String
//         congressionalDistrict: String
//         isActive: Boolean
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputEducation {
//         id: String
//         profileCode: String
//         level: String
//         school: String
//         description: String
//         periodFrom: String
//         periodTo: String
//         levelUnitsEarned: String
//         yearGraduated: String
//         award: String
//         remarks: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputPhotosSignature {
//         code: String
//         photo: String
//         signature: String
//         updatedBy: String
//     }

//     input InputUpdateInCaseOfEmergency {
//         code: String!
//         contactName: String
//         contactRelationship: String
//         contactAddress: String
//         contactNumber: String
//         updatedBy: String
//         updatedAt: String
//     }

//     input InputSpouse {
//         id: String
//         profileCode: String
//         firstName: String
//         lastName: String
//         middleName: String
//         maidenName: String
//         suffixName: String
//         birthdate: String
//         occupation: String
//         employerBusinessName: String
//         businessAddress: String
//         contactNumber: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputChild {
//         id: String
//         profileCode: String
//         name: String
//         birthdate: String
//         order: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputParent {
//         id: String
//         profileCode: String
//         firstName: String
//         lastName: String
//         middleName: String
//         maidenName: String
//         suffixName: String
//         birthdate: String
//         address: String
//         contactNumber: String
//         relationship: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputEligibility {
//         id: String
//         profileCode: String
//         description: String
//         rating: String
//         dateOfExamConferment: String
//         placeOfExamConferment: String
//         licenseNumber: String
//         licenseValidityDate: String
//         remarks: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputQuestion {
//         id: String
//         profileCode: String
//         oneA: Boolean
//         oneAIfYes: String
//         oneB: Boolean
//         oneBIfYes: String
//         twoA: Boolean
//         twoAIfYes: String
//         twoB: Boolean
//         twoBIfYesDateFiled: String
//         twoBIfYesStatus: String
//         three: Boolean
//         threeIfYes: String
//         four: Boolean
//         fourIfYes: String
//         fiveA: Boolean
//         fiveAIfYes: String
//         fiveB: Boolean
//         fiveBIfYes: String
//         six: Boolean
//         sixIfYes: String
//         sevenA: Boolean
//         sevenAIfYes: String
//         sevenB: Boolean
//         sevenBIfYes: String
//         sevenC: Boolean
//         sevenCIfYes: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputReference {
//         id: String
//         profileCode: String
//         name: String
//         address: String
//         contactNumber: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputSkillHobby {
//         id: String
//         profileCode: String
//         description: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputDistinctionRecognition {
//         id: String
//         profileCode: String
//         description: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputMembership {
//         id: String
//         profileCode: String
//         description: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputVoluntary {
//         id: String
//         profileCode: String
//         organizationNameAddress: String
//         dateFrom: String
//         dateTo: String
//         hours: String
//         positionNatureOfWork: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputVaccination {
//         id: String
//         profileCode: String
//         description: String
//         category: String
//         vaccinationDate: String
//         manufacturer: String
//         batchNumber: String
//         lotNumber: String
//         healthFacility: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputSchool {
//         id: String
//         name: String
//         address: String
//         createdBy: String
//         createdAt: String
//         updatedBy: String
//     }

//     input InputProfileWithEmployeeNumber {
//         employeeNumber: String
//         firstName: String!
//         middleName: String
//         maidenName: String
//         lastName: String!
//         suffixName: String
//         nickName: String
//         createdBy: String
//     }

//     input InputCurrentEmployment {
//       employeeNumber: String
//       dataVersionID: String
//       departmentCode: String
//       positionCode: String
//       chargeabilityCode: String
//       months: String
//       contractNo: String
//       dateFrom: String
//       dateTo: String
//       remarks: String
//       conforme: String
//       createdBy: String
//       createdAt: String
//       updatedBy: String
//     }
// `;

// export default typeDefs;
