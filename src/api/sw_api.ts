const axios = require('axios');

const SW_API_ALL_PEOPLE = async () => {
    try {
        const {data} = await axios.get(`https://swapi.dev/api/people/`);
        return data
    } catch (error) {
        console.log(error)
    }
}

const SW_API_PEOPLE = async (page: string) => {
    try {
        const {data} = await axios.get(`https://swapi.dev/api/people/?${page}`);
        return data
    } catch (error) {
        console.log(error)
    }
}

const SW_API_SEARCH = async (name: string) => {
    try {
        const {data} = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
        return data.results[0]
    } catch (error) {
        console.log(error)
    }
}

module.exports = { SW_API_PEOPLE, SW_API_SEARCH, SW_API_ALL_PEOPLE };