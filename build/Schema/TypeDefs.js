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
        count: Int
        next: String
        previous: String 
        results: [Person!]
    }

    type Home {
        name: String
        population: String
        diameter: String
        gravity: String
        terrain: String
        rotation_period: String
        orbital_period: String
    }

    #Queries

    type Query {
        people(page: Int!): People
        person(name: String!): Person
        home(url: String!): Home    
    }
`;
module.exports = peopleTypeDefs;
