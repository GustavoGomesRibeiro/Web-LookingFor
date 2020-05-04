import axios from 'axios';
// import { getToken } from './authService';

const apiService = axios.create({
    baseURL: "http://localhost:3333"
});

// apiService.interceptors.request.use(async config => {
//     const token = getToken();
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
// });

export default apiService;

