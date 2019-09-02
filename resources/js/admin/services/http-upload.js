import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
    }
});

export default axiosInstance;
