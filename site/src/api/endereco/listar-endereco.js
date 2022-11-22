import { API_URL } from '../config/configAPI';
import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async function salvarEndereco(idUsuario, referencia, cep, rua, bairro, cidade, estado, pais, numero, complemento) {
    const r = await api.post('/usuario/' + idUsuario + '/endereco', { referencia, cep, rua, bairro, cidade, estado, pais, numero, complemento });
    return r.data;
}

export async function listar(idUsuario) {
    const r = await api.get('/lista/' + idUsuario + '/endereco');
    return r.data;
}