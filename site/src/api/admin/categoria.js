import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})
import { API_URL } from '../config/configAPI';

export async function listarCategorias() {
    const r = await api.get('/admin/categoria');
    return r.data;
}