import axios from 'axios';
import {signOut} from 'firebase/auth';
import auth from '../firebase.init';

const axiosPrivate = axios.create({withCredentials: true});

// axiosPrivate.interceptors.request.use(
//     function (config) {
//         if (!config.headers.authorization) {
//             config.headers.authorization = `Bearer ${localStorage.getItem(
//                 'accessToken'
//             )}`;
//         }
//         return config;
//     },
//     function (err) {
//         return Promise.reject(err);
//     }
// );

axiosPrivate.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log(error);
        if (error.response.status === 403 || error.response.status === 401) return signOut(auth);
        return Promise.reject(error);
    }
);

export default axiosPrivate;
