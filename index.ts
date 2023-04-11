import countryList from "./lib/country.json";
import stateList from "./lib/state.json";
import { ICountry, ICity, IState } from "./src/interface";
import cityList from "./lib/city.json";

export { ICountry, ICity, IState } from "./src/interface";

const _findEntry = (source: any[], id: string) => {
  if (id && source != null) {
    const idx = source.findIndex((c: any) => c.isoCode === id);

    return idx !== -1 ? source[idx] : "";
  }

  return "";
};

const _compare = (a: any, b: any) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;

  return 0;
};

export default {
  getCountryById: function (id: string): ICountry {
    return _findEntry(countryList, id);
  },
  getStateById: function (id: string): IState {
    return _findEntry(stateList, id);
  },
  // getCityById: function (id: string): ICity {
  //   return _findEntry(cityList, id);
  // },
  getStatesOfCountry: function (countryCode: string): IState[] {
    const states = stateList.filter(
      (value) => value.countryCode === countryCode
    );

    return states.sort(_compare);
  },
  // getCitiesOfState: function (stateCode: string): ICity[] {
  //   const cities = cityList.filter((value) => value.stateCode === stateCode);

  //   return cities.sort(_compare);
  // },
  getAllCountries: function (): ICountry[] {
    return countryList;
  },
};
