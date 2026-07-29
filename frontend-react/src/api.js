import axios from 'axios';

const API_BASE = 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authApi = {
    login: (data) => api.post('/login', data),
    register: (data) => api.post('/register', data),
};

export const progressApi = {
    getProgress: (username) => api.get(`/progress/${username}`),
};

export const executionApi = {
    executeCode: (data) => api.post('/execute', data),
};

export default api;
