import axios from 'axios';
import responseHandler from "./_responseHandler";
import errorHandler from "./_errorHandler";
import https from 'https';

const networkApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

networkApi.interceptors.response.use(
  response => responseHandler(response),
  error => Promise.reject(errorHandler(error.response))
);

export default networkApi;
