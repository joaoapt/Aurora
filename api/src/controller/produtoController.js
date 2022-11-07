import { cadastrarLivro, ConsultarTodos, Editar} from '../repository/produtoRepository.js'
import { validarProduto } from '../service/produto.js'
import { Router } from 'express'
import multer from 'multer'
const server = Router();
const upload = multer({ dest: 'storage/produto' });


//cadaastro livro
server.post('/cadastrar/livro', async (req, resp) => {
    try {
        const novolivro = req.body;
        await validarProduto(novolivro);
        await cadastrarLivro(novolivro);
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
})


server.put('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body;
        await Editar(id, produto);
        
        resp.status(204).send();

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


//consultar
server.get('/consultar', async (req,resp) => {
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