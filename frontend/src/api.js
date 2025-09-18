import axios from "axios";

// Base URL from env; default matches backend port 5001
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const registerUser = (data) =>
  axios.post(`${API_URL}/auth/register`, data); // POST /api/auth/register

export const loginUser = (data) =>
  axios.post(`${API_URL}/auth/login`, data);    // POST /api/auth/login

export const getDashboardData = (userId) =>
  axios.get(`${API_URL}/dashboard/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
