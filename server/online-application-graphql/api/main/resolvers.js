import Future from 'fibers/future';
import Sequelize, { and } from 'sequelize';

import {
  sequelizedPIMS,
} from '../../data/sequilizeConnectors';

import {
  religionQuery,
  religionByCodeQuery,
  profileQuery,
  profileByReligionQuery,
} from '../../data/queries/onlineApplication';

const resolvers = {
  Profile: {
    async religion(profile) {
      const religionByCodeResult = await sequelizedPIMS.query(religionByCodeQuery, {
        replacements: { religionCode: profile.religionCode },
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true,
        logging: false,
      }).then((results) => results).catch(console.error);

      return religionByCodeResult[0];
    }
  },
  Query: {
    async profiles(obj, args) {
      const profileResult = await sequelizedPIMS.query(profileQuery, {
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true,
        logging: false,
      }).then((results) => results).catch(console.error);

      return profileResult;
    },
    async religion(obj, args) {
      const religionResult = await sequelizedPIMS.query(religionQuery, {
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true,
        logging: false,
      }).then((results) => results).catch(console.error);

      return religionResult;
    },
    async firstReligion(obj, args) {
      let religion = {};

      const religionResult = await sequelizedPIMS.query(religionQuery, {
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true,
        logging: false,
      }).then((results) => results).catch(console.error);

      if (religionQuery.length) {
        religion = religionQuery[0];
      }

      return religionResult;
    },
    async profileByReligion(obj, args) {
      console.log(args.religionCode);

      const religionByCodeResult = await sequelizedPIMS.query(profileByReligionQuery, {
        replacements: { religionCode: args.religionCode },
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true,
        logging: false,
      }).then((results) => results).catch(console.error);

      return religionByCodeResult;
    }
  },
};

export default resolvers;
