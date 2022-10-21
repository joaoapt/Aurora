import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function listarProdutosInicio() {
    const r = await api.get('/api/produto');
    return r.data;
}


export async function buscarProdutoPorId(id) {
    const r = await api.get('/api/produto/' + id);
    return r.data;
}