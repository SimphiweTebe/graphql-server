"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: '*' }));
const typeDefs = require('./Schema/TypeDefs');
const resolvers = require('./Schema/Resolvers');
const server = new ApolloServer({ typeDefs, resolvers, introspection: true, plugins: [ApolloServerPluginLandingPageGraphQLPlayground] });
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    server.applyMiddleware({ app, path: "/api" });
    app.listen({ port: process.env.PORT || 5000 }, () => {
        console.log('Server running on port 5000');
    });
});
start();
