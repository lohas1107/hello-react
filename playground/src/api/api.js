import axios from 'axios';

const API_BASE_URL = 'https://ec-course-api.hexschool.io';
const API_PATH = 'irene';

export const api = {
  signIn: (formData) => axios.post(`${API_BASE_URL}/v2/admin/signin`, formData),
  checkLogin: () => axios.post(`${API_BASE_URL}/v2/api/user/check`),

  getProducts: () => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/admin/products`),
};
