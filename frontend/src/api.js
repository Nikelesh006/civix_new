import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// Register User
export const registerUser = (formData) => API.post("/auth/register", formData);

// Login User
export const loginUser = (formData) => API.post("/auth/login", formData);
