import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function salvar(idUsuario, referencia, cep, rua, bairro, cidade, estado, pais, numero, complemento) {
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco', { referencia, cep, rua, bairro, cidade, estado, pais, numero, complemento });
    return r.data;
}

export async function editar(idUsuario, referencia, cep, rua, bairro, cidade, estado, pais, numero, complemento) {
    const r = await api.put('/api/usuario/' + idUsuario + '/endereco', { referencia, cep, rua, bairro, cidade, estado, pais, numero, complemento });
    return r.data;
}


export async function listar(idUsuario) {
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco');
    return r.data;
}