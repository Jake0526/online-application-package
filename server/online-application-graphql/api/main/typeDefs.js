import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend 
  type Query {
    profiles: [Profile]
    religion: [Religion]
    firstReligion: Religion
    profileByReligion(religionCode: String!): [Profile]
  }

  type Office {
    code: String
    name: String
  }

  type Religion {
    id: Int
    code: String
    name: String
    createdAt: String
    updatedAt: String
  }

  type Profile {
    id: String
    profileCode: String
    religion: Religion
    firstName: String
    lastName: String
    middleName: String
  }

  type Address{
    lotNo: String
    building: String
  }

`;

export default typeDefs;
