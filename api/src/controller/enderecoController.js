import { Router } from "express";
import { listar, salvar, alterarEndereco } from "../repository/EnderecoRepository.js";
const server = Router();


server.get('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await listar(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;        
        await alterarEndereco(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;

        const r = await salvar(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;