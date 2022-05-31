import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
      testQuery: [TestQuery]
  }

  type TestQuery {
    id: String
    name: String
  }
`;

export default typeDefs;
