"use strict";
const { ApolloError } = require('apollo-server-express');
const sw_api = require('../api/sw_api');
const poepleResolver = {
    Query: {
        people(_, args) {
            try {
                return sw_api.SW_API_PEOPLE(args.page);
            }
            catch (error) {
                throw new ApolloError(error);
            }
        },
        person(_, args) {
            try {
                return sw_api.SW_API_SEARCH(args.name);
            }
            catch (error) {
                throw new ApolloError(error);
            }
        },
        home(_, args) {
            try {
                return sw_api.SW_API_HOME(args.url);
            }
            catch (error) {
                throw new ApolloError(error);
            }
        }
    }
};
module.exports = poepleResolver;
