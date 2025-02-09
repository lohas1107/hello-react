import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export const api = {
  getProducts: (page = 1) => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/products?page=${page}`),
  getProduct: (productId) => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/product/${productId}`),

  getCart: () => axios.get(`${API_BASE_URL}/v2/api/${API_PATH}/cart`),
  addToCart: (productId, qty) => axios.post(`${API_BASE_URL}/v2/api/${API_PATH}/cart`, { data: { product_id: productId, qty } }),
  updateCart: (productId, qty) => axios.put(`${API_BASE_URL}/v2/api/${API_PATH}/cart/${productId}`, { data: { product_id: productId, qty } }),
  deleteCart: (productId) => axios.delete(`${API_BASE_URL}/v2/api/${API_PATH}/cart/${productId}`),
  clearCart: () => axios.delete(`${API_BASE_URL}/v2/api/${API_PATH}/carts`),

  createOrder: (data) => axios.post(`${API_BASE_URL}/v2/api/${API_PATH}/order`, { data: { user: data, message: data.message } }),
};
