const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }))

const typeDefs = require('./Schema/TypeDefs');
const resolvers = require('./Schema/Resolvers');

const server = new ApolloServer({ 
    typeDefs, resolvers, 
    introspection: true, 
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground] 
});

(
    async function() {
        await server.start()
        server.applyMiddleware({ app, path: "/api" });
        app.listen({ port: process.env.PORT || 5000 }, ()=>{
            console.log('Server running on port 5000');
        });
    }
)();
