export interface Timezones {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
  }
  export interface ICountry {
    name: string;
    phonecode: string;
    isoCode: string;
    flag: string;
    currency: string;
    latitude: string;
    longitude: string;
    timezones?: Timezones[];
    getAllCountries?(): ICountry[];
    getCountryByCode?(): ICountry;
  }

export interface IState {
    id: string;
    name: string;
    country_id: string;
}
export interface ICity {
   id: string;
   name: string;
   state_id: string;
}
