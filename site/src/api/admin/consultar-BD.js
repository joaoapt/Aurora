import axios from 'axios'
import { API_URL } from '../config/configAPI';
const api = axios.create({
    baseURL: API_URL
})


//A por busca de tordos os livro
export async function buscarLivro(totos) {
    const buscar= await api.get('/consultar');
    return buscar.data
}