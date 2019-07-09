"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var executeAllTests = function (csc) {
    test('Check for Country By Id ', function () {
        var code = '38';
        var country = csc.getCountryById(code);
        expect(country).toEqual({ "id": "38", "name": "Canada", "phonecode": "1", "sortname": "CA" });
    });
    test('Check for State By Id ', function () {
        var code = '32';
        var state = csc.getStateById(code);
        expect(state).toEqual({ "country_id": "101", "id": "32", "name": "Punjab" });
    });
    test('Check for City By Id ', function () {
        var code = '31439';
        var city = csc.getCityById(code);
        expect(city).toEqual({ "id": "31439", "name": "Lahore", "state_id": "2728" });
    });
    test('Check for Canada States', function () {
        var code = '38';
        var country = csc.getCountryById(code);
        var states = csc.getStatesOfCountry(country.id);
        var names = states.map(function (state) { return state.name; });
        expect(names).toEqual(['Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Northwest Territories',
            'Nova Scotia',
            'Nunavut',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Yukon']);
    });
    test('Check All States for United States Of America', function () {
        var code = '231';
        var country = csc.getCountryById(code);
        var states = csc.getStatesOfCountry(country.id);
        var names = states.map(function (state) { return state.name; });
        expect(names).toEqual(['Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'Byram',
            'California',
            'Cokato',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Lowa',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Medfield',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Jersy',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Ontario',
            'Oregon',
            'Pennsylvania',
            'Ramey',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Sublimity',
            'Tennessee',
            'Texas',
            'Trimble',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming']);
    });
    test('Check States for India', function () {
        var code = '101';
        var country = csc.getCountryById(code);
        var states = csc.getStatesOfCountry(country.id);
        var names = states.map(function (state) { return state.name; });
        expect(names).toEqual(['Andaman and Nicobar Islands',
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chandigarh',
            'Chhattisgarh',
            'Dadra and Nagar Haveli',
            'Daman and Diu',
            'Delhi',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jammu and Kashmir',
            'Jharkhand',
            'Karnataka',
            'Kenmore',
            'Kerala',
            'Lakshadweep',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Narora',
            'Natwar',
            'Odisha',
            'Paschim Medinipur',
            'Pondicherry',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'Vaishali',
            'West Bengal']);
    });
    test('Check Cities for Delhi', function () {
        var code = '101';
        var cities = csc.getCitiesOfState('10');
        var names = cities.map(function (city) { return city.name; });
        expect(names).toEqual(["Delhi", "New Delhi"]);
    });
};
exports.default = executeAllTests;
executeAllTests(index_1.default);
