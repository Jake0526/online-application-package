import { WebApp } from 'meteor/webapp';
import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import cors from 'cors';
import express from 'express';

import mainTypeDefs from './api/main/typeDefs';
import mainResolver from './api/main/resolvers';

import mutationTypeDefs from './api/mutation/typeDefs';
import mutationResolver from './api/mutation/resolvers';

const schema = buildFederatedSchema([
  {
    typeDefs: mainTypeDefs,
    resolvers: mainResolver
  },
  // {
  //   typeDefs: mutationTypeDefs,
  //   resolvers: mutationResolver
  // }
]);

const app = new express();
app.use(cors());

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
      schema,
      playground: true,
      pretty: true,
      allowUndefinedInResolve: false,
      printErrors: true,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

console.log(`online application graphql is running`);

WebApp.connectHandlers.use(`/online-application/`, app);