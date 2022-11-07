import { Router } from "express";
import { listarEndereco, EnderecoUsuario, alterarEndereco } from "../repository/enderecoRepository.js";
const server = Router();


server.get('/lista/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await listarEndereco(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.post('/usuario/alterar/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;        
        const r = await alterarEndereco(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.post('/usuario/:id/endereco', async (req, resp) => {
    try {
         const id = req.params.id;
        const endereco = req.body;

        const r = await EnderecoUsuario(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
             erro: err.message
        });
    }
})


export default server;