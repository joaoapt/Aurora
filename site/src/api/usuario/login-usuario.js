import axios from 'axios'
import { API_URL } from '../config/configAPI';

const api = axios.create({
    baseURL: API_URL
})

export async function Login(email, senha){
    const Marcelo = await api.post('/login/usuario', {
            email: email,
            senha: senha
    });

    return Marcelo.data;
}

export async function novoLogin(nome ,email, senha){
    const Martelo = await api.post('/cadastrar/usuario', {
        nome: nome,
        email: email,
        senha: senha
    });
return Martelo.data;
}

export async function consultar(id){
    const Marte = await api.get('/info/usuario/' + id);
    return Marte.data;
} 