import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.MIX_API_BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
    }
});

export default axiosInstance;
