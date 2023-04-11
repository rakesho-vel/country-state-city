import { ICountry, ICity, IState } from "./src/interface";
export { ICountry, ICity, IState } from "./src/interface";
declare const _default: {
    getCountryById: (id: string) => ICountry;
    getStateById: (id: string) => IState;
    getStatesOfCountry: (countryCode: string) => IState[];
    getCitiesOfState: (stateCode: string) => ICity[];
    getAllCountries: () => ICountry[];
};
export default _default;
