import axios from "axios";

const meliInstance = axios.create({
  baseURL: import.meta.env.BASE_URL
});

export default meliInstance;
