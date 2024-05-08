import axios from "axios";

const meliInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export default meliInstance;
