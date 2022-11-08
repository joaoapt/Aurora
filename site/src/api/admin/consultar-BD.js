import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})
import { API_URL } from '../config/configAPI';

//A Por Busca de Tordos os Livro
export async function buscarLivro(totos) {
    const buscar= await api.get('/consultar');
    return buscar.data
}