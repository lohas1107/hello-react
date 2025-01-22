import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export const api = {
  signIn: (formData) => axios.post(`${API_BASE_URL}/v2/admin/signin`, formData),
  checkLogin: () => axios.post(`${API_BASE_URL}/v2/api/user/check`),

  getProducts: () => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/admin/products`),
};
