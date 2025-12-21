import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3030' //안드로이드
      : 'http://localhost:3030',
  withCredentials: true,
});

export default axiosInstance;
