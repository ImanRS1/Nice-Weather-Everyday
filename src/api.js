

const base_url = "https://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=";

/* const base_url = "http://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=london"; */

/* export const searchLocationURL = (location) => `${base_url}${location}`;
 */

export const defaultLocationURL = () => `${base_url}stockholm`;
export const searchLocationURL = (location) => `${base_url}${location}`;
export const forecastLocationURL = (location) => `https://api.weatherapi.com/v1/forecast.json?key=0abe7ad125fb4e93af2141636212003&q=${location}&days=7`;



