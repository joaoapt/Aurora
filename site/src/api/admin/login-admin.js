import axios from 'axios'
import { API_URL } from '../config/configAPI';
const api = axios.create({
    baseURL: API_URL
})
export async function LoginAdmin(email, senha){
        const Marceloo = await api.post('/admin/login', {
            email: email,
            senha: senha
});

return Marceloo.data;
}