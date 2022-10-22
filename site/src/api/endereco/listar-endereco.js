import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function salvar(idUsuario, referencia, cep, logradouro, bairro, cidade, estado, numero, complemento) {
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco', { referencia, cep, logradouro, bairro, cidade, estado, numero, complemento });
    return r.data;
}


export async function listar(idUsuario) {
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco');
    return r.data;
}