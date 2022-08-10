import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://abhaysblog.herokuapp.com/api/",
});