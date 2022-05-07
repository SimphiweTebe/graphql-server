const { ApolloError } = require('apollo-server-express');
const sw_api = require('../api/sw_api');

const poepleResolver = {

    Query: {
        people(_: any) {
            try {
                return sw_api.SW_API_ALL_PEOPLE()
            } catch (error) {
                console.log(error);
                
            }
        },
        page_people(_: any, args: { page: string }) {
            try {
                console.log(`Resolver: ${ typeof args.page}`);
                
                return sw_api.SW_API_PEOPLE(args.page)
            } catch (error) {
                console.log(error);
                
            }
        },
        search_people(_: any, args: { name: string}) {
            try {
                return sw_api.SW_API_SEARCH(args.name)
            } catch (error) {
                throw new ApolloError(error)
            }
        }
    }
}

module.exports = poepleResolver;