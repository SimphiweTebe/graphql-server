"use strict";
const { ApolloError } = require('apollo-server-express');
const sw_api = require('../api/sw_api');
const poepleResolver = {
    Query: {
        getPeople() {
            try {
                return sw_api.SW_API_PEOPLE();
            }
            catch (error) {
                throw new ApolloError(error);
            }
        },
        getPerson(_, args) {
            try {
                return sw_api.SW_API_SEARCH(args.name);
            }
            catch (error) {
                throw new ApolloError(error);
            }
        }
    }
};
module.exports = poepleResolver;
