import axios from "axios";

const instance = axios.create({
    baseURL:import.meta.env.VITE_BACKENDURL
});

instance.defaults.withCredentials = true;

export default instance;