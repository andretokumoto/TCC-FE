import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api-backend-hddt.onrender.com/api/",
})
