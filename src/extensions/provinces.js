import provinceData from 'provinces';

/**
 * Provides a list of short-code provinces (states, etc) for the country codes provided.
 */
export default (countries) => countries.reduce((regions, countryCode) =>
  regions.concat(
    provinceData
      .filter((province) => province.country === countryCode.toUpperCase())
      .map((province) => province.short)
      .sort(),
  ),
  [],
);
