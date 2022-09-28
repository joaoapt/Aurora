import { cadastrarLivro, ConsultarTodos } from '../repository/produtoRepository.js'

import { Router } from 'express'

const server = Router();

//cadaastro livro
server.post('/admin/cadastrar/livro', async (req, resp) => {
    try {
        const novolivro = req.body;
        if(!novolivro.categoria.trim()){
            throw new Error('O nome da categoria é OBRIGATÓRIO');
        }
        if(!novolivro.livro.trim()){
            throw new Error('O Titulo do Livro  é OBRIGATÓRIO');
        }
        const local = await cadastrarLivro (novolivro)
        resp.send(local)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

//consultar
server.get('/consultar', async ( req, resp) => {
    try {
        const resposta = await ConsultarTodos();
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;