import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://demo.webhouseusa.com/api'
});

export default Api;
