import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-3v9p.onrender.com/api",
});

export const sendMessage = (data) => API.post("/contact", data);
