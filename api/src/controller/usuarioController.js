import { cadastrarLogin, Consultar, Login } from '../repository/usuarioRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/login/usuario', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await Login(email, senha);

        if (!resposta) {
            throw new Error('Ops, Ocorreu um Erro Inesperado. Tente Novamente!');
        }
        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.get('/info/usuario/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await Consultar(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/cadastrar/usuario', async (req, resp) => {
    try {
        const novoLogin = req.body;
        
        if (!novoLogin.nome)
            throw new Error('O seu Nome é Obrigatório!');
        
        if (!novoLogin.email)
            throw new Error('O seu Email é Obrigatório!');
        
        if (!novoLogin.senha)
            throw new Error('A sua Senha é Obrigatório!');

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