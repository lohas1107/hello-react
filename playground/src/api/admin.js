import { api } from './api';
import axios from 'axios';

export const admin = {
  login: async (formData) => {
    try {
      const response = await api.signIn(formData);
      const { token, expired } = response.data;
      document.cookie = `accessToken=${token}; expires=${new Date(expired)}`;
    } catch (error) {
      alert(error.response.data.message);
    }
  },
  checkLogin: async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('accessToken='))
        ?.split('=')[1];
      
      if (!token) {
        return false;
      }

      axios.defaults.headers.common.Authorization = token;
      const response = await api.checkLogin();
      return response.data.success;
    } catch (error) {
      return false;
    }
  },
}; 