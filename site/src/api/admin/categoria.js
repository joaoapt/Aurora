import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function listarCategorias() {
    const r = await api.get('/admin/categoria');
    return r.data;
}