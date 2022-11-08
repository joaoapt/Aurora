import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})
import { API_URL } from '../config/configAPI';

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