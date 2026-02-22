import { useState, useCallback } from 'react';
import { apiGet, apiPost, apiPatch, apiDelete } from './API_requests';
export default function useResource(endpoint, queryParams = {}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const fetchAll = useCallback(async () => {
        try {
            const response = await apiGet(endpoint, queryParams);
            setData(response);
        } catch (e) { setError(e.message); }
    }, [endpoint]);

    const create = async (payload) => {
        try {
            const created = await apiPost(endpoint, payload);
            setData(prev => [...prev, created]);
        } catch (e) {
            setError(e.message);
        }
    };

    const update = async (id, payload) => {
        try {
            const updated = await apiPatch(endpoint, id, payload);
            setData(prev => prev.map(i => i.id === id ? updated : i));
        }
        catch (e) { setError(e.message); }
    };
    
    const remove = async (id) => {
        try {
            await apiDelete(endpoint, id);
            setData(prev => prev.filter(i => i.id !== id));
        } catch (e) { setError(e.message); }
    };
    return { data, error, fetchAll, create, update, remove, setError };
}