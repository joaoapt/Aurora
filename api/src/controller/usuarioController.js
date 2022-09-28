import { cadastrarLogin, login } from '../repository/usuarioRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await login(email, senha);
        
        if (!resposta) {
            throw new Error('Opps ocorreu um erro inesperado. Tente novamente');
        }

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.post('/usuario', async (req, resp) => {
    try {
        const novoLogin = req.body;
        
        if (!novoLogin.usuario)
            throw new Error('O seu Nome é obrigatório!');
        
        if (!novoLogin.email)
            throw new Error('O seu Email é obrigatório!');
        
        if (!novoLogin.senha)
            throw new Error('A sua Senha é obrigatório!');

        const novo = await cadastrarLogin (novoLogin);
        resp.send(novo)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;