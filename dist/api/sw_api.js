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
const axios = require('axios');
const SW_API_PEOPLE = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios.get(`https://swapi.dev/api/people`);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
const SW_API_SEARCH = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios.get(`https://swapi.dev/api/people/?search=${name}`);
        return data.results[0];
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = { SW_API_PEOPLE, SW_API_SEARCH };
