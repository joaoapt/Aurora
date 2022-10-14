import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function LoginAdmin(email, senha){
        const Marceloo = await api.post('/admin/login', {
            email: email,
            senha: senha
});

return Marceloo.data;
}