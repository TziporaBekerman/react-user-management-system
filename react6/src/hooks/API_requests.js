import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


const apiRequest = async (method, url, data = null) => {
    try {
        const response = await apiClient({
            method,
            url,
            data
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Server Error: ${error.response.status} - ${error.response.data?.message || error.response.statusText}`);
        } else if (error.request) {
            throw new Error('Network Error: No response from server');
        } else {
            throw new Error(`Request Error: ${error.message}`);
        }
    }
};

export const apiGet = (endpoint, params = {}, id = null) => {
    const url = id ? `${endpoint}/${id}` : endpoint;
    const queryString = Object.keys(params).length > 0 
        ? '?' + new URLSearchParams(params).toString() 
        : '';
    return apiRequest('GET', `${url}${queryString}`);
};

export const apiPost = (endpoint, data) => {
    return apiRequest('POST', endpoint, data);
};

export const apiPut = (endpoint, id, data) => {
    if (!id) throw new Error('ID is required for PUT requests');
    return apiRequest('PUT', `${endpoint}/${id}`, data);
};

export const apiPatch = (endpoint, id, data) => {
    if (!id) throw new Error('ID is required for PATCH requests');
    return apiRequest('PATCH', `${endpoint}/${id}`, data);
};

export const apiDelete = (endpoint, id) => {
    if (!id) throw new Error('ID is required for DELETE requests');
    return apiRequest('DELETE', `${endpoint}/${id}`);
};