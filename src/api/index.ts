import axios, { AxiosInstance } from 'axios';

const SERVER_BASE_URL = 'http://localhost:3001';

const customAPI: AxiosInstance = axios.create({
  baseURL: `${SERVER_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAPI;
