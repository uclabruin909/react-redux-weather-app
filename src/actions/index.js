import axios from 'axios';

const API_KEY = '20b1728dc1edf27951a7063e7e682ba9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  let url = `${ROOT_URL}&q=${city},us`;
  let weatherRequest = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: weatherRequest
  };
};