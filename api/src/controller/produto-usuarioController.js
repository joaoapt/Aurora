import {buscarProdutoPorId,listarProdutosInicio,buscarProdutovil,buscarProdutoCategorias,buscarProdutosClassificacao,buscarProdutos} from '../repository/produtoRepository.js'
import { Router } from "express";
import { con } from '../repository/connection.js';
const server = Router();

server.get('/card/produto', async (req, resp) => {
    try {
        const r = await listarProdutosInicio();
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/categoria', async (req, resp) => {
    try {
        const { nome } = req.query;
        const r = await buscarProdutoCategorias(nome);
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/classificacao', async (req, resp) => {
    try {
        const { nome } = req.query;
        const r = await buscarProdutosClassificacao(nome);
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/livro', async (req, resp) => {
    try {
        const { nome } = req.query;
        const r = await buscarProdutos(nome);
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produto = await buscarProdutoPorId(id);

        resp.send({
            info: produto
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produtovil/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produto = await buscarProdutovil(id);

        resp.send({
            info: produto
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;