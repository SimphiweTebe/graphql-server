"use strict";
const { gql } = require('apollo-server-express');
const peopleTypeDefs = gql `

    type Person {
        name: String!
        height: String
        mass: String
        gender: String
        homeworld: String
    }

    type People {
        next: String
        previous: String 
        results: [Person!]
    }

    #Queries

    type Query {
        getPeople: People
        getPerson(name: String!): Person    
    }
`;
module.exports = peopleTypeDefs;
