// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Aquí va la URL de tu backend

// Login
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));  // Guardamos el token en localStorage
  }
  return response.data;
};

// Registro
export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

// Obtener el usuario logueado
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Logout
export const logout = () => {
  localStorage.removeItem('user');
};
