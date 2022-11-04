import { loginAdmin } from '../repository/adminRepository.js'
import { Router } from 'express';

const server = Router();


server.post('/admin/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await loginAdmin(email, senha);

        if (!resposta) {
            throw new Error('Ops, Ocorreu um Erro Inesperado. Tente Novamente!');
        }

        resp.send(resposta)

    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        });
    }
})


export default server;