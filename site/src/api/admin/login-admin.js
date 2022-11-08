import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})
import { API_URL } from '../config/configAPI';

export async function LoginAdmin(email, senha){
        const Marceloo = await api.post('/admin/login', {
            email: email,
            senha: senha
});

return Marceloo.data;
}