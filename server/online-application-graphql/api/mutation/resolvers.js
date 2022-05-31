// import Future from 'fibers/future';
// import Sequelize, { and } from 'sequelize';

// import moment from 'moment-timezone';

// import {
//   sequelizedPIMS,
// } from '../../data/sequilizeConnectors';

// import {
//   createChargeabilityQuery
// } from '../../data/queries/mutation';

// import {
//   departmentByCodeQuery
// } from '../../data/queries/pims';

// const request = require('request');

// const resolvers = {
//   Mutation: {
//     async createChargeability(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const program = await sequelizedPIMS.query(employmentChargeabilityNonplantillaByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (program.length != 0) {
//         result.message = 'Chargeability code already exist';
//         result.status = 'error';
//       } else {
//         const createProgramResult = await sequelizedPIMS.query(createChargeabilityQuery, {
//           replacements: {
//             code: args.input.code,
//             description: args.input.description,
//             remarks: args.input.remarks,
//             createdBy: args.input.createdBy,
//           },
//           type: Sequelize.QueryTypes.INSERT,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Created';
//         result.status = 'success';
//         result.insertedID = createProgramResult[0];
//       }

//       return result;
//     },
//     async updateChargeability(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const program = await sequelizedPIMS.query(employmentChargeabilityNonplantillaByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (program.length == 0) {
//         result.message = 'Program code not exist';
//         result.status = 'error';
//       } else {
//         const updateProgramResult = await sequelizedPIMS.query(updateChargeabilityQuery, {
//           replacements: {
//             code: args.input.code,
//             description: args.input.description,
//             remarks: args.input.remarks,
//             updatedBy: args.input.updatedBy,
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deleteChargeability(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const chargeability = await sequelizedPIMS.query(employmentChargeabilityNonplantillaByCodeQuery, {
//         replacements: { code: args.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (chargeability.length == 0) {
//         result.message = 'Chargeability code not exist';
//         result.status = 'error';
//       } else {
//         const deleteChargeability = await sequelizedPIMS.query(deleteChargeabilityQuery, {
//           replacements: { code: args.code },
//           type: Sequelize.QueryTypes.DELETE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Deleted';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async createPosition(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const position = await sequelizedPIMS.query(positionCOSByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (position.length != 0) {
//         result.message = 'Position code already exist';
//         result.status = 'error';
//       } else {
//         const createPositionResult = await sequelizedPIMS.query(createPositionQuery, {
//           replacements: {
//             code: args.input.code,
//             category: args.input.category,
//             name: args.input.name,
//             rate: args.input.rate,
//             function: args.input.function,
//             createdBy: args.input.createdBy,
//           },
//           type: Sequelize.QueryTypes.INSERT,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Created';
//         result.status = 'success';
//         result.insertedID = createPositionResult[0];
//       }

//       return result;
//     },
//     async updatePosition(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const position = await sequelizedPIMS.query(positionCOSByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (position.length == 0) {
//         result.message = 'Position code not exist';
//         result.status = 'error';
//       } else {
//         const updatePositionResult = await sequelizedPIMS.query(updatePositionQuery, {
//           replacements: {
//             code: args.input.code,
//             category: args.input.category,
//             name: args.input.name,
//             rate: args.input.rate,
//             function: args.input.function,
//             updatedBy: args.input.updatedBy,
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deletePosition(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const position = await sequelizedPIMS.query(positionCOSByCodeQuery, {
//         replacements: { code: args.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (position.length == 0) {
//         result.message = 'Position code not exist';
//         result.status = 'error';
//       } else {
//         const deletePosition = await sequelizedPIMS.query(deletePositionQuery, {
//           replacements: { code: args.code },
//           type: Sequelize.QueryTypes.DELETE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Deleted';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async createDepartment(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const department = await sequelizedPIMS.query(departmentByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (department.length != 0) {
//         result.message = 'Department code is already exist';
//         result.status = 'error';
//       } else {
//         const createDepartmentResult = await sequelizedPIMS.query(createDepartmentQuery, {
//           replacements: {
//             code: args.input.code,
//             name: args.input.name,
//             district: args.input.district,
//             area: args.input.area,
//             groupSector: args.input.groupSector,
//             staffingClassification: args.input.staffingClassification,
//             officeSize: args.input.officeSize,
//             officeClassification: args.input.officeClassification,
//             createdBy: args.input.createdBy,
//           },
//           type: Sequelize.QueryTypes.INSERT,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Created';
//         result.status = 'success';
//         result.insertedID = createDepartmentResult[0];
//       }

//       return result;
//     },
//     async updateDepartment(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const department = await sequelizedPIMS.query(departmentByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (department.length == 0) {
//         result.message = 'Department code not exist';
//         result.status = 'error';
//       } else {
//         const updateDepartmentResult = await sequelizedPIMS.query(updateDepartmentQuery, {
//           replacements: {
//             code: args.input.code,
//             name: args.input.name,
//             district: args.input.district,
//             area: args.input.area,
//             groupSector: args.input.groupSector,
//             staffingClassification: args.input.staffingClassification,
//             officeSize: args.input.officeSize,
//             officeClassification: args.input.officeClassification,
//             updatedBy: args.input.updatedBy,
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deleteDepartment(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const department = await sequelizedPIMS.query(departmentByCodeQuery, {
//         replacements: { code: args.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (department.length == 0) {
//         result.message = 'Position code not exist';
//         result.status = 'error';
//       } else {
//         const deleteDepartment = await sequelizedPIMS.query(deleteDepartmentQuery, {
//           replacements: { code: args.code },
//           type: Sequelize.QueryTypes.DELETE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Deleted';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async createWorkstation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const workstation = await sequelizedPIMS.query(workstationByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (workstation.length != 0) {
//         result.message = 'Workstation code is already exist';
//         result.status = 'error';
//       } else {
//         const createWorkstationResult = await sequelizedPIMS.query(createWorkstationQuery, {
//           replacements: {
//             code: args.input.code,
//             name: args.input.name,
//             address: args.input.address,
//             barangay: args.input.barangay,
//             district: args.input.district,
//             longitude: args.input.longitude,
//             latitude: args.input.latitude,
//             type: args.input.type,
//             category: args.input.category,
//             remarks: args.input.remarks,
//           },
//           type: Sequelize.QueryTypes.INSERT,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Created';
//         result.status = 'success';
//         result.insertedID = createWorkstationResult[0];
//       }

//       return result;
//     },
//     async updateWorkstation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const workstation = await sequelizedPIMS.query(workstationByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (workstation.length == 0) {
//         result.message = 'Workstation code not exist';
//         result.status = 'error';
//       } else {
//         const updateWorkstationResult = await sequelizedPIMS.query(updateWorkstationQuery, {
//           replacements: {
//             code: args.input.code,
//             name: args.input.name,
//             address: args.input.address,
//             barangay: args.input.barangay,
//             district: args.input.district,
//             longitude: args.input.longitude,
//             latitude: args.input.latitude,
//             type: args.input.type,
//             category: args.input.category,
//             remarks: args.input.remarks,
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deleteWorkstation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const workstation = await sequelizedPIMS.query(workstationByCodeQuery, {
//         replacements: { code: args.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (workstation.length == 0) {
//         result.message = 'Workstation code not exist';
//         result.status = 'error';
//       } else {
//         const deleteWorkstation = await sequelizedPIMS.query(deleteWorkstationQuery, {
//           replacements: { code: args.code },
//           type: Sequelize.QueryTypes.DELETE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Deleted';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async createWorkstationExt(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const workstationExt = await sequelizedPIMS.query(workstationExtByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (workstationExt.length != 0) {
//         result.message = 'Workstation extension code is already exist';
//         result.status = 'error';
//       } else {
//         const createWorkstationExtResult = await sequelizedPIMS.query(createWorkstationExtQuery, {
//           replacements: {
//             code: args.input.code,
//             workstationCode: args.input.workstationCode,
//             name: args.input.name,
//             address: args.input.address,
//             barangay: args.input.barangay,
//             district: args.input.district,
//             longitude: args.input.longitude,
//             latitude: args.input.latitude,
//             type: args.input.type,
//             category: args.input.category,
//             remarks: args.input.remarks,
//           },
//           type: Sequelize.QueryTypes.INSERT,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Created';
//         result.status = 'success';
//         result.insertedID = createWorkstationExtResult[0];
//       }

//       return result;
//     },
//     async updateWorkstationExt(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const workstationExt = await sequelizedPIMS.query(workstationExtByCodeQuery, {
//         replacements: { code: args.input.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (workstationExt.length == 0) {
//         result.message = 'Workstation extension code not exist';
//         result.status = 'error';
//       } else {
//         const updateWorkstationExtResult = await sequelizedPIMS.query(updateWorkstationExtQuery, {
//           replacements: {
//             code: args.input.code,
//             workstationCode: args.input.workstationCode,
//             name: args.input.name,
//             address: args.input.address,
//             barangay: args.input.barangay,
//             district: args.input.district,
//             longitude: args.input.longitude,
//             latitude: args.input.latitude,
//             type: args.input.type,
//             category: args.input.category,
//             remarks: args.input.remarks,
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deleteWorkstationExt(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const workstationExt = await sequelizedPIMS.query(workstationExtByCodeQuery, {
//         replacements: { code: args.code },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (workstationExt.length == 0) {
//         result.message = 'Workstation code not exist';
//         result.status = 'error';
//       } else {
//         const deleteWorkstationExt = await sequelizedPIMS.query(deleteWorkstationExtQuery, {
//           replacements: { code: args.code },
//           type: Sequelize.QueryTypes.DELETE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Deleted';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async createProfile(obj, args) {
//       const profileResult = new Future();

//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//         insertedEmployeeNumber: null,
//         insertedProfileCode: null,
//       };

//       const religion = await sequelizedPIMS.query(religionByCodeQuery, {
//         replacements: { religionCode: args.input.religionCode },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (religion.length == 0) {
//         result.message = 'Religion is not exist';
//         result.status = 'error';

//         profileResult.return(result);
//       } else {
//         const errorThreshold = 5;
//         let errorCounter = 0;

//         const loop = async () => {
//           const pad = (num, size) => {
//             num = num.toString();
//             while (num.length < size) num = '0' + num;
//             return num;
//           }

//           const profileList = await sequelizedPIMS.query(profileCOSNoFilterQuery, {
//             type: Sequelize.QueryTypes.SELECT,
//             raw: true,
//             nest: true,
//             logging: false,
//           }).then((results) => results).catch(console.error);

//           const lastEmpNo = Math.max.apply(Math, profileList.map(function(item) { return item.employeeNumber ? parseInt(item.employeeNumber) : 0; }));
//           const lastCode = Math.max.apply(Math, profileList.map(function(item) { return parseInt(item.profileCode); }));
//           const newEmpNo = lastEmpNo + 1;
//           const newCode = lastCode + 1;

//           if (profileList.length > 0) {
//             sequelizedPIMS.query(createProfileCOSQuery, {
//               replacements: {
//                 code: newCode,
//                 employeeNumber: newEmpNo,
//                 religionCode: args.input.religionCode,
//                 firstName: args.input.firstName,
//                 middleName: args.input.middleName,
//                 maidenName: args.input.maidenName,
//                 lastName: args.input.lastName,
//                 suffixName: args.input.suffixName,
//                 nickName: args.input.nickName,
//                 birthDate: args.input.birthDate,
//                 birthPlace: args.input.birthPlace,
//                 originatingProvince: args.input.originatingProvince,
//                 sex: args.input.sex,
//                 civilStatus: args.input.civilStatus,
//                 height: args.input.height,
//                 weight: args.input.weight,
//                 bloodType: args.input.bloodType,
//                 pagibig: args.input.pagibig,
//                 philhealth: args.input.philhealth,
//                 sss: args.input.sss,
//                 tin: args.input.tin,
//                 umid: args.input.umid,
//                 crn: args.input.crn,
//                 psn: args.input.psn,
//                 citizenship: args.input.citizenship,
//                 telephoneNumber: args.input.telephoneNumber,
//                 mobileNumber: args.input.mobileNumber,
//                 pvbAccount: args.input.pvbAccount,
//                 emailAddress: args.input.emailAddress,
//                 signature: args.input.signature,
//                 photo: args.input.photo,
//                 differentlyAbled: args.input.differentlyAbled,
//                 typeOfDisability: args.input.typeOfDisability,
//                 computerLiterate: args.input.computerLiterate,
//                 withPRCLicense: args.input.withPRCLicense,
//                 prcLicenseFile: args.input.prcLicenseFile,
//                 contactName: args.input.contactName,
//                 contactRelationship: args.input.contactRelationship,
//                 contactAddress: args.input.contactAddress,
//                 contactNumber: args.input.contactNumber,
//                 createdBy: args.input.createdBy,
//               },
//               type: Sequelize.QueryTypes.INSERT,
//               raw: true,
//               nest: true,
//               logging: false,
//             }).then((results) => {
//               result.message = 'Successfully Created';
//               result.status = 'success';
//               result.insertedID = results[0];
//               result.insertedEmployeeNumber = newEmpNo;
//               result.insertedProfileCode = newCode;


//               profileResult.return(result);
//             }).catch((error) => {
//               console.log(error);

//               if (errorCounter < errorThreshold) {
//                 errorCounter++;

//                 loop();
//               } else {
//                 result.message = 'Request timeout';
//                 result.status = 'error';

//                 profileResult.return(result);
//               }
//             });
//           } else {
//             sequelizedPIMS.query(createProfileCOSQuery, {
//               replacements: {
//                 code: '1',
//                 employeeNumber: '1',
//                 religionCode: args.input.religionCode,
//                 firstName: args.input.firstName,
//                 middleName: args.input.middleName,
//                 maidenName: args.input.maidenName,
//                 lastName: args.input.lastName,
//                 suffixName: args.input.suffixName,
//                 nickName: args.input.nickName,
//                 birthDate: args.input.birthDate,
//                 birthPlace: args.input.birthPlace,
//                 originatingProvice: args.input.originatingProvice,
//                 sex: args.input.sex,
//                 civilStatus: args.input.civilStatus,
//                 height: args.input.height,
//                 weight: args.input.weight,
//                 bloodType: args.input.bloodType,
//                 pagibig: args.input.pagibig,
//                 philhealth: args.input.philhealth,
//                 sss: args.input.sss,
//                 tin: args.input.tin,
//                 umid: args.input.umid,
//                 crn: args.input.crn,
//                 psn: args.input.psn,
//                 citizenship: args.input.citizenship,
//                 telephoneNumber: args.input.telephoneNumber,
//                 mobileNumber: args.input.mobileNumber,
//                 pvbAccount: args.input.pvbAccount,
//                 emailAddress: args.input.emailAddress,
//                 signature: args.input.signature,
//                 photo: args.input.photo,
//                 differentlyAbled: args.input.differentlyAbled,
//                 typeOfDisability: args.input.typeOfDisability,
//                 computerLiterate: args.input.computerLiterate,
//                 withPRCLicense: args.input.withPRCLicense,
//                 prcLicenseFile: args.input.prcLicenseFile,
//                 contactName: args.input.contactName,
//                 contactRelationship: args.input.contactRelationship,
//                 contactAddress: args.input.contactAddress,
//                 contactNumber: args.input.contactNumber,
//               },
//               type: Sequelize.QueryTypes.INSERT,
//               raw: true,
//               nest: true,
//               logging: false,
//             }).then((results) => {
//               result.message = 'Successfully Created';
//               result.status = 'success';
//               result.insertedID = results[0];
//               result.insertedEmployeeNumber = '1';
//               result.insertedProfileCode = '1';

//               profileResult.return(result);
//             }).catch((error) => {
//               if (errorCounter < errorThreshold) {
//                 errorCounter++;

//                 loop();
//               } else {
//                 result.message = 'Request timeout';
//                 result.status = 'error';

//                 profileResult.return(result);
//               }
//             });
//           }
//         }

//         loop();
//       }

//       return profileResult.wait();
//     },
//     async createEmployment(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createEmploymentResult = await sequelizedPIMS.query(createEmploymentQuery, {
//         replacements: {
//           employeeNumber: args.input.employeeNumber,
//           dataVersion: args.input.dataVersion,
//           departmentCode: args.input.departmentCode,
//           positionCode: args.input.positionCode,
//           chargeabilityCode: args.input.chargeabilityCode,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createEmploymentResult[0];

//       return result;
//     },
//     async createPersonnelAssignment(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createPersonnelAssignmentResult = await sequelizedPIMS.query(createPersonnelAssignmentQuery, {
//         replacements: {
//           employeeNumber: args.input.employeeNumber,
//           workstationCode: args.input.workstationCode,
//           workstationExtCode: args.input.workstationExtCode,
//           dateFrom: args.input.dateFrom,
//           dateTo: args.input.dateTo,
//           basis: args.input.basis,
//           document: args.input.document,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createPersonnelAssignmentResult[0];

//       return result;
//     },
//     async updateCompleteName(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateCompleteNameResult = await sequelizedPIMS.query(updateCompleteNameQuery, {
//         replacements: {
//           code: args.input.code,
//           firstName: args.input.firstName,
//           middleName: args.input.middleName,
//           maidenName: args.input.maidenName,
//           lastName: args.input.lastName,
//           suffixName: args.input.suffixName,
//           nickName: args.input.nickName,
//           updatedBy: args.input.updatedBy,
//           updatedAt: moment(new Date).tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = updateCompleteNameResult[0];

//       return result;
//     },
//     async updateOtherPersonalInformation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateOtherPersonalInformationResult = await sequelizedPIMS.query(updateOtherPersonalInformationQuery, {
//         replacements: {
//           code: args.input.code,
//           religionCode: args.input.religionCode,
//           birthDate: args.input.birthDate ? args.input.birthDate : null,
//           birthPlace: args.input.birthPlace,
//           originatingProvince: args.input.originatingProvince,
//           sex: args.input.sex,
//           civilStatus: args.input.civilStatus,
//           height: args.input.height,
//           weight: args.input.weight,
//           bloodType: args.input.bloodType,
//           pagibig: args.input.pagibig,
//           philhealth: args.input.philhealth,
//           gsis: args.input.gsis,
//           gsisID: args.input.gsisID,
//           gsisECard: args.input.gsisECard,
//           gsisBP: args.input.gsisBP,
//           fdNHA: args.input.fdNHA ? args.input.fdNHA : null,
//           fdGovernment: args.input.fdGovernment ? args.input.fdGovernment : null,
//           sss: args.input.sss,
//           tin: args.input.tin,
//           umid: args.input.umid,
//           crn: args.input.crn,
//           psn: args.input.psn,
//           citizenship: args.input.citizenship,
//           telephoneNumber: args.input.telephoneNumber,
//           mobileNumber: args.input.mobileNumber,
//           pvbAccount: args.input.pvbAccount,
//           emailAddress: args.input.emailAddress,
//           differentlyAbled: args.input.differentlyAbled,
//           typeOfDisability: args.input.typeOfDisability,
//           computerLiterate: args.input.computerLiterate,
//           withPRCLicense: args.input.withPRCLicense,
//           prcLicenseFile: args.input.prcLicenseFile,
//           updatedBy: args.input.updatedBy,
//           updatedAt: moment(new Date).tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = updateOtherPersonalInformationResult[0];

//       return result;
//     },
//     async createAddress(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createAddressResult = await sequelizedPIMS.query(createAddressQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           type: args.input.type,
//           houseBlockLotNo: args.input.houseBlockLotNo,
//           street: args.input.street,
//           subdivisionVillage: args.input.subdivisionVillage,
//           barangay: args.input.barangay,
//           cityMunicipality: args.input.cityMunicipality,
//           province: args.input.province,
//           zipCode: args.input.zipCode,
//           administrativeDistrict: args.input.administrativeDistrict,
//           congressionalDistrict: args.input.congressionalDistrict,
//           isActive: args.input.isActive,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createAddressResult[0];

//       return result;
//     },
//     async updateAddress(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const address = await sequelizedPIMS.query(profileAddressByIDQuery, {
//         replacements: { id: args.input.id },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (address.length == 0) {
//         result.message = 'Address code not exist';
//         result.status = 'error';
//       } else {
//         const updateAddressResult = await sequelizedPIMS.query(updateAddressQuery, {
//           replacements: {
//             id: args.input.id,
//             profileCode: args.input.profileCode,
//             type: args.input.type,
//             houseBlockLotNo: args.input.houseBlockLotNo,
//             street: args.input.street,
//             subdivisionVillage: args.input.subdivisionVillage,
//             barangay: args.input.barangay,
//             cityMunicipality: args.input.cityMunicipality,
//             province: args.input.province,
//             zipCode: args.input.zipCode,
//             administrativeDistrict: args.input.administrativeDistrict,
//             congressionalDistrict: args.input.congressionalDistrict,
//             isActive: args.input.isActive,
//             updatedBy: args.input.updatedBy,
//             updatedAt: moment(new Date).tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deleteAddress(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteDepartment = await sequelizedPIMS.query(deleteAddressByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createEducation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createEducationResult = await sequelizedPIMS.query(createEducationQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           level: args.input.level,
//           school: args.input.school,
//           description: args.input.description,
//           periodFrom: args.input.periodFrom,
//           periodTo: args.input.periodTo,
//           levelUnitsEarned: args.input.levelUnitsEarned,
//           yearGraduated: args.input.yearGraduated,
//           award: args.input.award,
//           remarks: args.input.remarks,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createEducationResult[0];

//       return result;
//     },
//     async updateEducation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const education = await sequelizedPIMS.query(profileEducationByIDQuery, {
//         replacements: { id: args.input.id },
//         type: Sequelize.QueryTypes.SELECT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       if (education.length == 0) {
//         result.message = 'Education code not exist';
//         result.status = 'error';
//       } else {
//         const updateEducationResult = await sequelizedPIMS.query(updateEducationQuery, {
//           replacements: {
//             id: args.input.id,
//             profileCode: args.input.profileCode,
//             level: args.input.level,
//             school: args.input.school,
//             description: args.input.description,
//             periodFrom: args.input.periodFrom,
//             periodTo: args.input.periodTo,
//             levelUnitsEarned: args.input.levelUnitsEarned,
//             yearGraduated: args.input.yearGraduated,
//             award: args.input.award,
//             remarks: args.input.remarks,
//             updatedBy: args.input.updatedBy,
//           },
//           type: Sequelize.QueryTypes.UPDATE,
//           raw: true,
//           nest: true,
//           logging: false,
//         }).then((results) => results).catch(console.error);

//         result.message = 'Successfully Updated';
//         result.status = 'success';
//       }

//       return result;
//     },
//     async deleteEducation(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteEducation = await sequelizedPIMS.query(deleteEducationByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async updatePhotosAndSignature(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updatePhotoAndSignatureResult = await sequelizedPIMS.query(updatePhotoAndSignatureQuery, {
//         replacements: {
//           code: args.input.code,
//           photo: args.input.photo,
//           signature: args.input.signature,
//           updatedBy: args.input.updatedBy,
//           updatedAt: moment(new Date).tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = updatePhotoAndSignatureResult[0];

//       return result;
//     },
//     async updateInCaseOfEmergency(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateInCaseOfEmergencyResult = await sequelizedPIMS.query(updateInCaseOfEmergencyQuery, {
//         replacements: {
//           code: args.input.code,
//           contactName: args.input.contactName,
//           contactRelationship: args.input.contactRelationship,
//           contactAddress: args.input.contactAddress,
//           contactNumber: args.input.contactNumber,
//           updatedBy: args.input.updatedBy,
//           updatedAt: moment(new Date).tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = updateInCaseOfEmergencyResult[0];

//       return result;
//     },
//     async createSpouse(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createSpouseResult = await sequelizedPIMS.query(createSpouseQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           firstName: args.input.firstName,
//           lastName: args.input.lastName,
//           middleName: args.input.middleName,
//           maidenName: args.input.maidenName,
//           suffixName: args.input.suffixName,
//           birthdate: args.input.birthdate,
//           occupation: args.input.occupation,
//           employerBusinessName: args.input.employerBusinessName,
//           businessAddress: args.input.businessAddress,
//           contactNumber: args.input.contactNumber,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createSpouseResult[0];

//       return result;
//     },
//     async updateSpouse(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateSpouseResult = await sequelizedPIMS.query(updateSpouseQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           firstName: args.input.firstName,
//           lastName: args.input.lastName,
//           middleName: args.input.middleName,
//           maidenName: args.input.maidenName,
//           suffixName: args.input.suffixName,
//           birthdate: args.input.birthdate ? args.input.birthdate : null,
//           occupation: args.input.occupation,
//           employerBusinessName: args.input.employerBusinessName,
//           businessAddress: args.input.businessAddress,
//           contactNumber: args.input.contactNumber,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteSpouse(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteSpouse = await sequelizedPIMS.query(deleteSpouseByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createChild(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createChildResult = await sequelizedPIMS.query(createChildQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           name: args.input.name,
//           birthdate: args.input.birthdate == '' ? null : args.input.birthdate,
//           order: args.input.order,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createChildResult[0];

//       return result;
//     },
//     async updateChild(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateChildResult = await sequelizedPIMS.query(updateChildQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           name: args.input.name,
//           birthdate: args.input.birthdate == '' ? null : args.input.birthdate,
//           order: args.input.order,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteChild(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteChild = await sequelizedPIMS.query(deleteChildByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createParent(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createParentResult = await sequelizedPIMS.query(createParentQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           firstName: args.input.firstName,
//           lastName: args.input.lastName,
//           middleName: args.input.middleName,
//           maidenName: args.input.maidenName,
//           suffixName: args.input.suffixName,
//           birthdate: args.input.birthdate == '' ? null : args.input.birthdate,
//           address: args.input.address,
//           contactNumber: args.input.contactNumber,
//           relationship: args.input.relationship,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createParentResult[0];

//       return result;
//     },
//     async updateParent(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateParentResult = await sequelizedPIMS.query(updateParentQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           firstName: args.input.firstName,
//           lastName: args.input.lastName,
//           middleName: args.input.middleName,
//           maidenName: args.input.maidenName,
//           suffixName: args.input.suffixName,
//           birthdate: args.input.birthdate == '' ? null : args.input.birthdate,
//           address: args.input.address,
//           contactNumber: args.input.contactNumber,
//           relationship: args.input.relationship,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteParent(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteParent = await sequelizedPIMS.query(deleteParentByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createEligibility(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createEligibilityResult = await sequelizedPIMS.query(createEligibilityQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           rating: args.input.rating,
//           dateOfExamConferment: args.input.dateOfExamConferment === '' ? null : args.input.dateOfExamConferment,
//           placeOfExamConferment: args.input.placeOfExamConferment,
//           licenseNumber: args.input.licenseNumber,
//           licenseValidityDate: args.input.licenseValidityDate === '' ? null : args.input.licenseValidityDate,
//           remarks: args.input.remarks,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createEligibilityResult[0];

//       return result;
//     },
//     async updateEligibility(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateEligibilityResult = await sequelizedPIMS.query(updateEligibilityQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           rating: args.input.rating,
//           dateOfExamConferment: args.input.dateOfExamConferment ? args.input.dateOfExamConferment : null,
//           placeOfExamConferment: args.input.placeOfExamConferment,
//           licenseNumber: args.input.licenseNumber,
//           licenseValidityDate: args.input.licenseValidityDate ? args.input.licenseValidityDate : null,
//           remarks: args.input.remarks,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteEligibility(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteEligibility = await sequelizedPIMS.query(deleteEligibilityByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createQuestion(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createQuestionResult = await sequelizedPIMS.query(createQuestionQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           oneA: args.input.oneA,
//           oneAIfYes: args.input.oneAIfYes,
//           oneB: args.input.oneB,
//           oneBIfYes: args.input.oneBIfYes,
//           twoA: args.input.twoA,
//           twoAIfYes: args.input.twoAIfYes,
//           twoB: args.input.twoB,
//           twoBIfYesDateFiled: args.input.twoBIfYesDateFiled,
//           twoBIfYesStatus: args.input.twoBIfYesStatus,
//           three: args.input.three,
//           threeIfYes: args.input.threeIfYes,
//           four: args.input.four,
//           fourIfYes: args.input.fourIfYes,
//           fiveA: args.input.fiveA,
//           fiveAIfYes: args.input.fiveAIfYes,
//           fiveB: args.input.fiveB,
//           fiveBIfYes: args.input.fiveBIfYes,
//           six: args.input.six,
//           sixIfYes: args.input.sixIfYes,
//           sevenA: args.input.sevenA,
//           sevenAIfYes: args.input.sevenAIfYes,
//           sevenB: args.input.sevenB,
//           sevenBIfYes: args.input.sevenBIfYes,
//           sevenC: args.input.sevenC,
//           sevenCIfYes: args.input.sevenCIfYes,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createQuestionResult[0];

//       return result;
//     },
//     async updateQuestion(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateQuestionResult = await sequelizedPIMS.query(updateQuestionQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           oneA: args.input.oneA,
//           oneAIfYes: args.input.oneAIfYes,
//           oneB: args.input.oneB,
//           oneBIfYes: args.input.oneBIfYes,
//           twoA: args.input.twoA,
//           twoAIfYes: args.input.twoAIfYes,
//           twoB: args.input.twoB,
//           twoBIfYesDateFiled: args.input.twoBIfYesDateFiled,
//           twoBIfYesStatus: args.input.twoBIfYesStatus,
//           three: args.input.three,
//           threeIfYes: args.input.threeIfYes,
//           four: args.input.four,
//           fourIfYes: args.input.fourIfYes,
//           fiveA: args.input.fiveA,
//           fiveAIfYes: args.input.fiveAIfYes,
//           fiveB: args.input.fiveB,
//           fiveBIfYes: args.input.fiveBIfYes,
//           six: args.input.six,
//           sixIfYes: args.input.sixIfYes,
//           sevenA: args.input.sevenA,
//           sevenAIfYes: args.input.sevenAIfYes,
//           sevenB: args.input.sevenB,
//           sevenBIfYes: args.input.sevenBIfYes,
//           sevenC: args.input.sevenC,
//           sevenCIfYes: args.input.sevenCIfYes,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async createReference(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createReferenceResult = await sequelizedPIMS.query(createReferenceQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           name: args.input.name,
//           address: args.input.address,
//           contactNumber: args.input.contactNumber,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createReferenceResult[0];

//       return result;
//     },
//     async updateReference(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateReferenceResult = await sequelizedPIMS.query(updateReferenceQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           name: args.input.name,
//           address: args.input.address,
//           contactNumber: args.input.contactNumber,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteReference(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteReference = await sequelizedPIMS.query(deleteReferenceByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createSkillHobby(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createSkillHobbyResult = await sequelizedPIMS.query(createSkillHobbyQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createSkillHobbyResult[0];

//       return result;
//     },
//     async updateSkillHobby(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateSkillHobbyResult = await sequelizedPIMS.query(updateSkillHobbyQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteSkillHobby(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteSkillHobby = await sequelizedPIMS.query(deleteSkillHobbyByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createDistinctionRecognition(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createDistinctionRecognitionResult = await sequelizedPIMS.query(createDistinctionRecognitionQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createDistinctionRecognitionResult[0];

//       return result;
//     },
//     async updateDistinctionRecognition(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateDistinctionRecognitionResult = await sequelizedPIMS.query(updateDistinctionRecognitionQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteDistinctionRecognition(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteDistinctionRecognition = await sequelizedPIMS.query(deleteDistinctionRecognitionByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createMembership(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createMembershipResult = await sequelizedPIMS.query(createMembershipQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createMembershipResult[0];

//       return result;
//     },
//     async updateMembership(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateMembershipResult = await sequelizedPIMS.query(updateMembershipQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteMembership(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteMembership = await sequelizedPIMS.query(deleteMembershipByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createVoluntary(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createVoluntaryResult = await sequelizedPIMS.query(createVoluntaryQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           organizationNameAddress: args.input.organizationNameAddress,
//           dateFrom: args.input.dateFrom ? args.input.dateFrom : null,
//           dateTo: args.input.dateTo ? args.input.dateTo : null,
//           hours: args.input.hours,
//           positionNatureOfWork: args.input.positionNatureOfWork,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createVoluntaryResult[0];

//       return result;
//     },
//     async updateVoluntary(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateVoluntaryResult = await sequelizedPIMS.query(updateVoluntaryQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           organizationNameAddress: args.input.organizationNameAddress,
//           dateFrom: args.input.dateFrom,
//           dateTo: args.input.dateTo,
//           hours: args.input.hours,
//           positionNatureOfWork: args.input.positionNatureOfWork,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteVoluntary(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteVoluntary = await sequelizedPIMS.query(deleteVoluntaryByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createVaccination(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createVaccinationResult = await sequelizedPIMS.query(createVaccinationQuery, {
//         replacements: {
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           category: args.input.category,
//           vaccinationDate: args.input.vaccinationDate ? args.input.vaccinationDate : null,
//           manufacturer: args.input.manufacturer,
//           batchNumber: args.input.batchNumber,
//           lotNumber: args.input.lotNumber,
//           healthFacility: args.input.healthFacility,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createVaccinationResult[0];

//       return result;
//     },
//     async updateVaccination(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateVaccinationResult = await sequelizedPIMS.query(updateVaccinationQuery, {
//         replacements: {
//           id: args.input.id,
//           profileCode: args.input.profileCode,
//           description: args.input.description,
//           category: args.input.category,
//           vaccinationDate: args.input.vaccinationDate ? args.input.vaccinationDate : null,
//           manufacturer: args.input.manufacturer,
//           batchNumber: args.input.batchNumber,
//           lotNumber: args.input.lotNumber,
//           healthFacility: args.input.healthFacility,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteVaccination(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteVaccination = await sequelizedPIMS.query(deleteVaccinationByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createSchool(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const createSchoolResult = await sequelizedPIMS.query(createSchoolQuery, {
//         replacements: {
//           name: args.input.name,
//           address: args.input.address,
//           createdBy: args.input.createdBy,
//         },
//         type: Sequelize.QueryTypes.INSERT,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Created';
//       result.status = 'success';
//       result.insertedID = createSchoolResult[0];

//       return result;
//     },
//     async updateSchool(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateSchoolResult = await sequelizedPIMS.query(updateSchoolQuery, {
//         replacements: {
//           id: args.input.id,
//           name: args.input.name,
//           address: args.input.address,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//     async deleteSchool(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//       };

//       const deleteSchool = await sequelizedPIMS.query(deleteSchoolByIDQuery, {
//         replacements: { id: args.id },
//         type: Sequelize.QueryTypes.DELETE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Deleted';
//       result.status = 'success';

//       return result;
//     },
//     async createProfileWithEmployeeNumber(obj, args) {
//       const profileResult = new Future();

//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//         insertedEmployeeNumber: null,
//         insertedProfileCode: null,
//       };

//       const errorThreshold = 5;
//       let errorCounter = 0;

//       const loop = async () => {
//         const pad = (num, size) => {
//           num = num.toString();
//           while (num.length < size) num = '0' + num;
//           return num;
//         }

//         if (args.input.employeeNumber) {
//           const profileList = await sequelizedPIMS.query(profileCOSNoFilterSortByCodeQuery, {
//             type: Sequelize.QueryTypes.SELECT,
//             raw: true,
//             nest: true,
//             logging: false,
//           }).then((results) => results).catch(console.error);

//           const lastCode = Math.max.apply(Math, profileList.map(function(item) { return parseInt(item.profileCode); }));
//           const newCode = lastCode + 1;

//           sequelizedPIMS.query(createProfileWithEmployeeNumberCOSQuery, {
//             replacements: {
//               code: newCode,
//               employeeNumber: args.input.employeeNumber,
//               firstName: args.input.firstName,
//               middleName: args.input.middleName,
//               maidenName: args.input.maidenName,
//               lastName: args.input.lastName,
//               suffixName: args.input.suffixName,
//               nickName: args.input.nickName,
//               createdBy: args.input.createdBy,
//             },
//             type: Sequelize.QueryTypes.INSERT,
//             raw: true,
//             nest: true,
//             logging: false,
//           }).then((results) => {
//             result.message = 'Successfully Created';
//             result.status = 'success';
//             result.insertedID = results[0];
//             result.insertedEmployeeNumber = args.input.employeeNumber;
//             result.insertedProfileCode = newCode;


//             profileResult.return(result);
//           }).catch((error) => {
//             console.log(error);

//             if (errorCounter < errorThreshold) {
//               errorCounter++;

//               loop();
//             } else {
//               result.message = 'Request timeout';
//               result.status = 'error';

//               profileResult.return(result);
//             }
//           });
//         } else {
//           const profileList = await sequelizedPIMS.query(profileCOSNoFilterQuery, {
//             type: Sequelize.QueryTypes.SELECT,
//             raw: true,
//             nest: true,
//             logging: false,
//           }).then((results) => results).catch(console.error);

//           const lastEmpNo = Math.max.apply(Math, profileList.map(function(item) { return item.employeeNumber ? parseInt(item.employeeNumber) : 0; }));
//           const lastCode = Math.max.apply(Math, profileList.map(function(item) { return parseInt(item.profileCode); }));
//           const newEmpNo = lastEmpNo + 1;
//           const newCode = lastCode + 1;

//           if (profileList.length > 0) {
//             sequelizedPIMS.query(createProfileWithEmployeeNumberCOSQuery, {
//               replacements: {
//                 code: newCode,
//                 employeeNumber: newEmpNo,
//                 firstName: args.input.firstName,
//                 middleName: args.input.middleName,
//                 maidenName: args.input.maidenName,
//                 lastName: args.input.lastName,
//                 suffixName: args.input.suffixName,
//                 nickName: args.input.nickName,
//                 createdBy: args.input.createdBy,
//               },
//               type: Sequelize.QueryTypes.INSERT,
//               raw: true,
//               nest: true,
//               logging: false,
//             }).then((results) => {
//               result.message = 'Successfully Created';
//               result.status = 'success';
//               result.insertedID = results[0];
//               result.insertedEmployeeNumber = newEmpNo;
//               result.insertedProfileCode = newCode;


//               profileResult.return(result);
//             }).catch((error) => {
//               console.log(error);

//               if (errorCounter < errorThreshold) {
//                 errorCounter++;

//                 loop();
//               } else {
//                 result.message = 'Request timeout';
//                 result.status = 'error';

//                 profileResult.return(result);
//               }
//             });
//           } else {
//             sequelizedPIMS.query(createProfileWithEmployeeNumberCOSQuery, {
//               replacements: {
//                 code: '1000000',
//                 employeeNumber: '100000',
//                 firstName: args.input.firstName,
//                 middleName: args.input.middleName,
//                 maidenName: args.input.maidenName,
//                 lastName: args.input.lastName,
//                 suffixName: args.input.suffixName,
//                 nickName: args.input.nickName,
//                 createdBy: args.input.createdBy,
//               },
//               type: Sequelize.QueryTypes.INSERT,
//               raw: true,
//               nest: true,
//               logging: false,
//             }).then((results) => {
//               result.message = 'Successfully Created';
//               result.status = 'success';
//               result.insertedID = results[0];
//               result.insertedEmployeeNumber = '1000000';
//               result.insertedProfileCode = '1000000';

//               profileResult.return(result);
//             }).catch((error) => {
//               if (errorCounter < errorThreshold) {
//                 errorCounter++;

//                 loop();
//               } else {
//                 result.message = 'Request timeout';
//                 result.status = 'error';

//                 profileResult.return(result);
//               }
//             });
//           }
//         }
//       }

//       loop();

//       return profileResult.wait();
//     },
//     async updateCurrentEmployment(obj, args) {
//       const result = {
//         message: '',
//         status: '',
//         insertedID: null,
//       };

//       const updateCurrentEmploymentResult = await sequelizedPIMS.query(updateCurrentEmploymentQuery, {
//         replacements: {
//           dataVersionID: args.input.dataVersionID,
//           departmentCode: args.input.departmentCode,
//           positionCode: args.input.positionCode,
//           chargeabilityCode: args.input.chargeabilityCode,
//           months: args.input.months,
//           dateFrom: args.input.dateFrom,
//           dateTo: args.input.dateTo,
//           remarks: args.input.remarks,
//           updatedBy: args.input.updatedBy,
//         },
//         type: Sequelize.QueryTypes.UPDATE,
//         raw: true,
//         nest: true,
//         logging: false,
//       }).then((results) => results).catch(console.error);

//       result.message = 'Successfully Updated';
//       result.status = 'success';

//       return result;
//     },
//   }
// }

// export default resolvers;