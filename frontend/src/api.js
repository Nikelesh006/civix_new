import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Example: login
export const loginUser = (data) =>
  axios.post(`${API_URL}/auth/login`, data);

// Example: register
export const registerUser = (data) =>
  axios.post(`${API_URL}/auth/register`, data);

// Example: get dashboard data
export const getDashboardData = (userId) =>
  axios.get(`${API_URL}/dashboard/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

// ...add other API functions as needed
