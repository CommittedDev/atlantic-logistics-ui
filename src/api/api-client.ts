import axios from 'axios';

const baseURL = 'https://talking-apps-channels-server.onrender.com/';

const myApiClient = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    cache: 'no-cache',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  },
});

export default myApiClient;
