const { gql } = require('apollo-server-express');

const peopleTypeDefs = gql`

    type Person {
        name: String!
        height: String!
        mass: String!
        gender: String!
        homeworld: String!
    }

    type People {
        count: Int
        next: String
        previous: String 
        results: [Person!]!
    }

    #Queries

    type Query {
        people: People
        page_people(page: String!): People
        search_people(name: String!): Person
    }
`;

module.exports = peopleTypeDefs;