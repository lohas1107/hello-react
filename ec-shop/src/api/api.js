import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export const api = {
  getProducts: (page = 1) => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/products?page=${page}`),

  getCart: () => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/cart`),
};
