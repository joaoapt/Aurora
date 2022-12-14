import axios from 'axios'
import { API_URL } from '../config/configAPI';
const api = axios.create({
    baseURL: API_URL
})


export async function listarProdutosInicio() {
    const r = await api.get('/card/produto');
    return r.data;
}


export async function buscarProdutoPorId(id) {
    const r = await api.get('/api/produto/' + id);
    return r.data;
}

export async function buscarProdutovil(id) {
    const r = await api.get('/produtovil/' + id);
    return r.data;
}