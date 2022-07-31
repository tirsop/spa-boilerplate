import axios from 'axios';

axios.defaults.baseURL = process.env.RAZZLE_API;

export default axios;