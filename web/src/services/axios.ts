import axios from 'axios';

const httpAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

export default httpAxios;