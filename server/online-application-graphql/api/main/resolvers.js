import Future from 'fibers/future';
import Sequelize, { and } from 'sequelize';

// import {
//   sequelizedPIMS
// } from '../../data/sequilizeConnectors';

// import {
//   profileCOSQuery
// } from '../../data/queries/pims';

const resolvers = {
  Query: {
    async testQuery(obj, args) {
      let result = [];

      return result;
    }
  },
};

export default resolvers;
