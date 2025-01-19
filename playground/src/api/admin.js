import axios from 'axios';

const API_BASE_URL = 'https://ec-course-api.hexschool.io';

export const admin = {
  signIn: (formData) => axios.post(`${API_BASE_URL}/v2/admin/signin`, formData),
}; 