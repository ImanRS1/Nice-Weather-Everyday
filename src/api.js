

const base_url = "http://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=london";

/* export const searchLocationURL = (location) => `${base_url}${location}`;
 */

export const searchLocationURL = () => `${base_url}`;
export const forecastLocationURL = (location) => `http://api.weatherapi.com/v1/forecast.json?key=0abe7ad125fb4e93af2141636212003&q=${location}&days=7`;

