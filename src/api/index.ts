import axios, { AxiosInstance } from 'axios';

const SERVER_BASE_URL =
  process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

const customAPI: AxiosInstance = axios.create({
  baseURL: `${SERVER_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAPI;
