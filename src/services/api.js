import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: 'https://free.currconv.com/api/v7',
});

export default axiosInstance;