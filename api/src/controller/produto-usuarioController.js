import { buscarProdutoPorId, listarProdutosInicio } from "../repository/produtoRepository.js";

import { Router } from "express";
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


export default server;