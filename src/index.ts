const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const express = require('express');

const typeDefs = require('./Schema/TypeDefs');
const resolvers = require('./Schema/Resolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageGraphQLPlayground] });

const start = async ()=> {
    await server.start()
    server.applyMiddleware({ app });
}
start();

//fix heroku get error
app.get('/', (req: any,res:any)=>{
    res.send('Hello world!')
})

app.listen({ port: 5000 }, ()=>{
    console.log('Server running on port 5000');
});