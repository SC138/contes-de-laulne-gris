// src/services/api.js
import axios from 'axios';

const API_URL = 'https://ton-instance-strapi.herokuapp.com';

export const fetchArticles = async () => {
  const response = await axios.get(`${API_URL}/articles`);
  return response.data;
};

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

