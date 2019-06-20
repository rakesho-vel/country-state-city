# country-state-city

Basic library for Country, State and City

Data taken from:

https://github.com/hiiamrohit/Countries-States-Cities-database

# Install

`npm i country-state-city`

# Usage

## Latest Release : `v1.0.0` (First Major Version Release - Not backward compatible)

- ES6 Module usage

  ```js
  import csc from "country-state-city";

  // Import Interfaces`
  import { ICountry, IState, ICity } from "country-state-city";
  ```

- AMD Module usage

  ```js
  let csc = require("country-state-city").default;
  ```

## For versions `v0.1.8 and below`

- ES6 Module usage

  ```js
  import csc from "country-state-city";
  ```

- AMD Module usage

  ```js
  let csc = require("country-state-city");
  ```

# Docs

## getCountryById(id)

It accepts a valid `CountryId` and returns _Country Details_

type: **json | ICountry**

```js
{
	"id": "4",
	"sortname": "AS",
	"name": "American Samoa",
	"phonecode": "1684"
}
```

## getStateById(id)

It accepts a valid `StateId` and returns _State Details_

type: **json | IState**

```js
{
	"id": 4119,
	"name": "Midlands",
	"country_id": "246"
}
```

## getStatesOfCountry(countryId)

It accepts a valid `CountryId` and returns _all States_ as Array of JSON

type: **array of json | IState**

```js
[
  {
    id: 4119,
    name: "Midlands",
    country_id: "246",
  },
];
```

## getAllCountries

It returns **all Countries**

type: **array of json | ICountry**

```js
[
  {
    id: "4",
    sortname: "AS",
    name: "American Samoa",
    phonecode: "1684",
  },
];
```

## Special Thanks

[@baywet](https://github.com/baywet) - For mentoring Javascript to Typescript Conversion

## Change Logs

**v1.0.0**

1. `export = {}` changed to `export default` in index.ts.
2. `Interface` type `re-exported` from `index.ts`.
3. `Compatible` with `ES6` module syntax.
4. `Compatible` with `AMD` module - using `require('../index').default`.
5. Add tests for Interface Re-Exports.
6. Test cases for both AMD modules and ES6 modules usage.
7. Common Test Cases are being shared between AMD and ES6 modules test files.

**v0.1.8**

1. Development code - Javascript to Typescript conversion: [#12](https://github.com/harpreetkhalsagtbit/country-state-city/pull/12)

**v0.1.0**

1. Fix: [#2](https://github.com/harpreetkhalsagtbit/country-state-city/issues/2)
2. Fix: [#3](https://github.com/harpreetkhalsagtbit/country-state-city/issues/3)
3. Added some missing states and cities for Canada and US
