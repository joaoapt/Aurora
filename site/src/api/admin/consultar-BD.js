import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

//A Por Busca de Tordos os Livro
export async function buscarLivro(totos) {
    const buscar= await api.get('/consultar');
    return buscar.data
}