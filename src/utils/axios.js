// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tu-api.com/api/', // URL de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
