import axios from "axios";

axios.defaults.withCredentials = true;

const axiosHeader = axios.create({
    withCredentials: true
})

export default axiosHeader;