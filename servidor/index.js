import express from 'express';
// import  graphqlHTTP  from 'express-graphql';

import  {ApolloServer}  from 'apollo-server-express';
import bodyParser from 'body-parser';
import { typeDefs } from './data/schema'


import {resolvers} from './data/resolvers';

const app = new express();

const server = new ApolloServer({typeDefs,resolvers });

server.applyMiddleware({app});

app.listen({port:4000},()=>{console.log(`el servidor esta corriendo http//localhost:4000 ${server.graphqlPath}`)});
