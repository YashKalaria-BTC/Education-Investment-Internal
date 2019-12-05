import axios from 'axios';

const client = axios.create({
  baseURL: 'Base URL',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
